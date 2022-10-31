function getType(value) {
  if (value === null) {
    return value + "";
  }

  if (typeof value === 'object') {
    let valueArr = Object.prototype.toString.call(value);
    let type = valueArr.split(" ")[1].split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    return typeof value;
  }
}

console.log(getType(1));
console.log(getType('1'));
console.log(getType({name: 'mmmd'}));
console.log(getType([1,2,3]));