// @leet start
/**
 * Given a string s, return the integer value corresponding to the leading part of the string.
 *
 * @param s - input string
 * @return integer value
 *
 * @complexity
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function myAtoi(s: string): number {
  const cleanString = s.trim();
  let result: string = "";
  const prependChars = ["+", "-"];

  const is32bitInt = (n: number) => {
    const max = 2 ** 31 - 1;
    const negativeNumber = Math.sign(Number(n));

    if (Math.abs(n) > max) {
      return negativeNumber === -1 ? negativeNumber * max - 1 : max;
    }

    return n;
  };

  for (let i = 0; i < cleanString.length; i++) {
    if (prependChars.includes(cleanString[i]) && i === 0) {
      result += cleanString[i];
    } else if (Number.isInteger(Number(cleanString[i]))) {
      result += cleanString[i];
    } else break;
  }

  result = result.split(" ")[0];

  if (!Number.isInteger(Number(result))) return 0;

  return is32bitInt(Number(result));
}
// @leet end
