var countDistinctIntegers = function (nums) {
  let finalArr = [...nums];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i].toString().split("").reverse().join("");
    finalArr.push(Number(element));
  }
  return new Set(finalArr).size;
};

console.log(countDistinctIntegers([1, 13, 10, 12, 31]));
