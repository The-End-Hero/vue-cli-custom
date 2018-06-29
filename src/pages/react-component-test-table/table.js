import React, {Component} from 'react';
import './table.scss'

//const dataSource = [
const dataSource = [];
for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  width: 70
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width: 50
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {scroll} = this.props
    return (
      <div className="test-div">
        <div>
          <table className="test-table">
            <tbody>
            <tr>
              {
                columns.map((current) => {
                  return <td key={current.key} style={{width: current.width}}>{current.title}</td>
                })
              }
            </tr>
            </tbody>
          </table>
        </div>
        <div style={{height:scroll,overflowY:'scroll'}}>
          <table className="test-table">
            <tbody>
            {
              dataSource.map((cur) => {
                return (
                  <tr key={cur.key}>
                    {
                      columns.map((current) => {
                        return <td key={current.key}style={{width: current.width}}>{cur[current.dataIndex]}</td>
                      })
                    }
                  </tr>)
              })
            }
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}
Table.defaultProps={
  scroll:100
}
