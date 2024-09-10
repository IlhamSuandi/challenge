// @leet start
/**
 * Given a string s, find the longest palindromic substring in s.
 *
 * @param {string} s
 * @return {string}
 *
 * @complexity
 * Time complexity: O(n^2)
 * Space complexity: O(1)

 */
function longestPalindrome(s: string): string {
  const isPalindrome = (i: number, j: number) => {
    let left = i;
    let right = j - 1;

    while (left < right) {
      if (s.charAt(left) !== s.charAt(right)) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  };

  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      if (isPalindrome(start, start + length)) {
        return s.substring(start, start + length);
      }
    }
  }

  return "";
}
// @leet end
