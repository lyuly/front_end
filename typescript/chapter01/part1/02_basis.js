// 声明变量，并指定类型
var a;
a = 1;
// 报错，原因是a的类型是Number，而不是string
// a = 'hi';
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
