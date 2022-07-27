const url = 'https://www.baidu.com'
const XMLHttpRequest = require('xhr2');

function getUrl() {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4)  return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    }
    xhr.responseType = 'json';
    xhr.setRequestHeader("Accept", 'application/json');
    xhr.send();
  })
  return promise;
}

const fn = async() => {
  let r = await getUrl();
  console.log(r);
}

fn();