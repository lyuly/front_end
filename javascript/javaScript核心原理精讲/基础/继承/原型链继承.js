#!/usr/bin/env node

/* 
内存空间是共享的，一个变化，另一个也跟着变化
*/

function Parent1() {
  this.name = 'parent1'
  this.play = [1, 2, 3]
}

function Child1() {
  this.type = 'child2'
}

Child1.prototype = new Parent1()
console.log(new Child1())

var s1 = new Child1()
var s2 = new Child1()
s1.play.push(4)
// 问题，s1改变的同时，s2也改变了
console.log(s1.play, s2.play)