/* 
call
1. 判断传入对象是否是函数，不是返回类型错误
2. 判断上下文对象是否存在，不存在则设为window
3. 处理传入参数，截取第一个参数后的所有数
4. 将函数作为上下文对象的一个属性
5. 使用上下文对象来调用这个方法，并保存返回结果
6. 删除刚才新增的属性
7. 返回结果
*/

Function.prototype.myCall = function(context) {
  if (typeof context !== 'function') {
    throw new Error('type error');
  }

  context = context || window;
  context.fn = this;
  let result = null, args = [...arguments].slice(1);
  result = context.fn(...args);
  delete context.fn;
  return result;
}