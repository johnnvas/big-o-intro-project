const fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

// function quadraticBiggestFish(fishes) {
//   // Code goes here ...
//   let biggestFish;
//   for (let i = 0; i <= fishes.length - 1; i++) {
//     for (let j = i + 1; j <= fishes.length - 1; j++) {
//       if (fishes[j].length > fishes[i].length) {
//       biggestFish = fishes[j];
//       }
//     }
//   }
//   console.log(biggestFish)
//   return biggestFish;
// }

// quadraticBiggestFish(fishes)


// function nlognBiggestFish(fishes) {
//   // Code goes here ...
//   fishes.sort((a, b)=> a.length - b.length);
//   console.log(fishes[fishes.length - 1])
//   return (fishes[fishes.length - 1])
// }
// nlognBiggestFish(fishes)


function linearBiggestFish(fishes) {
  // Code goes here ...
  let biggestFish = fishes[0]
  for (let i = 0; i <= fishes.length - 1; i++) {
    if (fishes[i].length > biggestFish.length) biggestFish = fishes[i];
  }
   console.log(biggestFish);
    return biggestFish;
}
linearBiggestFish(fishes)


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
