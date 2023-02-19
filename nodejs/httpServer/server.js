const http  = require('http')
const port = 3002

const server = http.createServer((req, res) => {
  res.end('Hello world')
})

server.listen(port, () => {
  console.log(`server listens on: ${port}`)
})