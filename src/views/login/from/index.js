import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './from.less'
 class NormalLoginForm extends Component {

    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{
                width:'300px',
                padding:'20px',
                backgroundColor:'#fff',
                position:'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                paddingBottom:"0px",
                borderRadius:'10px'
            }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>勾选</Checkbox>)}
                   
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        登录
                    </Button>
                    <a href="">现在注册</a>
                    <a className="login-form-forgot" href="" style={{float:'right'}}>
                        忘记密码
                    </a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm