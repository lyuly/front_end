const Koa = require('koa')
const KoaBody = require('koa-body')

const errHandler = require('./errHandler')

const userRouter  = require('../router/user.route')

const cors = require('@koa/cors')

const app = new Koa()

app.use(cors())
app.use(KoaBody())
app.use(userRouter.routes())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app