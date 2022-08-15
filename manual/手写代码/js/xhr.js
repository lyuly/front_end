const XMLHttpRequest = require('xhr2');

function getRes(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4)  return;
    if (this.status === 200) {
      console.log(this.response);
    } else {
      console.log(new Error(this.statusText));
    }
  }
  xhr.onerror = function() {
    console.log(new Error(this.statusText));
  }
  xhr.responseType = 'json';
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
}
const url = 'https://www.baidu.com/sugrec?prod=pc_his&from=pc_web&json=1&sid=36551_36752_36641_36726_37110_36413_36954_36167_36917_36569_36806_37136_37055_26350_36866_22159&hisdata=%5B%7B%22time%22%3A1660051728%2C%22kw%22%3A%222%E5%88%9D%E4%B8%AD%E7%94%9F%E9%93%81%E8%BD%A8%E6%8B%8D%E7%85%A7%E9%80%BC%E5%81%9C2%E8%BE%86%E7%81%AB%E8%BD%A6%22%7D%2C%7B%22time%22%3A1660051736%2C%22kw%22%3A%22%E6%AD%A6%E6%B1%89%E7%B3%96%E6%B0%B4%E7%88%B7%E7%88%B7%E9%81%AD%E7%BD%91%E6%9A%B4%E4%B8%8D%E6%91%86%E6%91%8A%E4%BA%86%22%7D%2C%7B%22time%22%3A1660051870%2C%22kw%22%3A%22%E8%BF%90%E6%B2%B920%E7%A9%BA%E4%B8%AD%E5%8A%A0%E6%B2%B9%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%22%7D%2C%7B%22time%22%3A1660052149%2C%22kw%22%3A%22%E5%8C%97%E4%BA%AC%E6%B6%88%E5%8D%8F%E7%BA%A6%E8%B0%88%E6%AF%8F%E6%97%A5%E4%BC%98%E9%B2%9C%22%7D%2C%7B%22time%22%3A1660097654%2C%22kw%22%3A%22%E7%8E%8B%E5%B1%B9%E8%8A%9D%22%7D%2C%7B%22time%22%3A1660097662%2C%22kw%22%3A%22%E8%A7%A3%E6%94%BE%E5%86%9B%E5%86%9B%E6%BC%94%E6%8C%81%E7%BB%AD%20%E8%94%A1%E8%8B%B1%E6%96%87%E5%88%B0%E5%AF%BA%E5%BA%99%E7%83%A7%E9%A6%99%22%7D%2C%7B%22time%22%3A1660097666%2C%22kw%22%3A%22%E7%BE%8E%E5%86%9B%E9%AB%98%E8%B0%83%E5%AE%A3%E5%B8%83%E8%A6%81%E8%BF%87%E5%8F%B0%E6%B5%B7%20%E8%80%8D%E4%BB%80%E4%B9%88%E8%8A%B1%E6%A0%B7%22%7D%5D&_t=1660118427572&req=2&csor=0';
// getRes(url);

async function getResPromise(url) {
  const xhr = new XMLHttpRequest();
  const promise = await new Promise((resolve, reject) => {
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4)  return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(this.statusText);
      }
    }
    xhr.onerror = function() {
      reject(this.statusText);
    }
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
  })
  // console.log(promise);
  return promise;
}
const res = getResPromise(url);
console.log(res);