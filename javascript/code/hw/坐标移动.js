console.time('first');
const s = 'A10;S20;W10;D30;X;A1A;B10A11;;A10;';
const arr = s.split(';');
const reg = /^(A|S|W|D)\d{1,2}$/;
let res = [0, 0];

for (let i = 0; i < arr.length; i++) {
  if (reg.test(arr[i]) === true) {
		if (arr[i][0] === 'A') {
      let x = arr[i].replace(/\D/, '');
      let y = 0;
			res[0] -= x;
      res[1] += y;
    }
    else if (arr[i][0] === 'S') {
      let x = 0;
      let y = arr[i].replace(/\D/, '');
      res[0] += x;
      res[1] -= y;
    }
    else if (arr[i][0] === 'W') {
      let x = 0;
      let y = arr[i].replace(/\D/, '');
      res[0] += 0;
      res[1] += y - '0';
    }
    else if (arr[i][0] === 'D') {
      let x = arr[i].replace(/\D/, '');
      let y = 0;
      res[0] += x - '0';
      res[1] += y;
    }
  }
}

console.log(`(${res[0]}, ${res[1]})`);
console.timeEnd('first');