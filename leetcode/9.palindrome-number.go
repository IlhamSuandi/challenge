import (
	"fmt"
	"strconv"
)

// @leet start
func isPalindrome(x int) bool {
	s := strconv.Itoa(x)

	for i := 0; i < len(s); i++ {
    if s[i] != s[len(s)-i-1] {
      return false
    }
	}

  return true
}

// @leet end
