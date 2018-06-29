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
        <button onClick={this.testSnackBar('success')}>测试SnackBar!</button>
        <button onClick={this.testSnackBar('warning')}>测试SnackBar!</button>
        <button onClick={this.testSnackBar('info')}>测试SnackBar!</button>
        <button onClick={this.testSnackBar('error')}>测试SnackBar!</button>
      </div>
    );
  }
}
