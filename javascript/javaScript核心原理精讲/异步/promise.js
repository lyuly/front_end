#!/usr/bin/env node

const p = new Promise((resolve, reject) => {
  resolve('success')
  console.log(1)
}).then((res) => {
  console.log(res)
})

p