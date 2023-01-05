import React from 'react'
import { Button, Input, Form } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';


export default function Register() {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='pt-5'>
            <h2 className='text-center font-bold text-2xl uppercase'>Register Jira</h2>
            <Form
                
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
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name !',
                        },
                    ]}
                >
                    <Input size="large" placeholder="name" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    name="phoneNumber"
                    rules={[
                        {   
                            required: true,
                            message: 'Please input your phone number !',
                        },
                        {
                            min: 10,
                            message: 'Please enter phone number minimum 10 characters !',
                        },
                        {
                            max: 11,
                            message: 'Please enter phone number maximum 11 characters !',
                        },
                    ]}
                >
                    <Input type='number' size="large" placeholder="phone number" prefix={<PhoneOutlined />} />
                </Form.Item>


                <Form.Item>
                    <Button className='w-full' ghost type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>

                <div className='text-center'>
                Have an account?
                    <NavLink to='/login'><span className='font-medium' style={{color: '#5295f6'}}> Log in</span></NavLink>
                </div>
            </Form>
        </div>
    )
}
