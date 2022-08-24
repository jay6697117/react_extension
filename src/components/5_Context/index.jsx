import React, { Component } from 'react';
import './index.css';

//创建Context对象
const MyContext = React.createContext();
// const { Provider } = MyContext;
const { Provider, Consumer } = MyContext;

export default class A extends Component {
  state = { username: 'tom', age: 18 };
  render() {
    const { username, age } = this.state;
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是:{username}</h4>
        <hr />
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  //声明接收context
  static contextType = MyContext;
  render() {
    const { username, age } = this.context;
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <h4>
          B:我从A组件接收到的用户名:{username},年龄是{age}
          <hr />
        </h4>
        <C />
        <hr />
        <D />
      </div>
    );
  }
}

class C extends Component {
  //声明接收context
  static contextType = MyContext;
  render() {
    console.log('this :', this);
    const { username, age } = this.context;
    return (
      <div className='grand1'>
        <h3>我是C组件</h3>
        <h4>
          C0:我从A组件接收到的用户名:{username},年龄是{age}
          <hr />
          C1:我从A组件接收到的用户名:
          <Consumer>{value => `${value.username},年龄是${value.age}`}</Consumer>
          <hr />
        </h4>
      </div>
    );
  }
}

function D() {
  return (
    <div className='grand2'>
      <h3>我是D组件</h3>
      <h4>
        D0:我从A组件接收到的用户名:
        <Consumer>{value => `${value.username},年龄是${value.age}`}</Consumer>
        <hr />
        D1:我从A组件接收到的用户名:
        <Consumer>
          {value => {
            console.log(value);
            return JSON.stringify(value);
          }}
        </Consumer>
        <hr />
      </h4>
    </div>
  );
}
