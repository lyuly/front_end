function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(Math.random() * (arr.length - i)) + i;
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
}

const arr = [1, 2, 3, 4, 5]
shuffle(arr)
console.log(arr)