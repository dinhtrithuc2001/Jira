import React from 'react'
import { Button, Input, Checkbox, Form } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';


export default function Login() {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='pt-5'>
            <h2 className='text-center font-bold text-2xl uppercase'>Login Jira</h2>
            <Form
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email !',
                        },
                        {
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Please enter a valid email'
                        }
                    ]}
                >
                    <Input size="large" placeholder="email" prefix={<MailOutlined />} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password !',
                        },
                        {
                            min: 6,
                            message: 'Please enter password minimum 6 characters !',
                        },
                    ]}
                >
                    <Input.Password size="large" placeholder="password" prefix={<LockOutlined />} />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button className='w-full' ghost type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>

                <div className='text-center'>
                Don't have an account?
                    <NavLink to='/register'><span className='font-medium' style={{color: '#5295f6'}}> Sign up</span></NavLink>
                </div>
            </Form>
        </div>
    )
}
