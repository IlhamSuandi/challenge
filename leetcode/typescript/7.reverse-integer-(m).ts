// @leet start
/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 *
 * @param x - input number
 * @return reversed number
 *
 * @complexity
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function reverse(x: number): number {
  const sign = Math.sign(x);
  let n = Math.abs(x);
  let result = 0;
  const max = 2 ** 31 - 1;

  while (n) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
    if (result > max) return 0;
  }

  return sign * result;
}
// @leet end
