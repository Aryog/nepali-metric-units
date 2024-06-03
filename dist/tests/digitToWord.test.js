"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toWord_1 = require("../toWord");
describe('digitToWord', () => {
    test('converts numbers less than 100 correctly', () => {
        expect((0, toWord_1.digitToWord)(0)).toBe('शून्य');
        expect((0, toWord_1.digitToWord)(5)).toBe('पाँच');
        expect((0, toWord_1.digitToWord)(99)).toBe('उनान सय');
    });
    test('converts numbers in hundreds correctly', () => {
        expect((0, toWord_1.digitToWord)(100)).toBe('एक सय');
        expect((0, toWord_1.digitToWord)(215)).toBe('दुई सय पन्ध्र');
        expect((0, toWord_1.digitToWord)(999)).toBe('नौ सय उनान सय');
    });
    test('converts numbers in thousands correctly', () => {
        expect((0, toWord_1.digitToWord)(1000)).toBe('एक हजार');
        expect((0, toWord_1.digitToWord)(2500)).toBe('दुई हजार पाँच सय');
        expect((0, toWord_1.digitToWord)(999999)).toBe('नौ लाख उनान सय हजार नौ सय उनान सय');
    });
    test('converts numbers in millions correctly', () => {
        expect((0, toWord_1.digitToWord)(1000000)).toBe('दस लाख');
        expect((0, toWord_1.digitToWord)(2500000)).toBe('पच्चीस लाख');
        expect((0, toWord_1.digitToWord)(99999999)).toBe('नौ करोड उनान सय लाख उनान सय हजार नौ सय उनान सय');
    });
    test('converts numbers in billions correctly', () => {
        expect((0, toWord_1.digitToWord)(1000000000)).toBe('एक अरब');
        expect((0, toWord_1.digitToWord)(2500000000)).toBe('दुई अरब पचास करोड');
        expect((0, toWord_1.digitToWord)(999999999999)).toBe('नौ खरब उनान सय अरब उनान सय करोड उनान सय लाख उनान सय हजार नौ सय उनान सय');
    });
    test('converts numbers in trillions correctly', () => {
        expect((0, toWord_1.digitToWord)(1000000000000)).toBe('दस खरब');
    });
    test('converts numbers in quadrillion correctly', () => {
        expect((0, toWord_1.digitToWord)(100050000000500)).toBe('दस नील पचास अरब पाँच सय');
    });
    test('converts numbers in 100 quadrillions correctly', () => {
        expect((0, toWord_1.digitToWord)(1000050000000501)).toBe('एक पद्म पचास अरब पाँच सय एक');
    });
    test('converts numbers in quintillion correctly', () => {
        expect((0, toWord_1.digitToWord)(BigInt("100005000000050100"))).toBe('एक शंख पचास खरब पचास हजार एक सय');
        expect((0, toWord_1.digitToWord)(BigInt("1000050000800050100"))).toBe('दस शंख पाँच नील असी करोड पचास हजार एक सय');
    });
    test('converts numbers in 100 quintillions correctly', () => {
        expect((0, toWord_1.digitToWord)(BigInt("105500050000800050100"))).toBe('दस महासंख पचपन्न शंख पाँच नील असी करोड पचास हजार एक सय');
    });
});
