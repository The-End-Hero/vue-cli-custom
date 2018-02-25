import React, {Component} from 'react';
import Center from './Center'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 0,
      flexDirectionValue: 'row',
      flexWrapValue: 'nowrap',
      justifyContentValue: 'flex-start',
      alignItemsValue: 'stretch',
      alignContentValue: 'stretch'
    };
  }

  render() {
    console.log(this.state.list, 'list');
    const {flexDirectionValue, flexWrapValue, justifyContentValue, alignItemsValue, alignContentValue} = this.state
    return (
      <div>
        <h1>居中布局</h1>

        <h3>1.水平居中 margin:0 auto</h3>
        <Center showinAttr={{margin: '0 auto'}}></Center>
        <h3>2.水平居中 text-align：center</h3>
        <Center showoutAttr={{textAlign: 'center', display: 'inline-block'}}
                showinAttr={{display: 'inline-block'}}></Center>

        <h3>3.水平垂直居中（一）定位和需要定位的元素的margin减去宽高的一半</h3>
        <Center showoutAttr={{position: 'relative'}}
                showinAttr={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-50px',
                  marginLeft: '-50px'
                }}></Center>


        <h3>4.水平垂直居中（二）定位和margin:auto</h3>
        <Center showoutAttr={{position: 'relative'}}
                showinAttr={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  margin: 'auto',
                }}></Center>

        <h3>5.水平垂直居中（三）绝对定位和transfrom(不需要知道居中元素的宽高)</h3>
        <Center showoutAttr={{position: 'relative'}}
                showinAttr={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate3d(-50%,-50%,0)'
                }}></Center>

        <h3>6.水平垂直居中（四）diplay：table-cell</h3>
        <Center showoutAttr={{
          display: 'table',
        }}
                showinAttr={{
                  display: 'table-cell',
                  verticalAlign: 'middle',
                  textAlign: 'center'
                }}
                inner={<div
                  style={{backgroundColor: '#fff', display: 'inline-block', wordBreak: 'break-word', width: '70px'}}>I'm
                  innerDiv(inline-block)</div>}></Center>

        <h3>7.水平垂直居中（五）flexBox居中</h3>
        <Center showoutAttr={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
                showinAttr={{}}></Center>
      </div>
    );
  }
}
