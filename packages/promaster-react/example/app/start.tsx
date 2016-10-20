import React from "react";
import ReactDOM from "react-dom";
import {AmountInputBox} from "promaster-react/amount-fields/index";
import {Units, Amount} from "promaster-primitives/lib/classes";

ReactDOM.render(
	<h1>Hello, world!<AmountFieldExample1 />  </h1>,
	document.getElementById('root')
);

function AmountFieldExample1() {

	return (
		<div>Mitt fina amount field!
			<AmountInputBox
				isRequiredMessage="Is required"
				classNames={{input: "input", inputInvalid: "inputInvalid"}}
				errorMessage="This is the error message"
				inputDecimalCount={3}
				inputUnit={Units.Celsius}
				notNumericMessage="Not numeric"
				onValueChange={() => null}
				readOnly={false}
				value={Amount.create(10.0, Units.Celsius)}
			/> </div>
	);

}
