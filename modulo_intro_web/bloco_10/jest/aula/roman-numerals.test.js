const convertToRoman = require('./roman-numerals');
const assert = require('assert');

test('Its defined' , () => {
  expect(typeof convertToRoman).toBe('function');
});

test('converts number from 1 to 4', () => {
  expect(convertToRoman(1)).toMatch('I');
  expect(convertToRoman(2)).toMatch('II');
  expect(convertToRoman(3)).toMatch('III');
  expect(convertToRoman(4)).toMatch('IV');
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(5)).toMatch('V');
  expect(convertToRoman(6)).toMatch('VI');
  expect(convertToRoman(7)).toMatch('VII');
  expect(convertToRoman(8)).toMatch('VIII');
  expect(convertToRoman(9)).toMatch('IX');
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(10)).toMatch('X');
  expect(convertToRoman(11)).toMatch('XI');
  expect(convertToRoman(12)).toMatch('XII');
  expect(convertToRoman(13)).toMatch('XIII');
  expect(convertToRoman(14)).toMatch('XIV');
  expect(convertToRoman(15)).toMatch('XV');
  expect(convertToRoman(26)).toMatch('XXVI');
  expect(convertToRoman(43)).toMatch('XLIII');
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(50)).toMatch('L');
  expect(convertToRoman(55)).toMatch('LV');
  expect(convertToRoman(76)).toMatch('LXXVI');
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(100)).toMatch('C');
  expect(convertToRoman(200)).toMatch('CC');
  expect(convertToRoman(227)).toMatch('CCXXVII');
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(500)).toMatch('D');
  expect(convertToRoman(576)).toMatch('DLXXVI');
  expect(convertToRoman(981)).toMatch('CMLXXXI');
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(1000)).toMatch('M');
  expect(convertToRoman(2999)).toMatch('MMCMXCIX');
  expect(convertToRoman(3000)).toMatch('MMM');
});



