// @leet start
/**
 * Converts a given string `s` into a zigzag pattern with `numRows` and returns the result as a string.
 *
 * @param s The input string to convert.
 * @param numRows The number of rows in the zigzag pattern.
 * @returns The zigzag pattern as a string.
 *
 * @complexity
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function convert(s: string, numRows: number): string {
  // array to store the solutions
  let solutions: string[][] = [[]];

  // index to keep track of the current index
  let index = 0;

  // boolean to check if we are going to add or subtract from the index
  let isSubstract: boolean = false;

  // just return s because we can't do zigzag with only one row
  if (numRows === 1) {
    return s;
  }

  // loop through the string and push each char with specific condition to the solutions array
  for (const char of s) {
    // to initialize solutions index array to make that array have push method
    if (!solutions[index]) {
      solutions[index] = [];
    }

    // push the char to the solutions array based on index
    solutions[index].push(char);

    // conditions to change wether we are going add or subtract from the index to make zigzag
    if (isSubstract) {
      index--;
    } else {
      index++;
    }

    // conditions thats index is out of range of number of rows then do substract
    if (index >= numRows - 1) {
      isSubstract = true;
    }

    // otherwise we are going to add
    if (index <= 0) {
      isSubstract = false;
    }
  }

  // lastly we can map through the solutions array and join that array to make zigzag string
  return solutions.map((arr) => arr.join("")).join("");
}
// @leet end

// ============================================================================
// NOTE:
// it might not the best answer, but it just one of the solutions that I can think of, so I just leave it here for reference.
//
// !!!SOLUTIONS!!!
// example:
//   input = "abcdefghijklmn"
//   numRows = 5
//   output = "aibhjcgkdflnem"
//
// answer:
//   zigzag conversion look like this:
//   1. a        i
//   2. b      h j
//   3. c    g   k
//   4. d  f     l n
//   5. e        m
//
//   each char with index look like this:
//   a b c d e f g h i j k l m n
//   1 2 3 4 5 4 3 2 1 2 3 4 5 4
//
// based on that index above, we know that we need to loop through the string, add conditions to do add or substract from the index of array and push each char to the solutions array then we can map through the solutions array and join every char to make the zigzag string
//
//   so the array of solutions should look like this:
//   solutions = [
//     ["a", "i"]
//     ["b", "h", "j"]
//     ["c", "g", "k"]
//     ["d", "f", "l", "n"]
//     ["e", "m"]
//   ];
//
// so we can just map through the solutions and join them to make the zigzag string.
//
// ============================================================================
