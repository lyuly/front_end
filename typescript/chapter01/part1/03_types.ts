//  也可以直接使用字面量进行类型声明

let a: 10;
a = 10;

//  可以使用 | 来连接多个类型（联合类型）
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = "hello";

//  any 表示的是任意关系，一个变量设置类型为any后相当于关闭了ts的类型检查
//  使用ts时,不建议使用any
let d: any;
d = 10;
d = "hello";
d = true;

// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string;

// d的类型是any,它可以赋值给任意变量
s = d;

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof e === 'string') {
  s = e;
}

// 类型断言，可以告诉解析器变量的实际类型
/* 
  语法：
    变量 as 类型
    <类型>  变量
*/
s = e as string;
s = <string> e;

// void表示为空，函数表示没有返回值
function fn(): void {
}

// never 表示永远不会返回结束
function fn2(): never {
  throw new Error('错误！！！');
}