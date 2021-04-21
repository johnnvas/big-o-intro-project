function firstAnagram(str1, str2) {
  // Code goes here ....

  let arr = str2.split('')
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    if (arr.indexOf(letter) === -1) {
      return false;
    } else {
      arr.splice(arr.indexOf(letter), 1)
    }
  }

  return !arr.length;
}




function secondAnagram(str1, str2) {
  let arr1 = str1.split('').sort()
  let arr2 = str2.split('').sort()

  return arr1.join('') === arr2.join('');
}
// console.log(secondAnagram("gizmo", "sally"));    // => false
// console.log(secondAnagram("elvis", "lives"));    // => true

function thirdAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]]++;
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (!obj2[str2[j]]) {
      obj2[str2[j]] = 1;
    } else {
      obj2[str2[j]]++;
    }
  }
//  console.log(obj1, obj2)
}
console.log(thirdAnagram("gizmo", "sally"));    //
console.log(thirdAnagram("elvis", "lives"));    //


function fourthAnagram(str1, str2) {
  // Code goes here ....
  
}
