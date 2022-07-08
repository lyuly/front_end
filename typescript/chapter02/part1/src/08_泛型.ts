/* function fn(a: number):number {
  return a;
} */

/* 
  在定义函数或类时，类型不明确的可以使用泛型
*/

function fn<T>(a: T): T {
  return a;
}

function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

fn2<number, string>(123, 'hello');

interface Inter{
  length: number;
}

function fn3<T extends Inter>(a: T): number {
  return a.length;
}

console.log(fn3('1'));

class MyClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const mc = new MyClass<string>('苏苏');

console.log(mc);