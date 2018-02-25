import React, {Component} from 'react';
import './Center.scss'

export default class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showinAttrArr: [],
      showoutAttrArr: []
    };
    this.changeAttr()
  }

  changeAttr() {
    const {showinAttr, showoutAttr} = this.props
    for (let key in showinAttr) {
      this.state.showinAttrArr.push(`${key}: ${showinAttr[key]};`)
    }
    for (let key in showoutAttr) {
      this.state.showoutAttrArr.push(`${key}: ${showoutAttr[key]};`)
    }
  }

  componentDidMount() {
    // this.changeAttr()
  }

  render() {
    const {showinAttr, showoutAttr, inner} = this.props
    const {showinAttrArr, showoutAttrArr} = this.state
    console.log(this.state, 'this,state')
    console.log(this.props, 'this,props')
    return (
      <div className="show">
        <div className="showdetail">
          外层:<br/>
          {/*{JSON.stringify(showoutAttr)}<br/>*/}
          {showoutAttrArr.map((current, index) => {
            return <div key={index}>{current}</div>
          })}<br/>
          内层:<br/>
          {/*{JSON.stringify(showinAttr)}*/}
          {showinAttrArr.map((current, index) => {
            return <div key={index}>{current}</div>
          })}
        </div>
        <div className="showout" style={Object.assign({}, showoutAttr)}>
          <div className="nostd">
            {JSON.stringify(showoutAttr)}
          </div>
          <div className="showin" style={Object.assign({}, showinAttr)}>
            {inner}
            <div className="nostd">
              {JSON.stringify(showinAttr)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
