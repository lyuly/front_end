import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('订阅前');
observable.subscribe({
  next(x) {
    console.log(`获得值：${x}`);
  },
  error(err) {
    console.error(`错误发生：${err}}`);
  },
  complete() {
    console.log('完成');
  },
});
console.log('订阅后');

const foo = new Observable((subscriber) => {
  console.log('hello');
  subscriber.next(42);
});

foo.subscribe((x) => {
  console.log(x);
});

foo.subscribe((y) => {
  console.log(y);
});