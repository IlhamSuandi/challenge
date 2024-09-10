// @leet start
/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param {string} s
 * @return {number}
 *
 * @complexity
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function lengthOfLongestSubstring(s: string): number {
  let carry: string[] = [],
    currentLongest = 0;

  for (let char of s) {
    if (carry.includes(char)) {
      carry = carry.slice(carry.indexOf(char) + 1);
      carry.push(char);
    } else {
      carry.push(char);
      currentLongest = Math.max(currentLongest, carry.length);
    }
  }

  return currentLongest;
}
// @leet end
