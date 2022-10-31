const xhr = new XMLHttpRequest()

xhr.open('get', 'https://www.baidu.com', true)

xhr.onreadystatechange = () => {
  if (this.readyState !== 4) {
    return;
  }
  if (this.status === 200) {
    handle(this.response);
  } else {
    console.error(this.statusText);
  }
};

xhr.onerror = () => {
  console.error(this.statusText);
}

xhr.responseType = "json";
xhr.setRequestHeader('Accept', 'application/json');
xhr.send();