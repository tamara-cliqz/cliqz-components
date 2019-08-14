import { calculate, localizedExp, standardize } from '../src/utils';
import { isContext } from 'vm';

// @ts-ignore
import math from 'math-expression-evaluator';

/*
const testArray = [
  { query: '1 + 1', expression: ['1 + 1 =', '1 + 1 ='], results: ['2', '2'] },
  { query: '1.1 + 1', expression: ['1,1 + 1 =', '1.1 + 1 ='], results: ['2,1', '2.1'] },
  { query: '1,1 + 1', expression: ['1,1 + 1 =', '1.1 + 1 ='],resutls: ['2,1', '2.1'] },
  { query: '1,1 + 1.1', expression: ['1,1 + 1,1 =', '1.1 + 1.1 ='], results: ['2,2', '2.2'] },
  { query: '1000 + 1', expression: ['1000 + 1 =', '1000 + 1 ='], results: ['1 001', '1 001'] },
  { query: '1,000 + 1', expression: ['1 + 1 =', '1000 + 1 ='], results: ['2', '1 001'] },
  // { query: '1.000 + 1', expression: '1.000+1', results: ['1 001', '2'] },
  // { query: '1,111 + 1', expression: '', results: ['2,111', '1 112'] },
  // { query: '1.111 + 1', expression: '', results: ['1 112', '2.111'] },
  // { query: '1.001 + 1,001', expression: '', results: ['1 002,001', '1 002.001'] },
  // { query: '1.111,1 + 1', expression: '', results: ['1 112,1', '-1'] },
  // { query: '1,111.1 + 1', expression: '', results: ['-1', '1 112.1'] },
  // { query: '1.111.111 + 1', expression: '', results: ['1 111 112', '1 111 112'] },
  // { query: '1,111,111 + 1', expression: '', results: ['1 111 112', '1 111 112'] },
  // { query: '1,111.111 + 1', expression: '', results: ['-1', '1 112.111'] },
  // { query: '1.111,111 + 1', expression: '', results: ['1 112,111', '-1'] },
  // { query: '1,111,11 + 1', expression: '', results: ['-1', '-1'] },
  // { query: '1.111.11 + 1', expression: '', results: ['-1', '-1'] },
  // { query: '1,11,111 + 1', expression: '', results: ['-1', '-1'] },
  // { query: '1.11.111 + 1', expression: '', results: ['-1', '-1'] },
  // { query: '1,111 + 1,1', expression: '', results: ['2,211', '1 112.1'] },
  // { query: '1.111 + 1.1', expression: '', results: ['1 112,1', '2.211'] },
  // { query: '0.001 + 1', expression: '', results: ['1,001', '1.001'] },
  // { query: '0,001 + 1', expression: '', results: ['1,001', '1.001'] },
  // { query: '0,001 * 0,001', expression: '', results: ['0,000001', '0.000001'] },
  // { query: '0.001 * 0.001', expression: '', results: ['0,000001', '0.000001'] },
  // { query: '0,001 * 0.001', expression: '', results: ['0,000001', '0.000001'] },
  // { query: '0.001 * 0,001', expression: '', results: ['0,000001', '0.000001'] },
  // { query: '0.111111 * 1', expression: '', results: ['0,111111', '0.111111'] },
  // { query: '0,111111 * 1', expression: '', results: ['0,111111', '0.111111'] },
  // { query: '0.1111111 * 1', expression: '', results: ['≈', '0,111111', '0.111111'] },
  // { query: '0,1111111 * 1', expression: '', results: ['≈', '0,111111', '0.111111'] },
]


*/

const testArray = [
  { param: '1,1', de: '1.1', en: '1.1' },
  { param: '1.1', de: '1.1', en: '1.1' },
  { param: '1.111', de: '1111', en: '1.111' },
  { param: '1,111', de: '1.111', en: '1111'},
  { param: '1,111.1', de: '1111.1', en: '1111.1' },
  { param: '1.111,1', de: '1111.1', en: '1111.1' },
  { param: '1,111,111', de: '1111111', en: '1111111' },
  { param: '1.111.111', de: '1111111', en: '1111111' },
  { param: '1.11,1', de: false, en: false },
  { param: '1,11.1', de: false, en: false },
  { param: '1.111.1', de: false, en: false },
  { param: '1,111,1', de: false, en: false },
  { param: '1,11,111', de: false, en: false },
  { param: '1,11,111', de: false, en: false },
  { param: '', de: '', en: '' },
  { param: '', de: '', en: '' },
  { param: '1.111.111,1', de: '1111111.1', en: '1111111.1' },
  { param: '1,111,111.1', de: '1111111.1', en: '1111111.1' },






]

describe('stand', () => {
  testArray.forEach((test) => {
    it(`${test.param} => ${test.de}`, () => {
      expect(standardize(test.param, 'de')).toEqual(test.de)
    });
  });
});
