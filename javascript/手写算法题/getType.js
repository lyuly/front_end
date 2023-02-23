function getType(obj) {
  if (!obj) {
    return ''
  } else {
    const res = Object.prototype.toString.call(obj)
    return res.split(' ')[1].replace(']', '')
  }
}

console.log(getType([1, 2, 3]))