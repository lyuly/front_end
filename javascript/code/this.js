#!/usr/bin/env node
function a() {
  var user = 'peter';
  console.log(this.user);
  console.log(this);
}

// a();

var o = {
  a: 10,
  b: {
    a : 12,
    fn: () => {
      console.log(this.a);
      console.log(this);
    }
  }
}

var j = o.b.fn;
// j();

function fn() {
  this.user = '追梦子';
}

var a = new fn();
// console.log(a.user);

const test = () => {
  console.log(this);
}
// test();

var c = {
  user: '哈哈哈',
  fn: function() {
    console.log(this.user);
  }
}

var d = c.fn;
// d.call(a);
// d.apply(a);
var e = d.bind(a);
e();