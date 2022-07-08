function lastRemain(n: number, m: number): number {
  if (n === 0)  return 0;
  if (m === 1)  return n - 1;

  let res: number = 0;
  for (let i: number = 2; i < n; i++) {
    res = (res + m) % i;
  }
  return res;
}

console.time('lastRemain');
console.log(lastRemain(30, 3));
console.timeEnd('lastRemain');