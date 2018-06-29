import React, {Component} from 'react';
import SnackBar from './components/SnackBar'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testSnackBar(type='success'){
    SnackBar.info(type, '测试SnackBar!')
  }

  render() {
    const {} = this.state
    return (
      <div>
        <button onClick={this.testSnackBar.bind(this,'success')}>测试SnackBar!</button>
        <button onClick={this.testSnackBar.bind(this,'warning')}>测试SnackBar!</button>
        <button onClick={this.testSnackBar.bind(this,'info')}>测试SnackBar!</button>
        <button onClick={this.testSnackBar.bind(this,'error')}>测试SnackBar!</button>
      </div>
    );
  }
}
