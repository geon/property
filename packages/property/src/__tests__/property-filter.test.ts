import { BaseUnits, UnitMap } from "uom";
import * as PropertyFilter from "../property-filter";
import * as PropertyValueSet from "../property-value-set";
import * as IsValidData from "./data/property-filter-isvalid";
import * as IsSyntaxValidData from "./data/property-filter-is-syntax-valid";

const unitLookup: UnitMap.UnitLookup = (unitString) => (BaseUnits as UnitMap.UnitMap)[unitString];

describe("PropertyFilter", () => {
  describe("isSyntaxValid", () => {
    IsSyntaxValidData.tests.forEach((test) => {
      it(test.name, () => {
        expect(PropertyFilter.isSyntaxValid(test.f, unitLookup)).toEqual(test.result);
      });
    });
  });

  describe("isValid", () => {
    IsValidData.tests.forEach((test) => {
      it(test.name, () => {
        const pvs = PropertyValueSet.fromString(test.pvs, unitLookup);
        const f = fromStringOrException(test.f);
        expect(PropertyFilter.isValid(pvs, f, test.comparer)).toEqual(test.result);
      });
    });
  });

  describe("getReferencedProperties", () => {
    it("should return referenced properties", () => {
      const filter = fromStringOrException("a>b&c=1|d<2");
      const references = PropertyFilter.getReferencedProperties(filter);
      expect(references.length).toBe(4);
    });
  });

  describe("equals", () => {
    it("should see two PropertyFilters with same values as equal", () => {
      const filter1 = fromStringOrException("a>b&c=1|d<2");
      const filter2 = fromStringOrException("a>b&c=1|d<2");
      expect(PropertyFilter.equals(filter2, filter1)).toBe(true);
    });
  });

  describe("not equals", () => {
    it("should see two PropertyFilters with different values as not equal", () => {
      const filter1 = PropertyFilter.fromStringOrEmpty("a>b&c=1|d<2", unitLookup);
      const filter2 = PropertyFilter.fromStringOrEmpty("a>b&c=1|d<3", unitLookup);
      expect(PropertyFilter.equals(filter2, filter1)).toBe(false);
    });
  });
});

function fromStringOrException(filter: string): PropertyFilter.PropertyFilter {
  const f = PropertyFilter.fromString(filter, unitLookup);
  if (f === undefined) {
    throw new Error(`Could not parse property filter "${filter}".`);
  }
  return f;
}
