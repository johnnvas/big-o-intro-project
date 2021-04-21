function firstAnagram(str1, str2) {
  // Code goes here ....
  let arr = str2.split('')
  for (let i = 0; i <= str1.length - 1; i++) {
    let letter = str1[i]
    if (arr.includes(letter)) {
      arr.splice(str2.indexOf(letter), 1)
    } else {
      return false;
    }
  }
  if (!arr.length) return true;

}
console.log(firstAnagram("gizmo", "sally"));    // => false
console.log(firstAnagram("elvis", "lives"));    // => true


function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
