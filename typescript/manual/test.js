"use strict";
let size = 1000;
for (let i = 0; i < 20; i++) {
    const str = 'a'.repeat(size);
    console.time(i.toString());
    const slice = str.slice(2, size - 1);
    console.timeEnd(i.toString());
    size *= 2;
}
