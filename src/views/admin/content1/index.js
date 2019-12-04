import React, { Component } from 'react'

import { Table, Tag ,Button} from 'antd';
import {getListData} from '@/network/adminApi.js'//获取列表页的数据
export default class content1 extends Component {
    constructor(props){
      super(props)
      this.state={
        data: [
          {
            "id": "500000201211211289",
            "title": "而点象其看利求飞般再",
            "author": "邹秀英",
            "star": 268,
            key:'1'
          },
          {
            "id": "500000201211211284",
            "title": "而点象其看利求飞般再",
            "author": "邹秀英",
            "star": 268,
            key:'2'
          },
          {
            "id": "500000201211211283",
            "title": "而点象其看利求飞般再",
            "author": "邹秀英",
            "star": 268,
            key:'3'
          },
          ],
        columns:[
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
          },
          {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: '作者',
            dataIndex: 'author',
            key: 'author',
          },
          {
            title: '收藏',
            key: 'star',
            dataIndex: 'star',
            render: (tags,record) => (
                  tags>250?<Tag color="red">{tags}</Tag>: <Tag color="green">{tags}</Tag>
            ),
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record) => {
              return (
                <Button.Group size="small">
                  <Button type="primary">
      
                    编辑
                  </Button>
                  <Button type="danger">
                    删除
                    
                  </Button>
              </Button.Group>
              )
            },
          },
        ],
        isloading:true
      }
    }
    async componentDidMount(){
      this.setState(()=>{
        return {
          // data:
        }
      },()=>{

      })
      const res= await getListData()
      console.log(res)
    }
    render() {
      const { columns , data, isloading} =this.state
        return (
            <div>
                <Table columns={columns} dataSource={data} loading={isloading} rowKey={(record)=>{
                  return record.id
                }}/>
            </div>
        )
    }
}
