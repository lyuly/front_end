"use strict";
const obj1 = {
    name: 'nnn',
    age: 18
};
console.log(obj1.name);
console.log(obj1['name']);
let key;
for (key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        const element = obj1[key];
        console.log(element);
    }
}
