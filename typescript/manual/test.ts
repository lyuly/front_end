let size:number = 1000;

for (let i:number = 0; i < 20; i++) {
  const str: string = 'a'.repeat(size)
  console.time(i.toString());
  const slice: string = str.slice(2, size - 1);
  console.timeEnd(i.toString());
  size *= 2;
}