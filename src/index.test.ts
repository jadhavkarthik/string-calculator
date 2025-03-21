import StringCalculator from ".";

describe("String calculator - add Numbers", () => {
  test.each([
    ["Empty string", "", 0],
    ["Null input", null, 0],
    ["Undefined input", undefined, 0],
    ["Single number input", "3", 3],
    ["Two numbers string", "4,5", 9],
    ["Multiple numbers string", "1,2,3,4,5,6", 21]
  ])("%s", (_, input, expected) => {
    expect(StringCalculator.add(input)).toBe(expected);
  });

  test("Different Delimiters", () => {
    expect(StringCalculator.add("1,2\n3,4|5;6\t7")).toBe(28);
  });
  // Negative numbers
  test.each([
    ["Single negative number", "2,3,-1", "The following negative numbers are not allowed: -1"],
    ["Multiple negative numbers", "4,-2,-5", "The following negative numbers are not allowed: -2, -5"]
  ])("%s", (_, input, expectedError) => {
    expect(() => StringCalculator.add(input)).toThrow(expectedError);
  });
});

//  Tests for big numbers
describe("String Calculator - add big numbers", () => {
  test.each([
    ["Multiple spaces", "1000,2000,3000", BigInt(6000)],
    ["Leading/trailing spaces", " 1000 2000 3000 ", BigInt(6000)],
    ["Mixed delimiters with spaces", "1000 , 2000 ; 3000", BigInt(6000)]
  ])("%s", (_, input, expected) => {
    const result = StringCalculator.addBiggerNumbers(input);
    expect(result.toString()).toEqual(expected.toString());
  });
  //  edge cases
  test.each([
    ["Empty string", "", BigInt(0)],
    ["Null input", null, BigInt(0)],
    ["Undefined input", undefined, BigInt(0)],
    ["Single zero", "0", BigInt(0)]
  ])("%s", (_, input, expected) => {
    const result = StringCalculator.addBiggerNumbers(input);
    expect(result.toString()).toBe(expected.toString());
  });

  test.each([
    ["Single negative number", "2,3,-1", "The following negative numbers are not allowed: -1"],
    ["Multiple negative numbers", "4,-2,-5", "The following negative numbers are not allowed: -2, -5"]
  ])("%s", (_, input, expectedError) => {
    expect(() => StringCalculator.addBiggerNumbers(input)).toThrow(expectedError);
  });
});
