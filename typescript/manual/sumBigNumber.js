"use strict";
function sumBigNumber(a, b) {
    let res = '';
    let temp = 0;
    let arr = a.split('');
    let brr = b.split('');
    while (arr.length || brr.length || temp) {
        temp += ~~arr.pop() + ~~brr.pop();
        res = temp % 10 + res;
        temp = temp > 9 ? 1 : 0;
    }
    return res.replace(/^0+}/, '');
}
console.time('sumBigNumber');
console.log(sumBigNumber('11111111111111111111111111111111', '99999999999999999999999999999999999'));
console.timeEnd('sumBigNumber');
