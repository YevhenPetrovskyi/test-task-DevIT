function* chunkArray(array, chunkSize) {
  if (chunkSize <= 0) {
    throw new Error('Chunk size must be greater than 0');
  }

  for (let i = 0; i < array.length; i += chunkSize) {
    yield array.slice(i, i + chunkSize);
  }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

iterator.next(); // { value: [1,2,3], done: false }
iterator.next(); // { value: [4,5,6], done: false }
iterator.next(); // { value: [7,8], done: false }
iterator.next(); // { value: undefined, done: true }
