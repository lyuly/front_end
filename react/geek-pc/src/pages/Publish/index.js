import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './index.sass'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useStore } from '@/store'
import { useState } from 'react'
import { http } from '@/utils'

function Publish() {
  const { channelStore } = useStore()

  // 存放上传图片的列表
  const [fileList, setFileList] = useState([])

  // 函数分两个阶段，从updating到done的过程
  // 这个过程只有上传图片内容发生变化就会不断执行直到全部上传完毕
  const onUploadChange = ({ fileList }) => {
    setFileList(fileList)
  }

  // 切换图片
  const [imgCount, setImageCount] = useState(1)
  const radioChange = (e) => {
    setImageCount(e.target.value)
  }

  // 提交表单
  const onFinish = async (values) => {
    const {channel_id, content, title, type} = values
    const params = {
      channel_id,
      content,
      title,
      type,
      cover: {
        type: type,
        images: fileList.map(item => item.response.data.url)
      }
    }
    await http.post('/mp/articles?draft=false', params)
  }

  return (
    <div className='publish'>
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>发布文章</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form
          labelCol={{ span: 4}}
          wrapperCol={{ span: 16}}
          initialValues={{ type: 1}}
          onFinish={onFinish}
        >
          
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder='请输入文章标题' style={{width: 400}}/>
          </Form.Item>
          
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select
              placeholder='请选择文章频道'
              style={{ width: 400}}
              options={channelStore.channelList.map((channel) => { return { value: channel.id, label: channel.name }})}
            >
            </Select>
          </Form.Item>

          <Form.Item label='封面'>
            <Form.Item name='type'>
              <Radio.Group onChange={radioChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imgCount > 0 && (
              <Upload
                name='image'
                listType='picture-card'
                className='avatar-uploader'
                showUploadList
                action="http://geek.itheima.net/v1_0/upload"
                fileList={fileList}
                onChange={onUploadChange}
                multiple={imgCount > 1}
              >
                <div style={{ marginTop: 8}}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label='内容'
            name='content'
            rules={[{ required: true, message: '请输入文章内容'}]}
          >
            <ReactQuill theme='snow'/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4}}>
            <Space>
              <Button size='large' type='primary' htmlType='submit'>发布文章</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default observer(Publish)