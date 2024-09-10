// @leet start
/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * @param nums1 - The first sorted array
 * @param nums2 - The second sorted array
 * @returns The median of the two sorted arrays
 *
 * @complexity
 * Time complexity: O(m + n)
 * Space complexity: O(m + n)
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 !== 0) {
    return sorted[middle];
  }

  return (sorted[middle - 1] + sorted[middle]) / 2;
}
// @leet end
