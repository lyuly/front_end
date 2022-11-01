#!/usr/bin/env node

for (var i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log(i)
  })
}

// 正常输出
// 块级作用域
for (let i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log(i)
  })
}

// 立即执行函数
for (var i = 0; i <= 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j)
    })
    }
  )(i)
}

for (var i = 0; i <= 5; i++) {
  setTimeout((j) => {
    console.log(j)
  }, 0, i);
}