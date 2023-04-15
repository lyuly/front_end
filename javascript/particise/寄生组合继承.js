function Parent() {
  this.name = 'pig';
  this.age = 18;
}

function Child() {
  Parent.call(this);
  this.friends = 'parent1';
}

function clone(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

Parent.prototype.getName = function() {
  return this.name;
}

clone(Child, Parent);

Child.prototype.getFriends = function() {
  return this.friends;
}

const p = new Child();
console.log(p);
console.log(p.getName());
console.log(p.getFriends());