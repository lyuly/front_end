const bcrypt = require("bcryptjs");

const { getUserInfo } = require("../service/user.service");
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword
} = require("../constant/err.type");

const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    console.error("用户名或密码为空", ctx.request.body);
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};

const verifyUser = async (ctx, next) => {
  const { username } = ctx.request.body;
  // 合理性
  try {
    const res = await getUserInfo({ username });

    if (res) {
      console.error("用户名已经存在", { username });
      ctx.app.emit("error", userAlreadyExited, ctx);
      return;
    }
  } catch (error) {
    console.error("获取用户信息错误", error);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }

  await next();
};

const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;

  const salt = bcrypt.genSaltSync(10);
  // 密文
  const hash = bcrypt.hashSync(password, salt);

  ctx.request.body.password = hash;

  await next();
};

const verifyLogin = async (ctx, next) => {
  // 判断用户是否存在
  const { username, password } = ctx.request.body;

  try {
    const res = await getUserInfo({ username });

    if (!res) {
      console.error(`用户不存在${username}`);
      ctx.app.emit("error", userDoesNotExist, ctx);
      return;
    }

    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (error) {
    console.error(err);
    ctx.app.emit("error", userLoginError, ctx);
  }

  await next();
};

module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
};
