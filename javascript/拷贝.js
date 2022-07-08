// 浅拷贝
function shallowCopy(object) {
  // 只拷贝对象
  if (!object || typeof object !== "object")  return;

  // 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历 object,并且判断是 object 的属性才拷贝
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

const arr = [1, 2, 3, 4]
const obj = {
  name: 'mark',
  age: 20
}

console.log(shallowCopy(arr));
console.log(shallowCopy(obj));

// 深拷贝
function deepCopy(object) {
  if (!object || typeof object !== "object")  return object;

  // 判断object是数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = deepCopy(object[key]);
    }
  }
  return newObject;
}

// console.log(deepCopy(arr));
// console.log(deepCopy(obj));

const b = [...arr, 6];
console.log(b);
b[0] = 5;
console.log("b:", b);
console.log("a:", arr);

console.log(arr.slice(1));