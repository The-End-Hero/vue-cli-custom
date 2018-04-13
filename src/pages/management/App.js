import React, {Component} from 'react';
import './App.scss'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

import {HashRouter, Link,Switch,Route} from 'react-router-dom'
// 按路由拆分代码
import Loadable from 'react-loadable';
const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};
const AsyncHome =  Loadable({
  loader: () => import('./AsyncHome'),
  loading: MyLoadingComponent
})
const AsyncNotFound = ()=>{
  return <div>404</div>
}
const Array = Loadable({
  loader: () => import('./Array'),
  loading: MyLoadingComponent
})
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      url: []
    };
  }

  componentDidMount() {
    this.hashChange()
    window.onhashchange = () => this.hashChange()
  }

  hashChange = () => {
    const url = window.location.hash.replace(/#/, '').split('/')
    if (url[1]) {
      this.setState({url: url.slice(1)})
    }
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }
  jumpTo = (e) => {
    console.log(e)
    location.hash = e.key
  }

  render() {
    const {url} = this.state
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">123</div>
          <Menu theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
                onClick={this.jumpTo}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart"/>
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop"/>
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="apple"/><span>JavaScript</span></span>}
            >
              <Menu.Item key="#/javascript/array">数组</Menu.Item>
              <Menu.Item key="#/javascript/object">对象</Menu.Item>
              <Menu.Item key="#/javascript/function">函数</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team"/><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file"/>
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}/>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              {
                url.map((current, index) => {
                  return <Breadcrumb.Item key={index}>{current}</Breadcrumb.Item>
                })
              }
            </Breadcrumb>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
              {/*Bill is a cat.*/}
              <Switch>
                <Route path="/" exact component={AsyncHome} />
                <Route path="/javascript/array" component={Array} />
                {/*<Route path="/search/:category/:keywords?" component={AsyncSearch} />*/}
                {/*<Route path="/detail/:id" component={AsyncDetail} />*/}
                {/*<Route path="/user" component={AsyncUser} />*/}
                {/*<Route path="/empty" component={null} key="empty" />*/}
                <Route component={AsyncNotFound} />
              </Switch>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
