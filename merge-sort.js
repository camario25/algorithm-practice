const testArr = [2, 5, 7, 1, 18, 9, 8, 10, 11, 13, 6, 3];

const testSortedArr1 = [1, 2, 3, 8];
const testSortedArr2 = [0, 4, 5, 7];

function mergeSort(unsortedArr) {
  if (unsortedArr.length === 1) {
    console.log(unsortedArr);
    return unsortedArr;
  } else {
    const half = Math.ceil(unsortedArr.length / 2);
    const firstHalf = mergeSort(unsortedArr.splice(0, half));
    const secondHalf = mergeSort(unsortedArr.splice(-half));
    return mergeSortUnify(firstHalf, secondHalf);
  }
}

function mergeSortUnify(arr1, arr2) {
  const sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length) {
      sortedArr.push(arr2[j]);
      j++;
    } else if (j === arr2.length || arr1[i] <= arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  return sortedArr;
}

console.log(mergeSortUnify(testSortedArr1, testSortedArr2));
console.log(mergeSort(testArr));
