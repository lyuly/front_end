#!/usr/bin/env node

fetch('http://suggest.taobao.com/sug?code=utf-8&q=商品关键字&callback=cb')
  .then(res => res.json())
  .then(data => console.log(data));