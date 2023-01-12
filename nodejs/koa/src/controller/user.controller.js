const { createUser, getUserInfo } = require('../service/user.service')

const { userRegisterError } = require('../constant/err.type')

class UserController {
  async register(ctx, next) {
    // 获取数据
    const { username, password } = ctx.request.body

    const res = await createUser(username, password)

    try {
      ctx.body = {
        code: 200,
        message: '用户注册成功',
        result: {
          id: res.id,
          username: res.username
        }
      } 
    } catch (error) {
      console.log(error);
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  async login(ctx, next) {

    const { username } = ctx.request.body
    ctx.body = `欢迎回来，${username}`
  }
}

module.exports = new UserController()