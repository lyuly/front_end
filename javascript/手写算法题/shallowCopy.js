/* 
浅拷贝
concat
...
assign
*/

function shallowCopy(obj) {
  if (!obj || typeof obj !== 'object')  return

  let newObj = Array.isArray(obj) ? [] : {}

  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      newObj[item] = obj[item]
    }
  }
  return newObj
}

const obj = {name: 'pig', age: 1}
console.log(shallowCopy(obj))