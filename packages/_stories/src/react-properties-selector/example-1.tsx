/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
import React from "react";
import { BaseUnits } from "uom";
import * as PropertiesSelector from "@promaster-sdk/react-properties-selector";
import { PropertyValueSet } from "@promaster-sdk/property";
import { action } from "@storybook/addon-actions";
import { exampleProductProperties } from "./example-product-properties";
import { units, unitsFormat } from "./units-map";

interface State {
  readonly propertyValueSet: PropertyValueSet.PropertyValueSet;
}

export class PropertiesSelectorExample1 extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      propertyValueSet: PropertyValueSet.fromString(
        "a=10:Meter;b=1;",
        BaseUnits
      )
    };
  }

  render(): React.ReactElement<{}> {
    const productProperties = exampleProductProperties();
    const propertiesSelectorProps: PropertiesSelector.PropertiesSelectorProps = {
      units,
      unitsFormat,
      productProperties: productProperties,
      selectedProperties: this.state.propertyValueSet,
      onChange: (
        properties: PropertyValueSet.PropertyValueSet,
        _changedProperties: ReadonlyArray<string>
      ) => {
        this.setState({ ...this.state, propertyValueSet: properties });
        // console.log("updated: ", changedProperties);
      },
      onPropertyFormatSelectorToggled: action("toggle property format selector")
    };

    return (
      <div>
        <p>
          This example shows minimal configuration, using as much defaults as
          possible
        </p>
        <PropertiesSelector.PropertiesSelector {...propertiesSelectorProps} />
      </div>
    );
  }
}
