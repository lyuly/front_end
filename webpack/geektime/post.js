const fs = require('fs');
const XMLHttpRequest = require('xhr2');
let xml = new XMLHttpRequest();
let obj = {
  "path": "/aliyundrive/review/front_end/54-玩转webpack",
  "password": "",
  "page_num": 1,
  "page_size": 30
}
xml.open('POST', 'https://raspberrypi.chihuahua-pumpkinseed.ts.net/api/public/path', true);
xml.setRequestHeader("Content-type", "application/json", "charset=utf-8")
xml.send(JSON.stringify(obj));

xml.onreadystatechange = function() {
  if (xml.readyState === 4 && xml.status === 200) {
    let response = xml.responseText;
    let res = JSON.parse(response);
    const files = res.data.files;
    const names = [];
    const url = 'https://raspberrypi.chihuahua-pumpkinseed.ts.net/d/aliyundrive/review/front_end/54-%E7%8E%A9%E8%BD%ACwebpack/';
    for (let file of files) {
      names.push('#EXTINF:-1,' + file.name)
      names.push(url + file.name)
    }
    names.unshift('#EXTM3U')
    fs.writeFileSync('./webpack.m3u', names.join('\n'), err => {
      if (err) {
        console.error(err)
        return
      }
    })
  }
}