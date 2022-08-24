import React, { PureComponent } from 'react';
import './index.css';

export default class Parent extends PureComponent {
  state = { carName: '奔驰c36', stus: ['小张', '小李', '小王'] };

  addStu = () => {
    // const {stus} = this.state
    // // stus.unshift('小刘')
    // stus.push('小刘')
    // console.log('stus', stus)
    // this.setState({stus})

    const { stus } = this.state;
    const newStus = [...stus, '小刘'];
    // this.setState({ stus: ['小刘', ...stus] });
    // this.setState({ stus: [...stus, '小刘'] });
    this.setState({ stus: newStus });
  };

  changeCar = () => {
    //this.setState({carName:'迈巴赫'})

    // const obj = this.state;
    // const obj = JSON.parse(JSON.stringify(this.state));
    const newObj = { ...this.state };
    // const obj = {};
    newObj.carName = '迈巴赫';
    console.log('newObj 0:', newObj);
    console.log('this.state 1:', this.state);

    console.log('newObj === this.state 3:',newObj === this.state);
    this.setState(newObj);
  };

  /* shouldComponentUpdate(nextProps,nextState){
		// console.log(this.props,this.state); //目前的props和state
		// console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.state.carName === nextState.carName
	} */

  render() {
    console.log('Parent---render');
    const { carName } = this.state;
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        {this.state.stus}&nbsp;
        <span>我的车名字是：{carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>添加一个小刘</button>
        <Child carName='奥拓' />
      </div>
    );
  }
}

class Child extends PureComponent {
  /* shouldComponentUpdate(nextProps,nextState){
		console.log(this.props,this.state); //目前的props和state
		console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.props.carName === nextProps.carName
	} */

  render() {
    console.log('Child---render');
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        <span>我接到的车是：{this.props.carName}</span>
      </div>
    );
  }
}
