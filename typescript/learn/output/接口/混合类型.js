"use strict";
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c3 = getCounter();
c3(10);
c3.reset();
c3.interval = 5.0;
