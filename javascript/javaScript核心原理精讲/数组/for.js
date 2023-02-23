let arr = []

for (let i = 0; i < 20; i++) {
  arr[i] = i
}

console.time('forof')
for (let item of arr) {
  item = item * 2
}
console.timeEnd('forof')


console.time('fori')
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2
}
console.timeEnd('fori')

console.time('forEach')
arr.forEach((item) => {
  item = item * 2
})
console.timeEnd('forEach')