/*
 UI to enter an Amount. It will be entered in a specified unit and decimal count.
 The passed Amount value will be converted to the specified unit and decimal count if needed.
 The UI will ensure that the value is numeric before emitting a change event.
 It is also allowed to have a blank input in which case a change event with value of NULL will be emitted.
 */
import * as React from "react";
import {Amount, Unit} from "promaster-primitives";

export interface AmountInputBoxProps {
    readonly key?: string,
    readonly value: Amount<any>,
    readonly inputUnit: Unit<any>,
    readonly inputDecimalCount: number,
    readonly notNumericMessage: string,
    readonly isRequiredMessage: string,
    readonly errorMessage: string,
    readonly readOnly: boolean,
    readonly onValueChange: (newAmount: Amount<any>) => void,
    readonly classNames: AmountInputBoxClassNames,
}

export interface AmountInputBoxClassNames {
    readonly input: string,
    readonly inputInvalid: string,
}

interface State {
    readonly textValue: string,
    readonly isValid: boolean,
    readonly effectiveErrorMessage: string
}

export class AmountInputBox extends React.Component<AmountInputBoxProps, State> {

    constructor() {
        super();
        // What the optimal debounce is may vary between users. 350ms seems like a nice value...
        this._debouncedOnValueChange = debounce(this._debouncedOnValueChange, 350);
    }

    componentWillMount() {
        this.initStateFromProps(this.props);
    }

    componentWillReceiveProps(nextProps: AmountInputBoxProps) {
        this.initStateFromProps(nextProps);
    }

    initStateFromProps(initProps: AmountInputBoxProps) {
        const {value, inputUnit, inputDecimalCount} = initProps;
        if(!inputUnit)
            console.error("Missing inputUnit");
        if(!(inputDecimalCount !== null && inputDecimalCount !== undefined))
            console.error("Missing inputDecimalCount");
        const formattedValue = _formatWithUnitAndDecimalCount(value, inputUnit, inputDecimalCount);
        this.updateState(value, formattedValue);
    }

    render() {

        const {onValueChange, readOnly, classNames} = this.props;
        const {effectiveErrorMessage, textValue} = this.state;

        return (
            <input key="input"
                   type="text"
                   value={textValue}
                   readOnly={readOnly}
                   onChange={(e:any) => this._onChange(e, onValueChange)}
                   title={effectiveErrorMessage}
                   className={effectiveErrorMessage ? classNames.inputInvalid : classNames.input}/>
        );

    }

    _debouncedOnValueChange(newAmount: Amount<any>, onValueChange: (newAmount: Amount<any>) => void): void {
        // log("jk", "_debouncedOnValueChange");
        // An event can have been received when the input was valid, then the input has gone invalid
        // but we still received the delayed event from when the input was valid. Therefore
        // we need an extra check here to make sure that the current input is valid before we
        // dispatch the value change.
        if (this.state.isValid)
            onValueChange(newAmount);
    }

    _onChange(e: React.SyntheticEvent<any>, onValueChange: (newAmount: Amount<any>) => void) {
        const newStringValue = (e.target as HTMLInputElement).value.replace(",", ".");
        const {inputUnit, inputDecimalCount} = this.props;

        // If the change would add more decimals than allowed then ignore the change
        const stringDecimalCount = _getDecimalCountFromString(newStringValue);
        if (stringDecimalCount > inputDecimalCount)
            return;

        // Update the internal state and if the change resulted in a valid value then emit a change with that value
        const newAmount = _unformatWithUnitAndDecimalCount(newStringValue, inputUnit, inputDecimalCount);
        const isValid = this.updateState(newAmount, newStringValue);
        if (isValid && newAmount)
            this._debouncedOnValueChange(newAmount, onValueChange);
    }

    // We need to return a boolean is the new value is valid or not because state is not immidiately mutated
    updateState(newAmount: Amount<any> | null, newStringValue: string): boolean {
        const {isRequiredMessage, notNumericMessage, errorMessage} = this.props;
        const internalErrorMessage = getInternalErrorMessage(newAmount, newStringValue, isRequiredMessage, notNumericMessage);
        if (internalErrorMessage) {
            this.setState({isValid: false, textValue: newStringValue, effectiveErrorMessage: internalErrorMessage});
            return false;
        }
        else {
            this.setState({isValid: true, textValue: newStringValue, effectiveErrorMessage: errorMessage});
            return true;
        }
    }

}


function getInternalErrorMessage(newAmount: Amount<any> | null,
																 newStringValue: string,
																 isRequiredMessage: string,
																 notNumericMessage: string): string | null {

    // Check if blank and if required or not
    if (newStringValue.trim() === "" && isRequiredMessage) {
        // The user has not entred anything, but a value was required
        return isRequiredMessage;
    }
    if (newStringValue.trim() !== "" && !newAmount) {
        // The user has entered something, but it could not be converted to an amount (=was not numeric)
        return notNumericMessage;
    }
    return null;

}

function _formatWithUnitAndDecimalCount<T>(amount: Amount<T>, unit: Unit<T>, decimalCount: number): string {
    if (!amount)
        return "";

    // Determine the value to use
    let valueToUse: number;
    if (amount.unit === unit) {
        // No conversion needed, use the original number of decimals in the amount
        valueToUse = amount.value;
        // Determine number of decimals
        if (amount.decimalCount <= decimalCount)
            return valueToUse.toFixed(amount.decimalCount);
        else
            return valueToUse.toFixed(decimalCount);
    }
    else {
        // Conversion needed, use the max number of decimals so the conversion
        // result is as accurate as possible
        valueToUse = amount.valueAs(unit);
        return valueToUse.toFixed(decimalCount);
    }
}

function _unformatWithUnitAndDecimalCount<T>(text: string, unit: Unit<T>, inputDecimalCount: number): Amount<T> | null {
    if (!text || text.length === 0)
        return null;
    const parsedFloatValue = _filterFloat(text);
    if (isNaN(parsedFloatValue))
        return null;
    // Keep number of decimals from the entered text except if they are more than the formats decimal count
    const textDecimalCount = _getDecimalCountFromString(text);
    const finalDecimalCount = textDecimalCount > inputDecimalCount ? inputDecimalCount : textDecimalCount;
    const finalFloatValue = textDecimalCount > inputDecimalCount ? parseFloat(parsedFloatValue.toFixed(inputDecimalCount)) : parsedFloatValue;
    return Amount.create(finalFloatValue, unit, finalDecimalCount);
}

function _getDecimalCountFromString(stringValue: string) {
    const pointIndex = stringValue.indexOf('.');
    if (pointIndex >= 0)
        return stringValue.length - pointIndex - 1;
    return 0;
}

function _filterFloat(value: string): number {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
            .test(value))
        return Number(value);
    return NaN;
}

// (From underscore.js)
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(this: any, func: Function, wait: number, immediate?: boolean): any {
    let timeout: any;
    return function (this: any) {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
