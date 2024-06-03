"use strict";
// test/areaConvert.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const areaConvert_1 = require("../areaConvert");
describe('convertFromTheMetricArea', () => {
    it('should convert from metric to all other units', () => {
        const result = (0, areaConvert_1.convertFromTheMetricArea)(1, 'bigha');
        //   [0.532505478, 1.0, 20.0, 400.0, 13.31263696, 213.0021914, 852.0087655, 3408.035062, 72900.0, 6772.631616],
        console.log(result);
        expect(result).toEqual({
            khetmuri: 0.532505478,
            bigha: 1,
            kattha: 20,
            dhur: 400,
            ropani: 13.31263696,
            aana: 213.0021914,
            paisa: 852.0087655,
            daam: 3408.035062,
            'sq.feet': 72900.0,
            'sq.meter': 6772.631616,
        });
    });
    it('should handle negative values as positive', () => {
        const result = (0, areaConvert_1.convertFromTheMetricArea)(-1, 'bigha');
        expect(result).toEqual({
            khetmuri: 0.532505478,
            bigha: 1,
            kattha: 20,
            dhur: 400,
            ropani: 13.31263696,
            aana: 213.0021914,
            paisa: 852.0087655,
            daam: 3408.035062,
            'sq.feet': 72900.0,
            'sq.meter': 6772.631616,
        });
    });
    it('should return an empty object for an invalid metric', () => {
        const result = (0, areaConvert_1.convertFromTheMetricArea)(1, 'invalid');
        expect(result).toEqual({});
    });
});
describe('specificConvertFromTheMetricArea', () => {
    it('should convert from one unit to another', () => {
        const result = (0, areaConvert_1.specificConvertFromTheMetricArea)(10, 'kattha', 'ropani');
        expect(result).toEqual({ ropani: 6.656531848 });
    });
    it('should handle negative values as positive', () => {
        const result = (0, areaConvert_1.specificConvertFromTheMetricArea)(-10, 'kattha', 'ropani');
        expect(result).toEqual({ ropani: 6.656531848 });
    });
    it('should return null for an invalid data metric', () => {
        const result = (0, areaConvert_1.specificConvertFromTheMetricArea)(10, 'invalid', 'ropani');
        expect(result).toBeNull();
    });
    it('should return null for an invalid target metric', () => {
        const result = (0, areaConvert_1.specificConvertFromTheMetricArea)(10, 'kattha', 'invalid');
        expect(result).toBeNull();
    });
});
