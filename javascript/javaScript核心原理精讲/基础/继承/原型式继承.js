#!/usr/bin/env node

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