function newArr() {
    const arr = new Object();
    console.time('arr');
    for (let i = 0; i < 10000; i++) {
        arr[i] = [];
    }
    console.timeEnd('arr');
}
function newArr2() {
    const arr = new Object();
    console.time('arr2');
    for (let i = 0; i < 10000; i++) {
        arr[i] = new Array();
    }
    console.timeEnd('arr2');
}

newArr();
console.log('-----------------------------');
newArr2();
