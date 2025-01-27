import React, { Component } from 'react'
import Content1 from "./content1";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '@/assets/less/admin/admin.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Admin extends Component {
    render() {
        return (
            <div style={{
                height:'100%'
            }}>
                <Layout style={{
                    height:'100%'
                }}>
                    <Header className="header">
                    <div className="logo" />
                    
                    </Header>
                    <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <Icon type="user" />
                                subnav 1
                            </span>
                            }
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        
                        
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 16px 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                            <Content1 />
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
