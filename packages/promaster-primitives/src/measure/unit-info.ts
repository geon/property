import * as Unit from "./unit";
import * as Units from "./units";
import * as Quantity from "./quantity";

//tslint:disable
export interface UnitInfo {
  readonly decimalCount: number,
  readonly coUnit?: Unit.Unit<any>
}

const units: {[key: string]: UnitInfo} = {};

export function getUnitInfo(unit: Unit.Unit<any>): UnitInfo | undefined {
  return units[Units.getStringFromUnit(unit)];
}

addUnit(Units.Ampere, 2);
addUnit(Units.Bar, 2);
addUnit(Units.BtuPerHour, 0);
addUnit(Units.BtuPerPoundLb, 3);
addUnit(Units.Candela, 0);
addUnit(Units.Celsius, 1, Units.Fahrenheit);
addUnit(Units.CelsiusDewPoint, 2);
addUnit(Units.CelsiusWet, 2);
addUnit(Units.CentiMeter, 2, Units.Inch);
addUnit(Units.Coulomb, 0);
addUnit(Units.CubicFeet, 0);
addUnit(Units.CubicFeetPerHour, 0);
addUnit(Units.CubicFeetPerMinute, 0);
addUnit(Units.CubicMeter, 2);
addUnit(Units.CubicMeterPerHour, 2);
addUnit(Units.CubicMeterPerSecond, 2);
addUnit(Units.Day, 0);
addUnit(Units.Decibel, 1);
addUnit(Units.DecibelLw, 1);
addUnit(Units.Decimeter, 0);
addUnit(Units.Degrees, 2);
addUnit(Units.DeltaCelsius, 1);
addUnit(Units.DeltaFahrenheit, 1);
addUnit(Units.Fahrenheit, 1, Units.Celsius);
addUnit(Units.FahrenheitDewPoint, 1);
addUnit(Units.FahrenheitWet, 1);
addUnit(Units.Farad, 0);
addUnit(Units.FeetOfWaterColumn, 2);
addUnit(Units.FeetPerMinute, 0);
addUnit(Units.FeetPerSecond, 0);
addUnit(Units.Foot, 2);
addUnit(Units.FrenchDegree, 2);
addUnit(Units.Gallon, 1);
addUnit(Units.GallonsPerMinute, 1);
addUnit(Units.GallonsPerMinutePerTonCooling, 2);
addUnit(Units.GigaWatt, 0);
addUnit(Units.GigaWattHour, 0);
addUnit(Units.GrainPerPoundLb, 1);
addUnit(Units.Gram, 2);
addUnit(Units.GramPerKilogram, 2);
addUnit(Units.GramPerKiloWattHour, 1);
addUnit(Units.GramPerSecond, 2);
addUnit(Units.Hertz, 2);
addUnit(Units.HorsePower, 1);
addUnit(Units.Hour, 2);
addUnit(Units.HumidityFactor, 2);
addUnit(Units.HundredCubicFeet, 2);
addUnit(Units.HundredCubicFeetPerHour, 0);
addUnit(Units.Inch, 2, Units.CentiMeter);
addUnit(Units.InchOfWaterColumn, 2);
addUnit(Units.Integer, 0);
addUnit(Units.Joule, 2);
addUnit(Units.Kelvin, 2);
addUnit(Units.KelvinDewPoint, 2);
addUnit(Units.KiloBtuPerHour, 1);
addUnit(Units.Kilogram, 2);
addUnit(Units.KilogramPerCubicMeter, 2);
addUnit(Units.KilogramPerHour, 2);
addUnit(Units.KilogramPerKilogram, 2);
addUnit(Units.KilogramPerKiloWattHour, 2);
addUnit(Units.KilogramPerSecond, 2);
addUnit(Units.KilogramPerSquareMeterSecond, 2);
addUnit(Units.KilogramSquareMeter, 2);
addUnit(Units.Kilojoule, 2);
addUnit(Units.KilojoulePerKilogram, 2);
addUnit(Units.KilojoulePerKilogramCelsius, 2);
addUnit(Units.Kilometer, 2);
addUnit(Units.KilometerPerHour, 0);
addUnit(Units.KiloPascal, 2);
addUnit(Units.KiloVolt, 0);
addUnit(Units.KiloWatt, 2);
addUnit(Units.KiloWattHour, 1);
addUnit(Units.KiloWattHourPerCubicMeter, 2);
addUnit(Units.KiloWattHourPerKilogram, 2);
addUnit(Units.KilowattPerCelsius, 2);
addUnit(Units.KiloWattPerCubicMeterPerSecond, 2);
addUnit(Units.Liter, 2);
addUnit(Units.LiterPerHour, 2);
addUnit(Units.LiterPerKiloWattHour, 2);
addUnit(Units.LiterPerMinute, 2);
addUnit(Units.LiterPerSecond, 3);
addUnit(Units.LiterPerSecondPerKiloWatt, 2);
addUnit(Units.Lumen, 0);
addUnit(Units.MegaWatt, 0);
addUnit(Units.MegaWattHour, 0);
addUnit(Units.Meter, 2, Units.Yard);
addUnit(Units.MeterPerHour, 0);
addUnit(Units.MeterPerSecond, 2);
addUnit(Units.MeterPerSquareSecond, 2);
addUnit(Units.MilliBar, 2);
addUnit(Units.MilliGram, 0);
addUnit(Units.MilliGramCalciumPerLiter, 2);
addUnit(Units.MilliGramHydrogenCarbonatePerLiter, 2);
addUnit(Units.MilliLiter, 0);
addUnit(Units.Millimeter, 2);
addUnit(Units.MilliVolt, 0);
addUnit(Units.Minute, 2);
addUnit(Units.Newton, 2);
addUnit(Units.NewtonMeter, 0);
addUnit(Units.NewtonPerSquareMeter, 0);
addUnit(Units.Ohm, 0);
addUnit(Units.One, 2);
addUnit(Units.OnePerBtu, 2);
addUnit(Units.OnePerCubicMeter, 2);
addUnit(Units.OnePerGallon, 2);
addUnit(Units.OnePerHundredCubicFeet, 2);
addUnit(Units.OnePerKilogram, 2);
addUnit(Units.OnePerKilojoule, 2);
addUnit(Units.OnePerKiloWattHour, 2);
addUnit(Units.OnePerLiter, 2);
addUnit(Units.OnePerPoundLb, 2);
addUnit(Units.Pascal, 0);
addUnit(Units.PascalSecond, 2);
addUnit(Units.Percent, 2);
addUnit(Units.PercentHumidity, 1);
addUnit(Units.PoundForcePerSquareInch, 2);
addUnit(Units.PoundLb, 1);
addUnit(Units.PoundLbPerHour, 1);
addUnit(Units.Radian, 0);
addUnit(Units.Rankine, 2);
addUnit(Units.RevolutionsPerHour, 1);
addUnit(Units.RevolutionsPerMinute, 2);
addUnit(Units.Second, 2);
addUnit(Units.Slug, 2);
addUnit(Units.SlugPerCubicFeet, 3);
addUnit(Units.SlugPerHour, 2);
addUnit(Units.SlugPerSecond, 2);
addUnit(Units.SquareCentimeter, 0);
addUnit(Units.SquareFeet, 0);
addUnit(Units.SquareInch, 0);
addUnit(Units.SquareMeter, 2);
addUnit(Units.SquareMillimeter, 4);
addUnit(Units.StandardCubicFeetPerMinute, 0);
addUnit(Units.StandardCubicMeterPerHour, 0);
addUnit(Units.TonCooling, 2);
addUnit(Units.Tonne, 0);
addUnit(Units.Volt, 2);
addUnit(Units.VoltAmpere, 2);
addUnit(Units.Watt, 2);
addUnit(Units.WattHour, 2);
addUnit(Units.WattPerCubicMeterPerSecond, 0);
addUnit(Units.WattPerSquareMeter, 2);
addUnit(Units.WattSecond, 4);
addUnit(Units.Week, 0);
addUnit(Units.Yard, 2, Units.Meter);
addUnit(Units.Year, 0);

// The last argument is the corresponding unit which is the closest unit in the other measure system (SI/IP)
function addUnit<T extends Quantity.Quantity>(unit: Unit.Unit<T>, decimalCount: number, coUnit?: Unit.Unit<T>) {
  units[Units.getStringFromUnit(unit)] = {decimalCount, coUnit};
}

