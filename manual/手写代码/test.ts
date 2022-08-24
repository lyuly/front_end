#!/usr/bin/env bun

interface Person {
  name: string;
  age: number;
  sex: string
}

const obj: Person = {
  name: 'hhh',
  age: 18,
  sex: '男'
}

let key: keyof Person;
for (key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(element);
  }
}

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDay();
const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();

console.log(`${year}年${month}月${day}日${h}:${m}:${s}`);