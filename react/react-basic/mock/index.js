const Mock = require('mockjs')
var data = Mock.mock({
  "res": [
    { '1': '吃饭', time: 2, job: '可乐' },
    { '2': '睡觉', time: 3, jo: '深睡' },
    { '3': '打游戏', time: 4, job: '英雄联盟' }
  ],
  "code": 200
})

export default data