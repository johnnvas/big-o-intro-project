const arr = [0, 1, 5, 7];

function badTwoSum(arr, targetSum) {
  // Code goes here ...
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === targetSum) return true;
  }
  return false
}
// console.log(badTwoSum(arr, 6)); // => should be true
// console.log(badTwoSum(arr, 10)); // => should be false


function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
  let midIdx = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, midIdx);
  let rightArr = arr.slice(midIdx + 1);
  
  if (targetSum > arr[midIdx] + arr[midIdx - 1]) return okayTwoSum1(rightArr, targetSum)
  else if (targetSum < arr[midIdx] + arr[midIdx - 1]) return okayTwoSum1(leftArr, targetSum)
  else if (targetSum === arr[midIdx] + arr[midIdx - 1]) return true;
  else {
    return false;
  }

}
console.log(okayTwoSum1(arr, 6)); // => should be true
console.log(okayTwoSum1(arr, 10)); // => should be false


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
