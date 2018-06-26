import React,{ Component } from 'react';
import { Layout,Breadcrumb,Button} from 'antd';
import { queryXsrf,API_LOGINOUT } from './redux/action/app';
import { connect } from 'react-redux';
import './App.less';
import {Dashboard} from './components/'
const { Content, Footer ,Header,Sider} = Layout;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    componentWillMount () {
        const { dispatch } = this.props;
        queryXsrf(dispatch);
    }

    componentDidMount () {
       
    }

    loginOut = () => {
        const { dispatch } = this.props;
        dispatch({
            type: API_LOGINOUT,
        })
    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    render() {
        
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                >
                <div className="logo" />
                <Dashboard inlineCollapsed={this.state.collapsed} />
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Button onClick={() => this.loginOut()}>登出</Button>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
                </Layout>
            </Layout>
        );
    }
}
// 负责输入逻辑 即将state 映射到UI组件的参数（props）
// const mapStateToProps = state => {
//     // return {auth, responsive};
// };
// 负责输出逻辑 即将用户对UI组件的操作映射成Action 从UI组件传出去
// Redux中的bindActionCreators，是通过dispatch将action包裹起来，这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）
// const mapDispatchToProps = dispatch => 
//     bindActionCreators({
//       queryXsrf,
//       changePage: () => push('/login')
//     },
//     dispatch
//   );

export default connect()(App);
