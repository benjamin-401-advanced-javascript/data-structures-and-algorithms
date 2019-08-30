'use strict';
const multi_bracket_validation = require('./multi-bracket-validation')

describe('Tests multi bracket validation', () => {

  it('Can successfully check for balanced brackets in string', () => {
    let passString = '[{dsvd()}]{}[]';
    let failString = '[{dsvd}{}[]';
    expect(multi_bracket_validation(passString)).toBe(true);
    expect(multi_bracket_validation(failString)).toBe(false);
  })

})