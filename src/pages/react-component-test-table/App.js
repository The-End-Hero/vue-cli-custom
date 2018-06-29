import React, {Component} from 'react';
import Table from './table'

const tableTitle=[
  {
    title:'姓名',
    key:'name',

  }
]
const dataResource=[
  {
    name:'isok',

  },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={{backgroundColor:'red',height:'100%'}}>
        <div>343434</div>
        <div>
          <Table scroll={500}/>
        </div>
      </div>
    );
  }
}
