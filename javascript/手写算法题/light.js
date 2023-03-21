function red() {
  console.log('red light')
}

function green() {
  console.log('green light')
}

function yellow() {
  console.log('yellow light')
}

function fn(color, time, callback) {
  setTimeout(() => {
    if (color === 'red') {
      red()
    }
    if (color === 'green') {
      green()
    }
    if (color === 'yellow') {
      yellow()
    }
    callback()
  }, time * 1000)
}
const now = Date.now()
const exec = () => {
  fn('red', 3, () => {
    fn('green', 2, () => {
      fn('yellow', 1, exec)
    })
  })
}

exec()