const koa = require('koa')

const app = new koa()

app.use((ctx, next) => {
    ctx.body = '<p>hello koa</p>'
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
})