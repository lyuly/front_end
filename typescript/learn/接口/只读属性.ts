interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x: 10, y: 10};
// p1.x = 5;

let a6: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a6;
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
a = ro;

a = ro as number[];