var triangularSum = function (nums) {
  while (nums.length != 1) {
    let newNums = [];
    for (let i = 0; i < nums.length - 1; i++) {
      newNums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums = newNums;
  }
  return nums[0];
};

console.log(triangularSum([5]));
