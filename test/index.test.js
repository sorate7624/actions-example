const factorial = require('../src');

test('1 is 1', () => {
  expect(factorial(1)).toBe(1);
});

test('5 is 120', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial of a negative number should throw an error', () => {
  expect(() => {
    factorial(-1);
  }).toThrow('Factorial is only defined for non-negative integers!');
});
