#!/usr/bin/env node

/* 
Number()方法的强制转换规则
布尔值 true 1 false 0
数字 本身
null 0
undefined NaN
字符串 十进制数
Symbol 抛出错误
对象，并且部署了[Symbol.toPrimitive] 调用此方法，否则调用valueOf()
*/

/* 
Boolean()方法
除了undefined null false '' 0 NaN是false
其他是true
*/

'123' == 123 // true
'' == null // true
'' == 0 // true
[] == 0 // true
[] == '' // true
[] == ![] // false
null == undefined // true
Number(null) // 0
Number('') // 0
parseInt('') // NaN
{}+10 // '10'
let obj = {
  [Symbol.toPrimitive]() {
      return 200;
  },
  valueOf() {
      return 300;
  },
  toString() {
      return 'Hello';
  }
}
console.log(obj + 200); // 400