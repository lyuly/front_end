/* 
堆排序
*/

const sink = (arr: number[], k: number, n: number) => {
    let parent: number = k;
    let child: number = parent * 2 + 1;
    while (child <= n) {
        if (child + 1 <= n && arr[child] < arr[child + 1]) child++;
        if (arr[parent] >= arr[child]) return;
        else {
            [arr[parent], arr[child]] = [arr[child], arr[parent]];
            parent = child;
            child = parent * 2 + 1;
        }
    }
}

const sort = (arr: number[]) => {
    let len: number = arr.length;
    for (let k: number = Math.floor((len - 1 - 1) / 2); k >= 0; k--) {
        sink(arr, k, len - 1);
    }

    for (let k: number = len - 1; k > 0; k--) {
        [arr[0], arr[k]] = [arr[k], arr[0]];
        sink(arr, 0, k - 1);
    }
}
console.time('heap');
const arr: number[] = [1, 5, 2, 4, 3];
console.log(`排序前: ${arr}`);
sort(arr);
console.log(`排序后: ${arr}`);
console.timeEnd('heap');