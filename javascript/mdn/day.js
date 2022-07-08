const s = 'abcdef';
s.indexOf('b');
s.startsWith('b');
s.includes('c');
s.slice(0, 2);
s.split('');
s.substring(2, 4);
s.toUpperCase();
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size;
sayings.get('fox');
sayings.has('bird');
sayings.delete('dog');
sayings.has('dog');

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
sayings.clear();
sayings.size;

// const privates = new WeakMap();

// function Public() {
//   const me = {
//     'age': 18,
//     'sex': 'man'
//   };
//   privates.set(this, me);
// }
// Public.prototype.method = function () {
//   const me = privates;.get(this);
// };

// module.exports = Public;

var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1);
mySet.delete('foo');
mySet.size;

for (let item of mySet) console.log(item);

const a = Array.from(mySet);
mySet2 = new Set([1, 2, 3, 4]);

let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();
myObj.type = 'Dot syntax';
myObj['date created'] = 'String with space';
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] = 'object';
myObj[""] = "Even an empty string";

console.log(myObj);

var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a)
console.log(o.b);
o.c = 50;
console.log(o.a);

var d = Date.prototype;
Object.defineProperty(d, 'year', {
  get: function() { return this.getFullYear()},
  set: function(y) { this.setFullYear(y)}
});

var now = new Date();
console.log(now.year);
now.year = 2001;
console.log(now)

function Employee () {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
	Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = 'sales';
  this.quota = 100;
}

var jim = new Employee;
console.log(jim.dept);

var sally = new Manager;
console.log(sally.name);
console.log(sally.dept);
console.log(sally.reports);
console.log('-----');

var mark = new WorkerBee;
mark.name = 'Doe, Mark';
mark.dept = 'admin';
mark.projects = ['navigator'];
mark.bonus = 3000;

Employee.prototype.specialty = 'none';

console.log(mark.specialty);

function Engineer(mach) {
  this.dept = 'engineering';
  this.machine = mach || "";
}

Engineer.prototype = new WorkerBee;

var jane = new Engineer('belau');
console.log(jane.name, jane.dept, jane.projects, jane.machine);