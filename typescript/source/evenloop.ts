function foo(b: number): number {
    let a = 10;
    return a + b + 11;
}

function bar(x: number): number {
    let y = 3;
    return foo(x * y);
}

console.time('first');
console.log(bar(7));
console.timeEnd('first');