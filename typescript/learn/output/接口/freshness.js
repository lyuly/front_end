"use strict";
function logName(something) {
    console.log(something.name);
}
const person = { name: 'matt', job: 'welcome to' };
const animal = { name: 'pig', job: 'eat' };
const random = { note: 'ha ha ha' };
logName(person);
logName(animal);
// logName(random)
// 允许额外的属性
let x1;
x1 = { foo: 1, baz: 2 };
