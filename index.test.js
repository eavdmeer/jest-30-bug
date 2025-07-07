const { add } = require('./index.js');

describe('add tester', () =>
{
  it('add two numbers', () =>
  {
    expect(add(1, 2)).toBe(3);
  });
});
