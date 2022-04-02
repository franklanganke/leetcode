const canConstruct = require("./383RansomNote");

test("return true", () => {
  expect(canConstruct("a", "b")).toBe(false);
  expect(canConstruct("aa", "ab")).toBe(false);
  expect(canConstruct("aa", "aab")).toBe(true);
  expect(canConstruct("aabbccddeeff", "aabbccddeeffgg")).toBe(true);
});
