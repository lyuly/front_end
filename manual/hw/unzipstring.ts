#!/usr/bin/env bun

const unzipString = (records: string): string => {
  let s1: Array<string> = [];
  let nums: Array<number> = [];

  for (let i: number = 0; i < records.length; i++) {
    if (/\d/.test(records[i])) {
      nums.push(parseInt(records[i]));
    }
  }

  for (let i: number = records.length - 1; i >= 0; i--) {
    const ch: string = records[i];
    if ('a' <= ch && ch <= 'z' || ch === ')') {
      s1.push(ch);
    }
    if (ch === '(') {
      let t: string = '';
      let x: string = '';
      while (s1.length > 0 && (x = s1.pop()!) && x !== ')' ) {
        t += x;
      }
      t = t.repeat(nums.shift()!);
      s1.push(t);
    }
  }
  return s1.reverse().join('');
}

const records: string = "a(b(c)<3>d)<2>e";
// const records = "abc(d)<2>e";
console.log(unzipString(records));