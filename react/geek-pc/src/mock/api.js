import Mock from "mockjs"

const url = {
  login: 'http://example.com/login',
  profile: 'http://example.com/user/profile'
}

Mock.mock(url.login, "post", function(req, res) {
  const {mobile, code, remember} = JSON.parse(req.body)
  if (mobile === '13911111111' && code === '246810' && remember === true) {
    return {
      type: 1,
      code: 200,
      message: '登录成功',
      data: {
        token: 'cd8dc843-8287-49ca-b8a2-224baf7bde14'
      }
    }
  }
  else {
    return {
      type: 1,
      code: 400,
      message: '登录失败',
      result: {
      }
    }
  }
})

Mock.mock(url.profile, "get", (req, res) => {
  console.log(req)
  return {
    type: 1,
    code: 200,
    message: 'OK',
    data: {
      birthday: "1990-11-20",
      gender: 1,
      id: '1111',
      mobile: '13911111111',
      name: '小蜗牛',
      photo: 'http://geek.itheima.net/images/user_head.jpg'
    }
  }
})