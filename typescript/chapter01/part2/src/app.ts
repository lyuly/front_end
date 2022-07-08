// import { hi } from './m.ts'

let a = 10;
console.log(a)

function add(a:number, b:number):number {
  return a + b;
}

function fn(){
  alert(this);
}

let box1 = document.getElementById('box1');
// if (box1 !== null)
//   box1.addEventListener('click', function () {
//     alert('hello');
//   });

box1?.addEventListener('click', function() {
  alert('hello');
});