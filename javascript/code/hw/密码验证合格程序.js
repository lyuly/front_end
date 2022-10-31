console.time('first');
const s = '021Abc9000';
a = /(.{3,}).*\1/.test(s);
b1 = /\d/.test(s);
b2 = /[A-Z]/.test(s);
b3 = /[a-z]/.test(s);
b4 = /[^0-9A-Za-z]/.test(s);
if(a === false)
  console.log(b1 && b2 && b3);
console.timeEnd('first');