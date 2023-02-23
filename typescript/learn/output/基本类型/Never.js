"use strict";
// 返回的never函数必须存在无法到达的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error('Something failed');
}
// 返回的never函数必须存在无法到达的终点
function infiniteLoop() {
    while (true) {
    }
}
function fooY(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    return error('type error');
}
