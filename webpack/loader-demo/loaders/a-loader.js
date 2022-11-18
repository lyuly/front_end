/* 
content 源文件内容
map sourceMap的映射
meta 其他的内容
*/

function aLoader(content, map, meta) {
  console.log('开始执行aloader Normal Loader')
  content += "aLoader"
  return `module.exports = '${content}'`
}

/* 
remainingRequest  剩余请求
precedingRequest  前置请求
data
*/

aLoader.pitch = function(remainingRequest, precedingRequest, data) {
  console.log("开始执行aLoader Pitching Loader")
  console.log(remainingRequest, precedingRequest, data)
}

module.exports = aLoader