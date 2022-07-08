interface myObject {
  user: string;
  sex: string;
  age: number | string;
}

function parseUrl(url: string): myObject {
  const param = url.split('?')[1];
  const arr = param.split('&');
  const p: myObject = {
    user: '',
    sex: '',
    age: 0
  }
  arr.forEach((item) => {
    const key: string = item.split('=')[0];
    const val: string | number = item.split('=')[1];
    if (p.hasOwnProperty(key)) {
      p[key as keyof myObject] = val as never;
    }
  })
  return p;
}

console.time('first');
console.log(parseUrl('http://www.baidu.com/?user=zxd&sex=男&age=56'));
console.timeEnd('first')