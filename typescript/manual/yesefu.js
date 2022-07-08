"use strict";
function lastRemain(n, m) {
    if (n === 0)
        return 0;
    if (m === 1)
        return n - 1;
    let res = 0;
    for (let i = 2; i < n; i++) {
        res = (res + m) % i;
    }
    return res;
}
console.time('lastRemain');
console.log(lastRemain(30, 3));
console.timeEnd('lastRemain');
