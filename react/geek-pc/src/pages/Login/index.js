import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Checkbox, Button, Form, Input } from 'antd'
import logo from '@/assets/logo.jpg'
import './index.sass'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {

  const { loginStore } = useStore()
  const token = loginStore.token
  const navigate = useNavigate()

  const onFinish = (values) => {
    loginStore.getToken(values)
    navigate('/', { replace: true })
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  })

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }

  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt=""/>
        <Form
          initialValues={{ remember: true }}
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: '请输入用户名'
              },
              {
                pattern: /^[a-zA-Z0-9]{5,16}$/,
                message: '请输入正确的用户名，由字母数字组成，至少5位',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input
              size='large'
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder='请输入用户名'/>
          </Form.Item>

          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: '请输入密码'
              },
              {
                len: 8,
                message: '请输入8位密码',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input
              size='large'
              prefix={<LockOutlined className="site-form-item-icon" />}
              type='password'
              placeholder='请输入密码'/>
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
          >
            <Checkbox className='login-checkbox-label'>
              我已阅读并同意【用户协议】和【隐私条款】
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' size='medium' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login