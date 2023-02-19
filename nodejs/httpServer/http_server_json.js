const http = require('http')

const server = http.createServer((req, res) => {
  const bufs = []
  req.on('data', (buf) => {
    bufs.push(buf)
  })
  req.on('end', () => {
    const buf = Buffer.concat(bufs).toString('utf8')
    let msg = 'hello'
    try {
      const res = JSON.parse(buf)
      msg = ret.msg
    } catch (err) {
      // res.end('invalid json')
    }

    const responseJson = {
      msg: `receive: ${msg}`
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(responseJson))
  })
})

const port = 3000

server.listen(port, () => {
  console.log('listening on: ', port)
})