import Mock from "mockjs"

const url = {
  login: 'http://example.com/login'
}

Mock.mock(url.login, "post", function(req, res) {
  const {username, password, remember} = JSON.parse(req.body)
  if (username === 'lyuly' && password === 'abc12345' && remember === true) {
    return {
      type: 1,
      code: 200,
      message: '登录成功',
      token: 'cd8dc843-8287-49ca-b8a2-224baf7bde14'
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