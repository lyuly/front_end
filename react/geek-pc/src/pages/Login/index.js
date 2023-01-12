import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Checkbox, Button, Form, Input, message } from 'antd'
import logo from '@/assets/logo.jpg'
import './index.sass'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {

  const { loginStore } = useStore()
  const token = loginStore.token
  const navigate = useNavigate()

  const onFinish = async values => {
    const { mobile, code, remember } = values
    try {
      await loginStore.getToken({mobile, code, remember})
      navigate('/', { replace: true })
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
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
          initialValues={{ mobile: '13911111111', code: '246810', remember: true }}
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='mobile'
            rules={[
              {
                required: true,
                message: '请输入手机号'
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input
              size='large'
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder='请输入手机号'/>
          </Form.Item>

          <Form.Item
            name='code'
            rules={[
              {
                required: true,
                message: '请输入验证码'
              },
              {
                len: 6,
                message: '请输入6位验证码',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input
              size='large'
              prefix={<LockOutlined className="site-form-item-icon" />}
              type='password'
              placeholder='请输入验证码'/>
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