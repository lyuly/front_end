/* 
1.新建一个空对象
2.设置原型，将对象的原型设为构造函数的prototype对象
3.让函数的this指向这个对象，执行构造函数的代码
4.判断返回值的类型，如果是值类型，则返回这个值；如果是引用类型，则返回引用类型的值
*/

function myNew(obj, ...args) {
  let newObj = {}
  Object.setPrototypeOf(newObj, obj.prototype)
  let res = obj.apply(newObj, args)
  return res instanceof Object ? res : newObj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

const p = myNew(Person, 'pig', 1)
console.log(p)