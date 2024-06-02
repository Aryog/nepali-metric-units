import { Units,ConversionResult } from "./types/areaConvert";
import { conversionMatrix } from "./utils";
const columnHeadings:Array<Units> = [
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
export const convertFromTheMetricArea = (n: number, metric: Units): ConversionResult => {
    const absoluteN = Math.abs(n);
    const metricIndex = columnHeadings.indexOf(metric);
    const conversionResult: ConversionResult = {};

    if (metricIndex !== -1) {
        for (let i = 0; i < columnHeadings.length; i++) {
            const conversionFactor = conversionMatrix[metricIndex][i];
            conversionResult[columnHeadings[i]] = absoluteN * conversionFactor;
        }
    }
    
    return conversionResult;
}
// console.log(convertFromTheMetricArea(1,"bigha"))

// Specific conversion 
export const specificConvertFromTheMetricArea = (n: number, dataMetric: Units, targetMetric: Units): Record<string, number> | null => {
    const absoluteN = Math.abs(n);
    const dataMetricIndex = columnHeadings.indexOf(dataMetric);
    const targetMetricIndex = columnHeadings.indexOf(targetMetric);

    if (dataMetricIndex !== -1 && targetMetricIndex !== -1) {
        const convertedValue = absoluteN * conversionMatrix[dataMetricIndex][targetMetricIndex];
        return { [targetMetric]: convertedValue };
    } else {
        return null;
    }
}
// console.log(specificConvertFromTheMetricArea(-10,"kattha","ropani"))



