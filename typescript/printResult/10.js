"use strict";
const promise10 = Promise.resolve().then(() => {
    return promise;
});
promise10.catch(console.error);
