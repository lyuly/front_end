
type returnType = string | null;

// 有小数点
function splitNum(n: number): returnType {
  const s = n.toString();
  let decimal: string = s.indexOf('.') > -1 ? s.split('.')[1] : '';
  const length: number = s.length;

  if (length <= 3) {
    return s;
  } else {
    let t: string = decimal ? '.' + decimal : '';
    const remain: number = length % 3;
    if (remain > 0) {
      let res: string = s.slice(0, remain) + ',' + s.slice(remain, length).match(/\d{3}/g)!.join(',') + t;
      return res;
    } else {
      let res = s.slice(0, length).match(/\d{3}/g)!.join(',') + t;
      return res;
    }
  }
}

// 无小数点
function split(n: number): returnType {
  const s = n.toString();
  const length: number = s.length;

  if (length <= 3) {
    return s;
  } else {
    const remain: number = length % 3;
    if (remain > 0) {
      return s.slice(0, remain) + ',' + s.slice(remain, length).match(/\d{3}/g)!.join(',');
    } else {
      return s.slice(0, length).match(/\d{3}/g)!.join(',')
    }
  }
}

console.time('splitNum');
console.log(splitNum(123456789.123));
console.timeEnd('splitNum');
console.time('split');
console.log(split(123456789));
console.timeEnd('split');