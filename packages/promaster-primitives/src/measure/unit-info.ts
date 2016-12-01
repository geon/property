import * as Unit from "./unit";
import * as Units from "./units";
import * as Quantity from "./quantity";

export type MeasureSystem = "SI" | "IP";

//tslint:disable
export interface UnitInfo {
  readonly measureSystem: MeasureSystem | undefined,
  readonly decimalCount: number,
  readonly coUnit?: Unit.Unit<any>
}

const units: {[key: string]: UnitInfo} = {};

export function getUnitInfo(unit: Unit.Unit<any>): UnitInfo | undefined {
  return units[Units.getStringFromUnit(unit)];
}
addUnit(Units.Ampere, "SI", 2);
addUnit(Units.Bar, "SI", 2);
addUnit(Units.BtuPerHour, "IP", 0);
addUnit(Units.BtuPerPoundLb, "IP", 3);
addUnit(Units.Candela, "SI", 0);
addUnit(Units.Celsius, "SI", 1, Units.Fahrenheit);
addUnit(Units.CelsiusDewPoint, "SI", 2);
addUnit(Units.CelsiusWet, "SI", 2);
addUnit(Units.CentiMeter, "SI", 2, Units.Inch);
addUnit(Units.Coulomb, "SI", 0);
addUnit(Units.CubicFeet, "IP", 0);
addUnit(Units.CubicFeetPerHour, "IP", 0);
addUnit(Units.CubicFeetPerMinute, "IP", 0);
addUnit(Units.CubicMeter, "SI", 2);
addUnit(Units.CubicMeterPerHour, "SI", 2);
addUnit(Units.CubicMeterPerSecond, "SI", 2);
addUnit(Units.Day, undefined, 0);
addUnit(Units.Decibel, "SI", 1);
addUnit(Units.DecibelLw, "SI", 1);
addUnit(Units.Decimeter, "SI", 0);
addUnit(Units.Degrees, "SI", 2);
addUnit(Units.DeltaCelsius, "SI", 1);
addUnit(Units.DeltaFahrenheit, "IP", 1);
addUnit(Units.Fahrenheit, "IP", 1, Units.Celsius);
addUnit(Units.FahrenheitDewPoint, "SI", 1);
addUnit(Units.FahrenheitWet, "SI", 1);
addUnit(Units.Farad, "SI", 0);
addUnit(Units.FeetOfWaterColumn, "IP", 2);
addUnit(Units.FeetPerMinute, "IP", 0);
addUnit(Units.FeetPerSecond, "IP", 0);
addUnit(Units.Foot, "IP", 2);
addUnit(Units.FrenchDegree, "IP", 2);
addUnit(Units.Gallon, "IP", 1);
addUnit(Units.GallonsPerMinute, "IP", 1);
addUnit(Units.GallonsPerMinutePerTonCooling, "IP", 2);
addUnit(Units.GigaWatt, "SI", 0);
addUnit(Units.GigaWattHour, "SI", 0);
addUnit(Units.GrainPerPoundLb, "IP", 1);
addUnit(Units.Gram, "SI", 2);
addUnit(Units.GramPerKilogram, "SI", 2);
addUnit(Units.GramPerKiloWattHour, "SI", 1);
addUnit(Units.GramPerSecond, "SI", 2);
addUnit(Units.Hertz, "SI", 2);
addUnit(Units.HorsePower, "IP", 1);
addUnit(Units.Hour, undefined, 2);
addUnit(Units.HumidityFactor, "SI", 2);
addUnit(Units.HundredCubicFeet, "IP", 2);
addUnit(Units.HundredCubicFeetPerHour, "IP", 0);
addUnit(Units.Inch, "IP", 2, Units.CentiMeter);
addUnit(Units.InchOfWaterColumn, "IP", 2);
addUnit(Units.Integer, undefined, 0);
addUnit(Units.Joule, "SI", 2);
addUnit(Units.Kelvin, "SI", 2);
addUnit(Units.KelvinDewPoint, "SI", 2);
addUnit(Units.KiloBtuPerHour, "IP", 1);
addUnit(Units.Kilogram, "SI", 2);
addUnit(Units.KilogramPerCubicMeter, "SI", 2);
addUnit(Units.KilogramPerHour, "SI", 2);
addUnit(Units.KilogramPerKilogram, "SI", 2);
addUnit(Units.KilogramPerKiloWattHour, "SI", 2);
addUnit(Units.KilogramPerSecond, "SI", 2);
addUnit(Units.KilogramPerSquareMeterSecond, "SI", 2);
addUnit(Units.KilogramSquareMeter, "SI", 2);
addUnit(Units.Kilojoule, "SI", 2);
addUnit(Units.KilojoulePerKilogram, "SI", 2);
addUnit(Units.KilojoulePerKilogramCelsius, "SI", 2);
addUnit(Units.Kilometer, "SI", 2);
addUnit(Units.KilometerPerHour, "SI", 0);
addUnit(Units.KiloPascal, "SI", 2);
addUnit(Units.KiloVolt, "SI", 0);
addUnit(Units.KiloWatt, "SI", 2);
addUnit(Units.KiloWattHour, "SI", 1);
addUnit(Units.KiloWattHourPerCubicMeter, "SI", 2);
addUnit(Units.KiloWattHourPerKilogram, "SI", 2);
addUnit(Units.KilowattPerCelsius, "SI", 2);
addUnit(Units.KiloWattPerCubicMeterPerSecond, "SI", 2);
addUnit(Units.Liter, "SI", 2);
addUnit(Units.LiterPerHour, "SI", 2);
addUnit(Units.LiterPerKiloWattHour, "SI", 2);
addUnit(Units.LiterPerMinute, "SI", 2);
addUnit(Units.LiterPerSecond, "SI", 3);
addUnit(Units.LiterPerSecondPerKiloWatt, "SI", 2);
addUnit(Units.Lumen, "SI", 0);
addUnit(Units.MegaWatt, "SI", 0);
addUnit(Units.MegaWattHour, "SI", 0);
addUnit(Units.Meter, "SI", 2, Units.Yard);
addUnit(Units.MeterPerHour, "SI", 0);
addUnit(Units.MeterPerSecond, "SI", 2);
addUnit(Units.MeterPerSquareSecond, "SI", 2);
addUnit(Units.MilliBar, "SI", 2);
addUnit(Units.MilliGram, "SI", 0);
addUnit(Units.MilliGramCalciumPerLiter, "SI", 2);
addUnit(Units.MilliGramHydrogenCarbonatePerLiter, "SI", 2);
addUnit(Units.MilliLiter, "SI", 0);
addUnit(Units.Millimeter, "SI", 2);
addUnit(Units.MilliVolt, "SI", 0);
addUnit(Units.Minute, undefined, 2);
addUnit(Units.Newton, "SI", 2);
addUnit(Units.NewtonMeter, "SI", 0);
addUnit(Units.NewtonPerSquareMeter, "SI", 0);
addUnit(Units.Ohm, "SI", 0);
addUnit(Units.One, "SI", 2);
addUnit(Units.OnePerBtu, "IP", 2);
addUnit(Units.OnePerCubicMeter, "SI", 2);
addUnit(Units.OnePerGallon, "IP", 2);
addUnit(Units.OnePerHundredCubicFeet, "SI", 2);
addUnit(Units.OnePerKilogram, "SI", 2);
addUnit(Units.OnePerKilojoule, "SI", 2);
addUnit(Units.OnePerKiloWattHour, "SI", 2);
addUnit(Units.OnePerLiter, "SI", 2);
addUnit(Units.OnePerPoundLb, "IP", 2);
addUnit(Units.Pascal, "SI", 0);
addUnit(Units.PascalSecond, "SI", 2);
addUnit(Units.Percent, "SI", 2);
addUnit(Units.PercentHumidity, "SI", 1);
addUnit(Units.PoundForcePerSquareInch, "IP", 2);
addUnit(Units.PoundLb, "IP", 1);
addUnit(Units.PoundLbPerHour, "IP", 1);
addUnit(Units.Radian, "SI", 0);
addUnit(Units.Rankine, "SI", 2);
addUnit(Units.RevolutionsPerHour, "SI", 1);
addUnit(Units.RevolutionsPerMinute, "SI", 2);
addUnit(Units.Second, undefined, 2);
addUnit(Units.Slug, "IP", 2);
addUnit(Units.SlugPerCubicFeet, "IP", 3);
addUnit(Units.SlugPerHour, "IP", 2);
addUnit(Units.SlugPerSecond, "IP", 2);
addUnit(Units.SquareCentimeter, "SI", 0);
addUnit(Units.SquareFeet, "IP", 0);
addUnit(Units.SquareInch, "IP", 0);
addUnit(Units.SquareMeter, "SI", 2);
addUnit(Units.SquareMillimeter, "SI", 4);
addUnit(Units.StandardCubicFeetPerMinute, "IP", 0);
addUnit(Units.StandardCubicMeterPerHour, "SI", 0);
addUnit(Units.TonCooling, "SI", 2);
addUnit(Units.Tonne, "SI", 0);
addUnit(Units.Volt, "SI", 2);
addUnit(Units.VoltAmpere, "SI", 2);
addUnit(Units.Watt, "SI", 2);
addUnit(Units.WattHour, "SI", 2);
addUnit(Units.WattPerCubicMeterPerSecond, "SI", 0);
addUnit(Units.WattPerSquareMeter, "SI", 2);
addUnit(Units.WattSecond, "SI", 4);
addUnit(Units.Week, undefined, 0);
addUnit(Units.Yard, "IP", 2, Units.Meter);
addUnit(Units.Year, undefined, 0);

// The last argument is the corresponding unit which is the closest unit in the other measure system (SI/IP)
function addUnit<T extends Quantity.Quantity>(unit: Unit.Unit<T>, measureSystem: MeasureSystem | undefined, decimalCount: number, coUnit?: Unit.Unit<T>) {
  units[Units.getStringFromUnit(unit)] = {measureSystem, decimalCount, coUnit};
}

