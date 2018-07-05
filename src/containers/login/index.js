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

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    //    this.props.form.validateFields();
    const {app} = this.props;
    console.log('loginform--->',app)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                networkUtils.csrf().then(() => {
                    dispatch({
                        type: DO_LOGIN,
                        payload: values
                    })
                });
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
        <Form onSubmit={this.handleSubmit} className="loginForm">
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
    )
  }
}
export default connect(({ dispatch,app}) => ({ dispatch,app }))(Form.create()(LoginForm));