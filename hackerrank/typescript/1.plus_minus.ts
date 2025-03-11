//NOTE test url : https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// @hackerrank start
// My Answers
function plusMinus(arr: number[]): void {
  const positiveNumberRatio: number =
    arr.filter((x) => Math.sign(x) === 1).length / arr.length;
  const negativeNumberRatio: number =
    arr.filter((x) => Math.sign(x) === -1).length / arr.length;
  const zeroNumberRatio: number =
    arr.filter((x) => Math.sign(x) === 0).length / arr.length;

  console.log(positiveNumberRatio);
  console.log(negativeNumberRatio);
  console.log(zeroNumberRatio);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
// @leet end
