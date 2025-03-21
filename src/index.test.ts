import StringCalculator from ".";

describe("String calculator - Multiple successful scenarios", () => {
  test.each([
    ["empty string", "", 0],
    ["single digit string", "3", 3],
    ["two numbers string", "4,5", 9],
    ["multiple numbers string", "1,2,3,4,5,6", 21],
  ])("%s", (_, input, expected) => {
    expect(StringCalculator.add(input)).toBe(expected);
  });
});


describe("String calculator - Different Delimitors", () => {
  test("", () => {
    expect(StringCalculator.add("1,2\n3,4|5;6\t7")).toBe(28);
  });
});
