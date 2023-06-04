const { Evaluate, infixtoPostfix } = require("./postfix");

test("Testcase 1", () => {
  const postfix = infixtoPostfix("1 + 2*3");
  expect(Evaluate(postfix)).toBe(7);
});

test("Testcase 2", () => {
  const postfix = infixtoPostfix("1 + 2*3 - 5");
  expect(Evaluate(postfix)).toBe(2);
});

test("Testcase 3", () => {
  const postfix = infixtoPostfix("(9 + 6) / 3 + (5 - 2)");
  expect(Evaluate(postfix)).toBe(8);
});

test("Testcase 4", () => {
  const postfix = infixtoPostfix("((9 + 6) / 3 - 4) + (5 * (5 - 2) + 5)");
  expect(Evaluate(postfix)).toBe(21);
});
