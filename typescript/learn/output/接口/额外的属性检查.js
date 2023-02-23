"use strict";
function fn5(config) {
    let newP = { name: 'pig', age: 1 };
    if (config.name) {
        newP.name = config.name;
    }
    if (config.age) {
        newP.age = config.age;
    }
    return newP;
}
let p2 = fn5({ name: 'fff', age: 18 });
console.log(p2);
