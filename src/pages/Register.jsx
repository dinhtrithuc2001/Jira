import React from 'react'
import { Button, Input, Form, message } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup'
import { CallApiRegister } from '../services/UserService';
import {history} from '../utils/history'

let timeout = null

const Register = (props) => {

    const {
        handleSubmit,
        handleChange,
        errors
    } = props

    return (
        <div className='pt-5'>
            <h2 className='text-center font-bold text-2xl uppercase'>Register Jira</h2>
            <Form onSubmitCapture={handleSubmit} autoComplete="off">
                <div className='text-red-500'>{errors.email}</div>
                <Form.Item name="email">
                    <Input onChange={handleChange} size="large" placeholder="email" prefix={<MailOutlined />} />
                </Form.Item>
                <div className='text-red-500'>{errors.password}</div>
                <Form.Item name="password">
                    <Input.Password onChange={handleChange} size="large" placeholder="password" prefix={<LockOutlined />} />
                </Form.Item>
                <div className='text-red-500'>{errors.name}</div>
                <Form.Item name="name">
                    <Input size="large" onChange={handleChange} placeholder="name" prefix={<UserOutlined />} />
                </Form.Item>
                <div className='text-red-500'>{errors.phoneNumber}</div>
                <Form.Item name="phoneNumber">
                    <Input type='number' onChange={handleChange} size="large" placeholder="phone number" prefix={<PhoneOutlined />} />
                </Form.Item>
                <Form.Item>
                    <Button className='w-full' ghost type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
                <div className='text-center'>
                    Have an account?
                    <NavLink to='/login'><span className='font-medium' style={{ color: '#5295f6' }}> Log in</span></NavLink>
                </div>
            </Form>
        </div>
    )
}

const callApiRegisterJira = async(values) => {
    try {
        await CallApiRegister(values)
        setTimeout(()=>{
            message.success('Register Success !!')
        },200)
        history.push('/login')
    } catch (error) {
        message.error(`${error.response.data.message}`)
    }
}

const RegisterJiraWithFormik = withFormik({

    mapPropsToValues: () => ({
        email: '',
        password: '',
        name: '',
        phoneNumber: '',
    }),
    handleSubmit: (values, {setSubmitting }) => {
        if(timeout !== null){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>{
            callApiRegisterJira(values)
        },1000)
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required!').email('Email is invalid!'),
        password: Yup.string().required('Password is required!').min(6, 'Please enter password minimum 6 characters'),
        name: Yup.string().required('Name is required!'),
        phoneNumber: Yup.string().required('Phone number is required!')
    })
})(Register)

export default RegisterJiraWithFormik