/**
 *
  Rotate Matrix:
  Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
  write a method to rotate the image by 90 degrees. Can you do this in place?

  I: nxn matrix
  O: rotated matrix - 90 deg, clockwise
  C: rotate matrix in place, optimize
  E: empty matrix, even and odd values for n

  time complexity: O(n^2) - quadratic
  space complexity: O(2) - constant

*/

function rotateMatrix(matrix) {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
  const n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = 0; i < last; i++) {
      const offSet = i - first;
      const top = matrix[first][i];
      // left to top;
      matrix[first][i] = matrix[last - offSet][first];
      // bottom to left
      matrix[last - offSet][first] = matrix[last][last - offSet];
      // right to bottom
      matrix[last][last - offSet] = matrix[i][last];
      // top to right
      matrix[i][last] = top;
    }
  }
  return matrix;
}

const firstIputArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const firstOutputArray = [
  [21, 16, 11, 6, 1],
  [22, 17, 12, 7, 2],
  [23, 18, 13, 8, 3],
  [24, 19, 14, 9, 4],
  [25, 20, 15, 10, 5]
];

console.log({
  result: `
    ${rotateMatrix(firstIputArray)}
  `,
  expected: `
  ${firstOutputArray}
  `
})

const secondInputArray = [];
const secondOutputArray = [];

const thirdInputArray = [[]];
const thirdOutputArray = [[]];

const fourthInputArray = [[1]];
const fourthOutputArray = [[1]];

const fifthInputArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const sixthIputArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const sixthOutputArray = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

const fifthOutputArray = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
];

const seventhIputArray = [[1, 2], [3, 4]];
const seventhOutputArray = [[3, 1], [4, 2]];

