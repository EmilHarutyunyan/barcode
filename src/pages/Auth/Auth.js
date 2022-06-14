import React, { useEffect } from 'react';
import './Auth.css';
import { Form, Input, Button } from 'antd';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, selectUser} from "../../redux/features/user/UserSlice";

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(selectUser)
    const onFinish = async (values) => {
       dispatch(loginUser(values));
       
    };

    useEffect(()=>{
        if(user.user.loginUser) {
            navigate('/dashboard')
        }
    },[user.user.loginUser])
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='block'>
            <h2>Log In</h2>
            <p style={{color:"red"}}>{user?.user?.msg}</p>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='form'
            >
                <Form.Item
                    name="email"
                    className='input'
                
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input  placeholder='Email' type='email' />
                </Form.Item>

                <Form.Item
                    name="password"
                    className='input'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password  placeholder='Password'/>
                </Form.Item>

                {/*<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>*/}
                {/*    <Checkbox>Remember me</Checkbox>*/}
                {/*</Form.Item>*/}

                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button type="primary" className="button_sub" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Auth;