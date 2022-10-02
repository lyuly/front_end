#!/usr/bin/env bun

const judgeType = (obj: any): string => {
  const arr =  Object.prototype.toString.call(obj);
  return arr.slice(8, -1);
}

console.log(judgeType(1));
console.log(judgeType(true));
console.log(judgeType('str'));
console.log(judgeType([]));
console.log(judgeType({}));
console.log(judgeType(function() {}));
console.log(judgeType(undefined));
console.log(judgeType(null));