import React,{Component} from "react";
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;
const x = 3;
const y = 2;
const z = 1;
const gData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '大结局呢',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '世界第三大', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];


// const generateData = (_level, _preKey, _tns) => {
//   const preKey = _preKey || '0';
//   const tns = _tns || gData;
//
//   const children = [];
//   for (let i = 0; i < x; i++) {
//     const key = `${preKey}-${i}`;
//     tns.push({ title: key, key });
//     if (i < y) {
//       children.push(key);
//     }
//   }
//   if (_level < 0) {
//     return tns;
//   }
//   const level = _level - 1;
//   children.forEach((key, index) => {
//     tns[index].children = [];
//     return generateData(level, key, tns[index].children);
//   });
// };
// generateData(z);
// console.log(gData,'gData')

export default class Array extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gData,
      expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
    };
  }
  onDragEnter = (info) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }
  onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    }
    this.setState({
      gData: data,
    },()=>{console.log(data)});
  }
  onRightClick=({event, node})=>{
    console.log({event, node},'{event, node}')
  }
  render(){
    const {gData} = this.state
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.title}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.title} />;
    });
    console.log(gData,'gData')
    return (
      <div>
        <Tree
          showLine
          onRightClick={this.onRightClick}
          className="draggable-tree"
          defaultExpandedKeys={this.state.expandedKeys}
          draggable
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
        >
          {loop(gData)}
        </Tree>
      </div>
    )
  }
}
