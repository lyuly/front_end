const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onreadystatechange = function() {
  if (this.readyState !== 4)  return
  else {
    if (this.status === 200) {
      console.log(this.response)
    } else {
      console.error(this.statusText);
    }
  }
}
xhr.onerror = function(e) {
  console.error(this.statusText);
}

xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);