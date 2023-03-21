const url = 'https://devapi.qweather.com/v7/weather/now?key=18a7bf8cb4f94fb0aca036a106becb43&location=125.29,43.83'

const queries = url.replace(/.+\?/, '').split('&')

const obj = {}

for (let i = 0; i < queries.length; i++) {
  let [key, value] = queries[i].split('=')
  obj[key] = value
}

console.log(obj)