"use strict";
function parseUrl(url) {
    const param = url.split('?')[1];
    const arr = param.split('&');
    const p = {
        user: '',
        sex: '',
        age: 0
    };
    arr.forEach((item) => {
        const key = item.split('=')[0];
        const val = item.split('=')[1];
        if (p.hasOwnProperty(key)) {
            p[key] = val;
        }
    });
    return p;
}
console.time('first');
console.log(parseUrl('http://www.baidu.com/?user=zxd&sex=男&age=56'));
console.timeEnd('first');
