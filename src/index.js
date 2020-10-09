
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let k = 0;
  if (typeof matrix !== 'undefined' && matrix.length > 0) {
    for(let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for(let j = 0; j < matrix[i].length; j++) {
          arr[k] = matrix[i][j];
          k++;
        }
      } else {
        for(let j = matrix[i].length - 1; j >= 0; j--) {
          arr[k] = matrix[i][j];
          k++;
        }
      }
    }
  }
  return arr;
}
