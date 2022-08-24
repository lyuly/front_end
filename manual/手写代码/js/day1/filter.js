Array.prototype.myFilter = function(fn){
  if (typeof fn !== 'function') {
    throw new Error('type error');
  }

  const res = [];
  for (let i = 0, len = this.length; i < len; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
}