/* 
Problem Statement:
1 . Create a simple String calculator with a method signature like this:✅
  int add(string numbers)
  Input: a string of comma-separated numbers
  Output: an integer, sum of the numbers
  Examples:
    Input: “”, Output: 0
    Input: “1”, Output: 1
    Input: “1,5”, Output: 6

2 . Allow the add method to handle any amount of numbers.✅

3 . Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)✅

4 . Support different delimiters:✅

  To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.
  
5. Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".✅

  If there are multiple negative numbers, show all of them in the exception message, separated by commas.
*/
class StringCalculator {
  public static add(numbers: string | null | undefined): number {
    if (!numbers) {
      return 0;
    }
    const negativeNumbers: number[] = [];
    const numbersInt: number[] = numbers.split(/[,;\t|\n" "]/).map(number => {
      const num = parseInt(number);
      if (isNaN(num)) {
        throw new Error(`NaN(Not-A-Number) is not allowed`);
      }
      if (num < 0) {
        negativeNumbers.push(num);
      }
      return num;
    });
    if (negativeNumbers.length > 0) {
      throw new Error(`The following negative numbers are not allowed: ${negativeNumbers.join(", ")}`);
    }
    return numbersInt.reduce((acc: number, curr: number) => acc + curr, 0);
  }

  /* 
  aviods precision error in case of large numbers 
  JAVASCRIPT number range is between 2^52-1 and -2^52-1
  To support bigger number than this, it uses BigInt
  */
  public static addBiggerNumbers(numbers: string | null | undefined): bigint {
    if (!numbers) {
      return BigInt(0);
    }
    const negativeNumbers: bigint[] = [];
    const numbersBigInt: bigint[] = numbers.split(/[,;\t|\n" "]/).map(number => {
      const bigNum = BigInt(number.trim());
      if (bigNum < 0) {
        negativeNumbers.push(bigNum);
      }
      return bigNum;
    });
    if (negativeNumbers.length > 0) {
      throw new Error(`The following negative numbers are not allowed: ${negativeNumbers.join(", ")}`);
    }
    return numbersBigInt.reduce((acc: bigint, curr: bigint) => acc + curr, BigInt(0));
  }
}

export default StringCalculator;
