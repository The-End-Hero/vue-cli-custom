import React, {Component} from 'react';
import './Flex.scss'

export default class Flex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [0, 1, 2, 3,4,5,6],
      info: this.props.info,
    };
  }

  render() {
    console.log(this.state.list, 'list');
    console.log(this.state.info, 'info');
    const {info, list} = this.state
    const {itemAttr, containerAttr,propwidth} = this.props
    console.log(itemAttr, 'itemAttr')
    const arr = Object.assign(itemAttr || {}, {height: Math.random() * 200 + 50})
    return (
      <div className="one-block" style={{width:propwidth}}>
        <div className="info">{info}</div>
        <div className="flex-div" style={Object.assign({minHeight: Math.random() * 0 + 150}, containerAttr)}>
          {list.map((item, index) => {
            return <div key={index}
                        style={Object.assign(itemAttr || {}, {height: Math.random() * 50 + 50})}>{item}</div>
          })}
        </div>
      </div>
    );
  }
}
