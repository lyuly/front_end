"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function red() {
    console.time('red');
    console.log('red');
    console.timeEnd('red');
}
function yellow() {
    console.time('yellow');
    console.log('yellow');
    console.timeEnd('yellow');
}
function green() {
    console.time('green');
    console.log('green');
    console.timeEnd('green');
}
/* const task = (time: number, light: string, callback: Function) => {
  setTimeout(() => {
    if (light === 'red')
      red();
    else if (light === 'yellow')
      yellow();
    else if (light === 'green')
      green();
    callback();
  }, time);
}

task(3000, 'red', () => {
  task(2000, 'green', () => {
    task(1000, 'yellow', Function.prototype)
  })
}); */
const task = (timer, light) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (light === 'red')
            red();
        else if (light === 'green')
            green();
        else if (light === 'yellow')
            yellow();
        resolve('');
    }, timer);
});
/*
const step = () => {
  task(3000, 'red')
    .then(() => task(2000, 'green'))
    .then(() => task(1000, 'yellow'))
    .then(step)
}

console.time('task');
step();
console.timeEnd('task'); */
const taskRunner = () => __awaiter(void 0, void 0, void 0, function* () {
    yield task(3000, 'red');
    yield task(2000, 'green');
    yield task(1000, 'yellow');
    taskRunner();
});
console.time('task');
taskRunner();
console.timeEnd('task');
