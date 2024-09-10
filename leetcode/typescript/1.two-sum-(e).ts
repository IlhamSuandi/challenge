// @leet start
/**
 * This function takes in a sorted array of numbers and a target sum,
 * and returns an array containing the indices of two numbers in the
 * array that add up to the target sum.
 *
 * @param nums - A list of numbers.
 * @param target - The target sum we are looking for.
 * @returns An array with the indices of two numbers that sum to the target.
 *
 * @complexity
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  // Create a map to store the complement of each number
  const map: { [key: number]: number } = {};

  // Iterate through the array and calculate the complement of each number
  for (let i = 0; i < nums.length; i++) {
    // Check if the complement of the current number is in the map
    const compl = target - nums[i];
    console.log("compl", compl);

    // If the complement is in the map, return the indices of the two numbers
    if (compl in map) {
      console.log("result", [map[compl], i]);
      return [map[compl], i];
    }
    // Otherwise, add the current number to the map with its index
    map[nums[i]] = i;
  }

  // If the target is not found, return an empty array
  return [];
}
// @leet end

// ============================================================================
// NOTE:
// it might not the best answer, but it just one of the solutions that I can think of, so I just leave it here for reference.
//
// !!! SOLUTION !!!
// example:
//   input = [1, 2, 3, 4, 5]
//   target = 5
//   output = [1, 2]
//
// answer:
//   we need to loop through the input array and find 2 numbers that when we sum them up we get target value.
//   so we can make complement which contains target - input[index] for each index in input array.
//   then we can push through the object map which contains value of input[index] and index.
//   if we find the complement in the map we can return the index of the two numbers.
//
//   code iteration:
//
//   first iteration:
//   current_index = 0
//   current map = {}
//   compl = 5 - 1 = 4
//   is compl in map = false
//   map = { "1", 0 }
//
//   second iteration:
//   current_index = 1
//   current map = { "1", 0 }
//   compl = 5 - 2 = 3
//   is compl in map = false
//   map = { "2", 1, "1", 0 }
//
//
//   third iteration:
//   current_index = 2
//   current map = { "2", 1, "1", 0 }
//   compl = 5 - 3 = 2
//   is compl in map = true
//   result = [map[2], current_index] -> [1, 2]
//
// ============================================================================
