const XMLHttpRequest = require("xhr2")

function xhr(url, method) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = () => {
      if (this.readyState !== 4)  return
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    xhr.onerror = () => {
      reject(new Error(this.statusText))
    }

    // xhr.responseType = "json"
    // xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()
  })
  return promise
}

module.exports = xhr