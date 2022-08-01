// 加法
const add = (a, b) => {
  let sum = a ^ b;
  let carry = (a & b) << 1;
  while (carry !== 0) {
    let x = sum;
    let y = carry;
    sum = x ^ y;
    carry = (x & y) << 1;
  }
  return sum;
}

console.log(add(13, 19));

// 减法
const subtract = (a, b) => {
  let subtractor = add(~b, 1);
  let res = add(a, subtractor);
  return res;
}

console.log(subtract(21, 11));

// 乘法
const multiply = (a, b) => {
  // 取绝对值
  let x = a < 0 ? add(~a, 1) : a;
  let y = b < 0 ? add(~b, 1) : b;
  // 计算绝对值的乘积
  let product = 0;
  let count = 0;
  while (count < y) {
    product = add(product, x);
    count = add(count, 1);
  }

  // 只考虑最高位，如果a,b异号，则异或后最高位为1；如果同号，则异或后最高位为0
  if ((a ^ b) < 0) {
    product = add(~product, 1);
  }
  return product;
}

console.log(multiply(12, 11));

// 除法
const divide = (a, b) => {
  // 被除数、除数
  let dividend = a > 0 ? a : add(~a, 1);
  let divisor = b > 0 ? a : add(~b, 1);

  // 商、余数
  let q = 0;
  let remainer = 0;

  while (dividend >= divisor) {
    q = add(q, 1);
    dividend = subtract(dividend, divisor);
  }

  if ((a ^ b) < 0) {
    q = add(~q, 1);
  }
  remainer = b > 0 ? dividend : add(~dividend, 1);
  return q;
}

console.log(divide(6, 2));