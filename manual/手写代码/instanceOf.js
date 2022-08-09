/* 
手写instanceof方法
left: 对象
right: 构造函数

1.首先获取对象的原型
2.获取构造函数的原型
3.循环判断对象的原型是否等于类型的原型
*/
function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype)  return true;
    proto = Object.getPrototypeOf(proto);
  }
}

const a = [1,2,3,4]

console.log(myInstanceOf(a, Array));