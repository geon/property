import {Quantity} from "./quantity";
import * as Unit from "./unit";

// We keep a global repository of Labels becasue if a Unit object is derived from arithmetic operations
// it may still be considered equal to an existing unit and thus should have the same label.
const _typeLabels: Map<Unit.Unit<Quantity>, string> = new Map();

export function registerLabel<T extends Quantity>(label: string, unit: Unit.Unit<T>): void {
  _typeLabels.set(unit, label);
}

export function getName<T extends Quantity>(unit: Unit.Unit<T>): string {
  const label = _typeLabels.get(unit);
  if (label === undefined)
    return buildDerivedName(unit);
  return label;
}

function buildDerivedName<T extends Quantity>(unit: Unit.Unit<T>): string {
  switch (unit.innerUnit.type) {
    case "alternate":
      return unit.innerUnit.symbol;
    case "base":
      return unit.innerUnit.symbol;
    case "product":
      return productUnitBuildDerivedName(unit);
    case "transformed":
      return "";
  }
  throw new Error(`Unknown innerUnit ${JSON.stringify(unit)}`);
}

function productUnitBuildDerivedName<T extends Quantity>(unit: Unit.Unit<T>): string {

  let comparePow = (a: Unit.Element, b: Unit.Element) => {
    if (a.pow > b.pow)
      return 1;
    else if (a.pow < b.pow)
      return -1;
    else
      return 0;
  };

  var pospow = getElements(unit).filter((e) => e.pow > 0);
  pospow.sort(comparePow); // orderby e.Pow descending select e;
  var posname = productUnitBuildNameFromElements(pospow);
  var negpow = getElements(unit).filter((e) => e.pow < 0);
  negpow.sort(comparePow); // orderby e.Pow ascending select e;
  var negname = productUnitBuildNameFromElements(negpow);

  let name: string = posname;
  if (negname.length > 0) {
    if (name.length == 0) {
      name += "1";
    }

    name += "/" + negname;
  }

  return name;
}

function getElements(unit: Unit.Unit<any>) {
  if (unit.innerUnit.type === "product") {
    return unit.innerUnit.elements;
  }
  return [];
}

function productUnitBuildNameFromElements(elements: Array<Unit.Element>): string {
  let name: string = "";
  for (let e of elements) {
    name += getName(e.unit);

    switch (Math.abs(e.pow)) {
      case 1:
        break;
      case 2:
        name += "²";
        break;
      case 3:
        name += "³";
        break;
      default:
        name += "^" + Math.abs(e.pow).toString();
        break;
    }
  }

  return name;
}
