#!/usr/bin/env node

const s = 'abbba';
console.time('first');
console.log(s.split('').reverse().join('') === s);
console.timeEnd('first');

function judge(s) {
  if (s.length === 0)
    return
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j])
      return false;
    i++;
    j--;
  }
  return true;
}

console.time('second');
console.log(judge(s));
console.timeEnd('second');