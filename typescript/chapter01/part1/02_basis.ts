// 声明变量，并指定类型
let a:Number;

a = 1;

// 报错，原因是a的类型是Number，而不是string
// a = 'hi';

function sum(a: number, b: number):number {
  return a + b;
}

console.log(sum(1, 2));
