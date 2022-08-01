const objectToQuery = (obj) => {
  const arr = [];
  for (let i in obj) {
    arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
  }
  return arr.join('&');
}

const jsonp = ({url, data, callback}) => {
  const container = document.getElementsByTagName('head')[0];
  const fnName = `jsonp_${new Date().getTime()}`;
  const script = document.createElement('script');
  script.src = `${url}?${objectToQuery(data)}&callback=${fnName}`;
  script.type = 'text/javascript';
  container.appendChild(script);

  window[fnName] = function(res) {
    callback && callback(res);
    container.removeChild(script);
    delete window[fnName];
  }

  script.onerror = function() {
    window[fnName] = function() {
      callback && callback(
        'something error happened!'
      )
      container.removeChild(script);
      delete window[fnName];
    }
  }
}