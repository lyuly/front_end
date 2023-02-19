const http = require('http')

const body = JSON.stringify({ msg: 'ready!' })

const req = http.request('http://127.0.0.1:3000', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': body.length,
  },
}, res => {
  const bufs = []
  res.on('data', data => {
    bufs.push(data)
  })
  res.on('end', () => {
    const receive = JSON.parse(Buffer.concat(bufs).toString())
    console.log('receive:', receive)
  })
})

req.end(body)