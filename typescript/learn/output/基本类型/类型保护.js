"use strict";
function doSome(x) {
    if (typeof x === 'string') {
        console.log(x.substring(1));
        console.log(x.substring(1));
    }
    // x.sub 无法保证是string还是number类型
}
class Foo {
    foo = 123;
    common = '123';
}
class Bar {
    bar = 123;
    common = '123';
}
function doStuff(arg) {
    if (arg instanceof Foo) {
        console.log(arg.foo);
        // console.log(arg.bar)
    }
    if (arg instanceof Bar) {
        // console.log(arg.foo)
        console.log(arg.bar);
    }
}
doStuff(new Foo());
doStuff(new Bar());
