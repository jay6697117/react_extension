import React, { Component } from 'react';
import './index.css';

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    //1.对象式的setState
    // //获取原来的count值
    // const { count } = this.state;
    // //更新状态
    // this.setState({ count: count + 1 }, () => {
    //   console.log('this.state.count 0:', this.state.count);
    // });
    // console.log('14行的输出', this.state.count); //0

    //2.函数式的setState
    this.setState(
      (state, props) => {
        console.log('state :', state);
        console.log('props:', props);
        return { count: state.count + 1 };
      },
      () => {
        console.log('this.state.count 1:', this.state.count);
      }
    );
  };

  render() {
    const { count } = this.state;
    return (
      <div className='demo'>
        <h1>当前求和为：{count}</h1>
        <p>{JSON.stringify(this.props)}</p>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
