const operations = require("./Operations");

test("adds 1 + 2 to equal 3", () => {
  expect(operations.sum(1, 2)).toBe(3);
});

test("divides 15 / 5 to equal 3", () => {
  expect(operations.division(15, 5)).toBe(3);
});

test("multiples 15 * 5 to equal 75", () => {
  expect(operations.multiple(15, 5)).toBe(75);
});

test("subtracts 100-50 to equal 50", () => {
  expect(operations.subtraction(100, 50)).toBe(50);
});
