const factorial = require('../src');

test('1 is 1', () => {
  expect(factorial(1)).toBe(1);
});

test('5 is 120', () => {
  expect(factorial(5)).toBe(120);
});
