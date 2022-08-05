const fs =  require('fs')
// 读取输入
const line = fs.readFileSync('71.txt', 'utf-8').toString().trim().split(/\r\n|\r|\n/);

const simplePath = (line) => {
  let names = line.split('/');
  // console.log(`names: ${names}`);
  let stack = [];
  for (const name of names) {
    if (name === '..') {
      if (stack.length) {
        stack.pop();
      }
    } else if (name.length && name !== '.') {
      stack.push(name);
    }
  }
  // console.log(`stack: ${stack}`);
  return '/' + stack.join('/');
}

for (const item of line) {
  console.log(simplePath(item));
}

// console.log(simplePath(line[0]));