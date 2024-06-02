
import { nepaliWords } from "./utils";

  /**
 * Converts a number to its Nepali word representation.
 * Supports numbers up to 1 trillion (10^12).
 * @param {number} n - The number to be converted.
 * @returns {string} - The Nepali word representation of the number.
 */

  
  export const digitToWord = (n: number | bigint): string => {
    if (typeof n === 'number') {
      n = BigInt(n);
    }
    if (n < 100n) {
      return nepaliWords[Number(n)];
    } else if (n < 1000n) {
      const hundreds = n / 100n;
      const remainder = n % 100n;
      return nepaliWords[Number(hundreds)] + ' सय' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 100000n) {
      const thousands = n / 1000n;
      const remainder = n % 1000n;
      return digitToWord(thousands) + ' हजार' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 10000000n) {
      const lakhs = n / 100000n;
      const remainder = n % 100000n;
      return digitToWord(lakhs) + ' लाख' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 1000000000n) {
      const crores = n / 10000000n;
      const remainder = n % 10000000n;
      return digitToWord(crores) + ' करोड' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 100000000000n) {
      const arabs = n / 1000000000n;
      const remainder = n % 1000000000n;
      return digitToWord(arabs) + ' अरब' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 10000000000000n) {
      const kharabs = n / 100000000000n;
      const remainder = n % 100000000000n;
      return digitToWord(kharabs) + ' खरब' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 1000000000000000n) {
      const nils = n / 10000000000000n;
      const remainder = n % 10000000000000n;
      return digitToWord(nils) + ' नील' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 100000000000000000n) {
      const padmas = n / 1000000000000000n;
      const remainder = n % 1000000000000000n;
      return digitToWord(padmas) + ' पद्म' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else if (n < 10000000000000000000n) {
      const shankhas = n / 100000000000000000n;
      const remainder = n % 100000000000000000n;
      return digitToWord(shankhas) + ' शंख' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    } else {
      const mahasankhas = n / 10000000000000000000n;
      const remainder = n % 10000000000000000000n;
      return digitToWord(mahasankhas) + ' महासंख' + (remainder !== 0n ? ' ' + digitToWord(remainder) : '');
    }
  };

  
  

  
