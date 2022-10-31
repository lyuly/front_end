let size = 1000

for (let i = 0; i < 20; i++) {
  const str = 'a'.repeat(size);
  console.log(size);
  console.time(i);
  const slice = str.slice(2, size - 1);
  console.timeEnd(i)
  size *= 2
}