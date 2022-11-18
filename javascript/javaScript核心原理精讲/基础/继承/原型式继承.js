#!/usr/bin/env node

/* 
原型式继承
1. 用作新对象原型的对象
2. 为新对象定义额外属性的对象（可选参数）
Object.create()方法继承
*/

let parent4 = {
  name: 'parent4',
  friends: ['p1', 'p2', 'p3'],
  getName: function() {
    return this.name
  }
}

let person4 = Object.create(parent4)
person4.name = 'tom'
person4.friends.push('jerry')

console.log(person4)
console.log(parent4)

let person5 = Object.create(parent4)
person5.friends.push("lucy")

console.log(person4.name)
console.log(person4.name === person4.getName())
console.log(person5.name)
console.log(person4.friends)
console.log(person5.friends)