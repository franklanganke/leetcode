const isPalindrome = require("./234Palindrome");

test("1221 returns true", () => {
  const n4 = {
    val: 1,
    next: null,
  };

  const n3 = {
    val: 2,
    next: n4,
  };

  const n2 = {
    val: 2,
    next: n3,
  };

  const n1 = {
    val: 1,
    next: n2,
  };
  expect(isPalindrome(n1)).toBe(true);
});

test("12321 returns true", () => {
  const n3 = {
    val: 1,
    next: null,
  };

  const n2 = {
    val: 2,
    next: n3,
  };

  const n1 = {
    val: 1,
    next: n2,
  };
  expect(isPalindrome(n1)).toBe(true);
});
