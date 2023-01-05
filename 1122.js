var relativeSortArray = function (arr1, arr2) {
  let updateVal = [];
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    let items = [...arr1].filter((ls) => ls === element);
    for (let j = 0; j < items.length; j++) {
      updateVal.push(element);
    }
    arr1 = arr1.filter((ls) => ls !== element);
  }
  return [...updateVal, ...arr1.sort((a, b) => a - b)];
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
