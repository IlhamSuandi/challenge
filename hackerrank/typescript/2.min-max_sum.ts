//NOTE test url : https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// My Answers
function miniMaxSum(arr: number[]): void {
  // Write your code here
  let sortedArr = arr.sort();

  let maxSum = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    maxSum += sortedArr[i];
  }

  let minSum = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    minSum += sortedArr[i];
  }

  console.log(`${minSum} ${maxSum}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
