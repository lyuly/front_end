function red(): void {
  console.time('red');
  console.log('red');
  console.timeEnd('red');
}

function yellow(): void {
  console.time('yellow');
  console.log('yellow');
  console.timeEnd('yellow');
}

function green(): void {
  console.time('green');
  console.log('green');
  console.timeEnd('green');
}

/* const task = (time: number, light: string, callback: Function) => {
  setTimeout(() => {
    if (light === 'red')
      red();
    else if (light === 'yellow')
      yellow();
    else if (light === 'green')
      green();
    callback();
  }, time);
}

task(3000, 'red', () => {
  task(2000, 'green', () => {
    task(1000, 'yellow', Function.prototype)
  })
}); */

const task = (timer: number, light: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red')
        red();
      else if (light === 'green')
        green();
      else if (light === 'yellow')
        yellow();
      resolve('');
    }, timer);
  })

/*
const step = () => {
  task(3000, 'red')
    .then(() => task(2000, 'green'))
    .then(() => task(1000, 'yellow'))
    .then(step)
}

console.time('task');
step();
console.timeEnd('task'); */

const taskRunner = async() => {
  await task(3000, 'red');
  await task(2000, 'green');
  await task(1000, 'yellow');
  taskRunner();
}

console.time('task');
taskRunner();
console.timeEnd('task');