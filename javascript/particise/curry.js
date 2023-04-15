function sum(a) {
  let total = a;
  function addNet(x) {
    total += x;
    return addNet
  }
  addNet.valueOf = function() {
    return total;
  }
  return addNet
}

console.log(sum(1)(2)(3)(4).valueOf());