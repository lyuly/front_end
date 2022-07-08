function reverse(s: string): string {
  if (s.length === 0) return s;

  const str: string[] = [...s];

  let l: number = 0, r: number = s.length - 1;
  while (l < r) {
    let t: string = str[l];
    str[l] = str[r];
    str[r] = t;
    ++l;
    --r;
  }
  return str.join('');
}

console.log(reverse('word'));