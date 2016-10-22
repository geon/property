import * as React from "react";
import {PropertySelectors as Selectors} from "promaster-react";
import {PropertyValueSet, PropertyValue} from "promaster-primitives";
import {merge} from "./utils";

interface State {
  readonly propertyValueSet: PropertyValueSet.PropertyValueSet
}

export class TextboxPropertySelectorExample1 extends React.Component<{}, State> {

  constructor() {
    super();
    this.state = {
      propertyValueSet: PropertyValueSet.fromString("a='This is the value';b=3"),
    };
  }

  render() {

    // const propSelClassNames: Selectors.ComboboxPropertySelectorClassNames = {
    //   select: "select",
    //   selectInvalid: "selectInvalid",
    //   selectLocked: "selectLocked",
    //   selectInvalidLocked: "selectInvalidLocked",
    //   option: "option",
    //   optionInvalid: "optionInvalid",
    // };

    // console.log("state", this.state);

    return (
      <div>
        <div>
          ComboboxPropertySelector:
        </div>
        <div>
          PropertyValueSet: {PropertyValueSet.toString(this.state.propertyValueSet)}
        </div>
        <div>
          <Selectors.TextboxPropertySelector
            value={PropertyValueSet.getText("a", this.state.propertyValueSet) as string}
            onValueChange={(pv) =>
            this.setState(merge(this.state, {
              propertyValueSet: PropertyValueSet.set("a", pv as PropertyValue.PropertyValue, this.state.propertyValueSet)
            }))}
            readOnly={false}/>
        </div>
      </div>
    );

  }
}

