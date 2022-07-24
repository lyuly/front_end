/* 
call函数实现:
1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用call等方式调用的情况
2.判断传入上下文对象是否存在，如果不存在，则设置为window
3.处理传入的参数，截取第一个采参数后的所有参数
4.将函数作为上下文对象的一个属性
5.使用上下文对象来调用这个方法
6.删除刚才新增的属性
7.返回结果
*/

Function.prototype.myCall = function(context) {
  if (typeof context !== 'function') {
    console.error('type error');
  }

  let args = [...arguments].slice(1), result = null;
  context = context || window;
  context.fn = this;
  result = context.fn(args);
  delete context.fn;
  return result;
}