function flat(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flat(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

const arr = [1, [2, [3]]]
console.log(flat(arr))

function flat1(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flat1(next) : next)
  }, [])
}

function flat2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr
}

const arr1 = [1, [2, [3]]]
console.log(flat1(arr1))

console.log(flat2(arr1))