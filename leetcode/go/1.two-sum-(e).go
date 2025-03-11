	// @leet start
	func twoSum(nums []int, target int) []int {
		result := make(map[int]int)
		for i := 0; i < len(nums); i++ {
			compl := target - nums[i]

			value, exists := result[compl]
			if exists {
				return []int{value, i}
			}
			result[nums[i]] = i
		}

		return []int{0}
	}
	// @leet end
