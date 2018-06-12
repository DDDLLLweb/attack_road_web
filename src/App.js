import React,{ Component } from 'react';
import { Layout } from 'antd';
import { queryXsrf,API_LOGINOUT } from './redux/action/app';
import { connect } from 'react-redux';
import Routes from './routes';
import './App.less';
import { Button } from 'antd/lib/radio';

const { Content, Footer } = Layout;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
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
    render() {
        return (
            <Layout>
                <Layout>
                  <Button onClick={() => this.loginOut()}>登出</Button>
                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        <Routes />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    React-Admin ©2018 Created by 1090403796@qq.com
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
