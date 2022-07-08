// object为一个对象
let person:object;
person = {};
person = function () {

};

// {} 用来指定对象汇总可以包含哪些属性
// 语法：{属性名:属性值, 属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
let p: {name: string, age?: number};

p = {name: '猪猪', age: 23};

let c: {name: string, [propName: string]:any};
c = {name: '小米', age: 18, gender: '男'}

/* 
  设置函数结构的类型声明：
    语法：(形参:类型, 形参:类型...) => 返回值
*/
let d: (a:number, b:number)=>number;
// d = function(n1, n2):number {
//   return n1 + n2;
// }

/* 
  数组的类型声明：
    变量:类型[]

    变量: Array<类型>
*/

// string[] 表示字符串数组
let e: string[];

e = ['a', 'b', 'c'];

let f: number[];
f = [1, 2, 3];

let g: Array<Number>;
g = [1, 0, 9];

/* 
  元组：固定长度的数组
*/

let h: [string, string];
h = ['a', 'b'];

/* 
  enum 枚举
*/

enum Gender{
  Male = 0,
  Female = 1
}

let i: {name: string, gender: Gender};
i = {
  name: '孙悟空',
  gender: Gender.Male
}

// console.log(i.gender === Gender.Male);

// &表示同时
let j: {name: string} & {  age : number};
j = {name: 'pig', age: 10};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;

k = 1;
