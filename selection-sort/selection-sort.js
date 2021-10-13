const findSmallest = (arr) => {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[index]) {
      index = i;
    }
  }

  return index;
};

const selectionSort = (arr) => {
  const result = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallest(arr);
    result.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }

  return result;
};

module.exports = selectionSort;
