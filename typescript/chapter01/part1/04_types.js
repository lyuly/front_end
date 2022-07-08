// object为一个对象
var person;
person = {};
person = function () {
};
// {} 用来指定对象汇总可以包含哪些属性
// 语法：{属性名:属性值, 属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
var p;
p = { name: '猪猪', age: 23 };
var c;
c = { name: '小米', age: 18, gender: '男' };
/*
  设置函数结构的类型声明：
    语法：(形参:类型, 形参:类型...) => 返回值
*/
var d;
// d = function(n1, n2):number {
//   return n1 + n2;
// }
/*
  数组的类型声明：
    变量:类型[]

    变量: Array<类型>
*/
// string[] 表示字符串数组
var e;
e = ['a', 'b', 'c'];
var f;
f = [1, 2, 3];
var g;
g = [1, 0, 9];
/*
  元组：固定长度的数组
*/
var h;
h = ['a', 'b'];
/*
  enum 枚举
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
