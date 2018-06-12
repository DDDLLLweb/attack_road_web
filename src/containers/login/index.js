/**
 * Created by hao.cheng on 2017/4/14.
 */
import React from 'react';
import { DO_LOGIN } from '../../redux/action/app' ;
import { networkUtils } from '../../utils';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import './index.less';

const FormItem = Form.Item;

const LoginForm = ({ dispatch, form: {
    getFieldDecorator,
    validateFieldsAndScroll,
    getFieldsValue,
} }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = getFieldsValue();
        validateFieldsAndScroll((err, data)=>{
            if(!err) {
                networkUtils.csrf().then(() => {
                    dispatch({
                        type: DO_LOGIN,
                        payload: data
                    })
                 });
            }
        })
            
    };
    return (
        <Form onSubmit={handleSubmit} className="loginForm">
            <FormItem>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                })(
                    <Input prefix={<Icon type="user" />} placeholder="用户名" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('rememberMe', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住我</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                    </Button>
            </FormItem>
        </Form>
    );
}

export default connect(({ dispatch }) => ({ dispatch }))(Form.create()(LoginForm));