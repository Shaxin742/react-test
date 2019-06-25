import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.css'
import Test from '../test'
import Table from '../table'
import { Link, withRouter, Route, Switch } from 'react-router-dom'
import router from '../../routers/index.js'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
class Menus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: []
    }
  }
  componentDidMount() {
    console.log(JSON.stringify(router))
    console.log(router[2])
  }
  renderMenuItem = ({ path, icon, title, }) => {
    return (
      <Menu.Item key={path} style={{ width: '100%' }}>
        <Link to={path}>
          {icon && <Icon type='user' />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenu = ({ path, icon, title, routers }) => {
    return (
      <SubMenu key={path} title={<span>{icon && <Icon type={icon} />}<span>{title}</span></span>}>
        {
          routers && routers.map(item => {
            return item.routers && item.routers.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </SubMenu>
    )
  }
  render() {
    return (
      <Menu theme="dark" mode="inline">
        {/* {router[0].map((item, index) => {
          return <Menu.Item key={index}>
            <Icon type="user" />
            <span>{item.path}</span>
          </Menu.Item>
          // {item.path}{index}
        })} */}
        {
          router && router[2].routers.map(item => {
            return item.routers && item.routers.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
        {/* {router.map(v=>{
          if(v&&v.router&&v.router.length>0){
            v.routers.map(item => {
              return item.routers && item.routers.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
            })
          }
        })} */}
        <Menu.Item>
          <Icon type="user" />
          <span>12313</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ height: '100vh' }}>
          <div className="logo" />
          <Menus />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {/* {router[2].routers.map(route => {
              return <Route
                exact
                key={route.key}
                path={route.path}
                component={route.component}
              />
            })} */}
            <Route path="/test" component={Test}/>
            <Route path="/table" component={Table}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
