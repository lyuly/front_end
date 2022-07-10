const { createUser } = require('../service/user.service')
class UserController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body
    const res = await createUser(username, password)
    // console.log(res);
    ctx.body = {
      code: 200,
      message: '用户注册成功',
      result: {
        id: res.id,
        username: res.username
      }
    }
  }

  async login(ctx, next) {
    ctx.body = '登录成功'
  }
}

module.exports = new UserController()