import React from 'react'
import { Button, Input, Checkbox, Form } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { CallApiLogin } from '../services/UserService';
import { setLocalStorage } from '../utils/config';
import { LOCALSTORAGE_USER } from '../utils/constant';
import { setStatusLogin } from '../redux/reducers/UserReducer';
import {message} from 'antd'
import { history } from '../utils/history';


let timeout = null

const Login = (props) => {

    const {
        errors,
        handleChange,
        handleSubmit,
    } = props;

    return (
        <div className='pt-5'>
           
            <h2 className='text-center font-bold text-2xl uppercase'>Login Jira</h2>
            <Form onSubmitCapture={handleSubmit}
                initialValues={{
                    remember: true
                }}
                autoComplete="off"
            >
                <div className='text-red-500'>{errors.email}</div>
                <Form.Item name="email">
                    <Input onChange={handleChange} size="large" placeholder="email" prefix={<MailOutlined />} />
                </Form.Item>

                <div className='text-red-500'>{errors.password}</div>
                <Form.Item name="password">
                    <Input.Password onChange={handleChange} size="large" placeholder="password" prefix={<LockOutlined />} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button className='w-full' ghost type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>

                <div className='text-center'>
                    Don't have an account?
                    <NavLink to='/register'><span className='font-medium' style={{ color: '#5295f6' }}> Sign up</span></NavLink>
                </div>
            </Form>
            
        </div>
    )
}

const callApiLoginJira = async (values, props) => {
    try {
        const apiResult = await CallApiLogin(values)
        setLocalStorage(LOCALSTORAGE_USER, apiResult.data.content)
        props.dispatch(setStatusLogin(true))
        setTimeout(() => {
            message.success('Login Success !!')
        }, 100);
       history.push('/project/board')
    } catch (error) {
        message.error(`${error.response.data.message}`)
    }
}

const loginJiraWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        if(timeout !== null){
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            callApiLoginJira(values, props)
        }, 1000)
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required!').email('Email is invalid!'),
        password: Yup.string().required('Password is required!').min(6, 'Please enter password minimum 6 characters')
    }),
    displayName: 'Login Jira',
})(Login);

export default connect()(loginJiraWithFormik)