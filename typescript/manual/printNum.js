"use strict";
console.time('time:');
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    })(i);
}
console.timeEnd('time:');
