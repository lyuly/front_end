/* 
content 源文件的内容
map可以被(https://github.com/mozilla/source-map)使用的SourceMap数据
meta 数据，可以是任何内容
*/

function simpleLoader(content, map, meta) {
  console.log('我是simpleLoader')
  return content
}

module.exports = simpleLoader