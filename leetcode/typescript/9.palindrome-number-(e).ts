// @leet start
function isPalindrome(x: number): boolean {
  for (let i = 0; i <= x.toString().length; i++) {
    if (x.toString()[i] !== x.toString()[x.toString().length - i - 1])
      return false;
  }

  return true;
}
// @leet end

