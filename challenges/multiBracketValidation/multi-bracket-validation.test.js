'use strict';
const multi_bracket_validation = require('./multi-bracket-validation')

describe('Tests multi bracket validation', () => {

  it('Can successfully check for balanced brackets in string', () => {
    let passString = '[{dsvd()}]{}[]';
    expect(multi_bracket_validation(passString)).toBe(true);
  })
  it('Can successfully fail for non-balanced brackets in string', () => {
    let failString = '[{dsvd}{}[]';
    expect(multi_bracket_validation(failString)).toBe(false);
  })
  it('Can successfully check an empty string', () => {
    let testString = '';
    expect(multi_bracket_validation(testString)).toBe(true);
  })
  it('Can successfully check a string with no brackets', () => {
    let testString = 'happy';
    expect(multi_bracket_validation(testString)).toBe(true);
  })

})