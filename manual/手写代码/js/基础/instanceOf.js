/* 
instanceof用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
*/

function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left), prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype)  return true;
    proto = Object.getPrototypeOf(proto);
  }
}