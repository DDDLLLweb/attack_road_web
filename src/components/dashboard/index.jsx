import React from 'react';
import { connect } from 'react-redux';
import { config,networkUtils, dataUtil } from '../../utils';
import { Menu, Icon, Button} from 'antd';
import {DO_GETMENU } from '../../redux/action/app';
import { Link } from 'react-router-dom'
const { request } = networkUtils;
const { api } = config;
const { basic } = api;
const { userMenu } = basic;

const SubMenu = Menu.SubMenu;
class SiderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData:[],
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
        console.log(menuData)
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
            console.log('item',item)
            return (
              <Menu.Item key={item.menuId}>
            {/* 路由跳转 */}
                <Link to={item.menuUri}>
                  {item.menuIco && <Icon type={item.menuIco} />}
                  {!inlineCollapsed && item.menuLabel}
                </Link>
              </Menu.Item>
            )
          }))
    }
    render() {
        const {inlineCollapsed} =this.props;
        const {menuData} = this.state;
        const menuItems = this.getMenus(menuData,inlineCollapsed);
        console.log(this.props.inlineCollapsed)
        return (
            <Menu theme="dark" inlineCollapsed={inlineCollapsed} defaultSelectedKeys={['1']} mode="inline">
                {menuItems}
            </Menu>
        )
    }
}

export default connect(({dispatch,app}) => ({ dispatch,app }))(SiderMenu);