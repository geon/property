"use strict";
var promaster_primitives_1 = require("@promaster/promaster-primitives");
function comparisionOperationMessage(op, left, right) {
    return left + " " + _comparisonOperationTypeToString(op) + " " + right;
}
exports.comparisionOperationMessage = comparisionOperationMessage;
function equalsOperationMessage(op, left, right) {
    return left + " " + _equalsOperationTypeToString(op) + " " + right;
}
exports.equalsOperationMessage = equalsOperationMessage;
function rangeMessage(min, max) {
    return "between " + min + " and " + max;
}
exports.rangeMessage = rangeMessage;
function andMessage() {
    return "and";
}
exports.andMessage = andMessage;
function orMessage() {
    return "or";
}
exports.orMessage = orMessage;
function propertyNameMessage(propertyName) {
    return propertyName;
}
exports.propertyNameMessage = propertyNameMessage;
function propertyValueMessage(propertyName, propertyValue) {
    switch (propertyValue.type) {
        case "amount":
            return propertyValue.value.value + " " + promaster_primitives_1.UnitName.getName(propertyValue.value.unit);
        case "integer":
            var pvString = promaster_primitives_1.PropertyValue.toString(propertyValue);
            return propertyName + "_" + pvString;
        case "text":
            return propertyValue.value;
    }
}
exports.propertyValueMessage = propertyValueMessage;
function nullMessage() {
    return "null";
}
exports.nullMessage = nullMessage;
function _comparisonOperationTypeToString(type) {
    switch (type) {
        case "lessOrEqual":
            return "must be less than or equal to";
        case "greaterOrEqual":
            return "must be greater than or equal to";
        case "less":
            return "must be less than";
        case "greater":
            return "must be greater than";
        default:
            throw "Unknown ComparisonOperationType ";
    }
}
function _equalsOperationTypeToString(type) {
    switch (type) {
        case "equals":
            return "must be";
        case "notEquals":
            return "must not be";
        default:
            throw new Error("Unknown EqualsOperationType " + type + ".");
    }
}
//# sourceMappingURL=filter-pretty-print-messages-english.js.map