import React, { Component } from 'react';
import './index.css';
import C from '../1_setState';

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        {/* render props */}
        {/* <A render={name => <C name={name} />} /> */}
        {/* <A render={name => <B name={name} />} /> */}
        {/* children props */}
        <A>{name => <C name={name} />}</A>
        <A>{name => <B name={name} />}</A>
      </div>
    );
  }
}

class A extends Component {
  state = { name: 'tom' };
  render() {
    console.log('render A:',this.props);
    const { name } = this.state;
    return (
      <div className='a'>
        <h3>我是A组件 - {Math.floor(Math.random() * 1000000000)}</h3>
        <hr />
        {/* render props 预留位置 */}
        {/* {this.props.render(name)} */}
        {/* children props 预留位置 */}
        {this.props.children(name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log('B--render');
    return (
      <div className='b'>
        <h3>我是B组件,{this.props.name || '空'}</h3>
      </div>
    );
  }
}
