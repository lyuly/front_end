// Object.is处理Nan、-0 和 +0，保证 -0 和 +0 不再相同，但是Nan和Nan是相同的
// console.log(Object.is(1, 1));
// console.log(Object.is(+0, -0));
// console.log(Object.is(NaN, NaN));
// console.log(1 == "1");
// console.log(1 === "1");
// console.log(NaN == NaN);
// console.log(NaN === NaN);

const url = encodeURI("http://www.baidu.com");
console.log(url);

const url1 = encodeURIComponent("http://www.baidu.com");
console.log(url1);