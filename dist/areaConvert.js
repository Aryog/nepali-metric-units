"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificConvertFromTheMetricArea = exports.convertFromTheMetricArea = void 0;
const utils_1 = require("./utils");
const columnHeadings = [
    'khetmuri',
    'bigha',
    'kattha',
    'dhur',
    'ropani',
    'aana',
    'paisa',
    'daam',
    'sq.feet',
    'sq.meter',
];
// All Conversion
/**
 *
 * @param n
 * @param metric
 * @returns
 */
const convertFromTheMetricArea = (n, metric) => {
    const absoluteN = Math.abs(n);
    const metricIndex = columnHeadings.indexOf(metric);
    const conversionResult = {};
    if (metricIndex !== -1) {
        for (let i = 0; i < columnHeadings.length; i++) {
            const conversionFactor = utils_1.conversionMatrix[metricIndex][i];
            conversionResult[columnHeadings[i]] = absoluteN * conversionFactor;
        }
    }
    return conversionResult;
};
exports.convertFromTheMetricArea = convertFromTheMetricArea;
console.log((0, exports.convertFromTheMetricArea)(1, "bigha"));
console.log((0, exports.convertFromTheMetricArea)(-1, "bigha"));
// Specific conversion
/**
 *
 * @param n
 * @param dataMetric
 * @param targetMetric
 * @returns
 */
const specificConvertFromTheMetricArea = (n, dataMetric, targetMetric) => {
    const absoluteN = Math.abs(n);
    const dataMetricIndex = columnHeadings.indexOf(dataMetric);
    const targetMetricIndex = columnHeadings.indexOf(targetMetric);
    if (dataMetricIndex !== -1 && targetMetricIndex !== -1) {
        const convertedValue = absoluteN * utils_1.conversionMatrix[dataMetricIndex][targetMetricIndex];
        return { [targetMetric]: convertedValue };
    }
    else {
        return null;
    }
};
exports.specificConvertFromTheMetricArea = specificConvertFromTheMetricArea;
// console.log(specificConvertFromTheMetricArea(-10,"kattha","ropani"))
