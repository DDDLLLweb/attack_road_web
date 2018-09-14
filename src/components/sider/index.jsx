import React from 'react';
import { connect } from 'react-redux';
import { config,networkUtils, dataUtil } from '../../utils';
import { Menu, Icon} from 'antd';
import { push } from 'react-router-redux'
import {withRouter,Link} from "react-router-dom";

const { api } = config;
const { basic } = api;
const { userMenu } = basic;

const SubMenu = Menu.SubMenu;
class SiderMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuData:[],
            current:'',
        }
    }
    componentDidMount = () => {
        networkUtils.request({
            url: userMenu,
            method: 'get',
          }).then((data) => {
            if (data.success) {
                dataUtil.arrayToTree(data.data)
                let menuTree = dataUtil.arrayToTree(data.data.filter(_ => _.menuType !== 'C'), 'menuId', 'upperId')
                this.setState({
                    menuData: menuTree
                });
            } else {
              throw data.message
            }
        });
    }
     // 递归生成菜单
    getMenus = (menuData,inlineCollapsed) =>{
        return menuData.map(((item) => {
            if (item.children) {
              return (
                <SubMenu
                  key={item.menuId}
                  title={<span>
                    {item.menuIco && <Icon type={item.menuIco} />}
                    {!inlineCollapsed && item.menuLabel}
                  </span>}
                >
                  {this.getMenus(item.children)}
                </SubMenu>
              )
            }
            // console.log('item',item)
            return (
                <Menu.Item key={item.menuId}>
                <Link to={`/app${item.menuUri}`}>
                    {/* 路由跳转 */}
                    {item.menuIco && <Icon type={item.menuIco} />}
                    {!inlineCollapsed && item.menuLabel}
                </Link>
              </Menu.Item>
            )
          }))
    }

    handleClick = (e) => {
        const {history} = this.props;
        // history.push(e.key);
    }

    render() {
        const {inlineCollapsed} =this.props;
        const {menuData} = this.state;
        const menuItems = this.getMenus(menuData,inlineCollapsed);
        return (
            <Menu theme="dark" inlineCollapsed={inlineCollapsed} defaultSelectedKeys={['E00']} mode="inline">
                {menuItems}
            </Menu>
        )
    }
}

export default withRouter(connect(({dispatch,app}) => ({ dispatch,app }))(SiderMenu));