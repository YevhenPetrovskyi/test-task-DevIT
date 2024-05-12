function bulkRun(functions) {
  return Promise.all(
    functions.map(
      ([func, args]) =>
        new Promise((resolve) => {
          const callback = (result) => resolve(result);
          func(...args, callback);
        })
    )
  );
}

const f1 = (cb) => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Output: [1, 2, [3, 4]]
