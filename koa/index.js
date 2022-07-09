const Koa = require('koa');
const app = new Koa();

// 日志
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// 响应时间
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// 响应
app.use(async ctx => {
    ctx.body = '<data>一只小笨🐖</data>';
});

app.listen(3000);