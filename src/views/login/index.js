import React, { Component } from 'react'
import style from '@/assets/less/login/header.less'
import logo from '@/assets/img/logo.png'
import {Layout} from 'antd';
import From from './from'
class Login extends Component {
	render() {
		const { Header, Footer, Content } = Layout;
			return (
					<div className={style.div}>
							<Layout className={style.section}>
									<Header className={style.header}>
											<img src={logo} className={style.logo}/>
											<span className={style.span}>登录</span>
									</Header>
									<Content className={style.content}>
											<From></From>
									</Content>
									<Footer style={{
											textAlign:'center'
									}}>
											版权归我所有
									</Footer>
							</Layout>
					</div>
			)
	}
}
export default Login
