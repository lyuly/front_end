exports.randomArr = function(len) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    const item = Math.floor(Math.random() * (len - i) + i);
    arr.push(item);
  }
  return arr;
}