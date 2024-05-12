function processMatrix(matrix) {
  let min = Infinity;

  for (let row of matrix) {
    for (let num of row) {
      if (num < min) {
        min = num;
      }
    }
  }

  const result = [];

  for (let row of matrix) {
    const newRow = [];
    for (let num of row) {
      newRow.push(num % 2 === 1 ? num * min : num);
    }
    result.push(newRow);
  }

  return result;
}

const originalMatrix = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4],
];

console.log(processMatrix(originalMatrix));
