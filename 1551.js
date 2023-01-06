var minOperations = function (n) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = 2 * i + 1;
  }
  let x = arr.length - 1;
  let y = 0;

  while (arr.every((val) => val === arr[0]) != true) {
    while (arr[y] !== arr[x]) {
      arr[x] = arr[x] - 1;
      arr[y] = arr[y] + 1;
      count++;
    }
    x--;
    y++;
  }
  return count;
};

console.log(minOperations(3));
