import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, Popconfirm, Switch } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.sass'

import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const { Header, Sider } = Layout

const items = [
  { label: (<Link to='/'>数据概览</Link>), key: '/', icon: <HomeOutlined/> },
  { label: (<Link to='/article'>内容管理</Link>), key: '/article', icon: <DiffOutlined/> },
  { label: (<Link to='/publish'>发布文章</Link>), key: '/publish', icon: <EditOutlined/> },
]

const GeekLayout = () => {

  const [theme, setTheme] = useState('dark')
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
  }

  const { pathname } = useLocation()

  const { userStore, loginStore, channelStore } = useStore()

  useEffect(() => {
    userStore.getUserInfo()
    channelStore.loadChannelList()
  }, [userStore, channelStore])

  const navigate = useNavigate()
  const confirm = () => {
    loginStore.loginOut()
    navigate('/login')
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Switch
              checked={theme === 'dark'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <Popconfirm
              title="是否确认退出？"
              onConfirm={confirm}
              okText="退出"
              cancelText="取消"
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {/* 高亮 defaultSelectedKeys === item.key */}
          <Menu
            mode="inline"
            theme={theme}
            defaultSelectedKeys={[pathname]}
            selectedKeys={[pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          >
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)