import React, {Component} from 'react';
import Center from './Center'
import './App.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var marked = require('marked');
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    document.getElementById('md').innerHTML = marked(`animation 属性是一个简写属性，用于设置六个动画属性：
- animation-name(规定需要绑定到选择器的 keyframe 名称)
- animation-duration(规定完成动画所花费的时间，以秒或毫秒计)
- animation-timing-function(规定动画的速度曲线)
  - cubic-bezier(*n*,*n*,*n*,*n*)
  - ease-in-out（动画以低速开始和结）
  - ease-out（动画以低速结束）
  - ease-in（动画以低速开始）
  - ease （默认。动画以低速开始，然后加快，在结束前变慢）
  - linear（动画从头到尾的速度是相同的）
- animation-delay(规定在动画开始之前的延迟)
- animation-iteration-count (规定动画应该播放的次数)
- animation-direction(规定是否应该轮流反向播放动画)
注释：请始终规定 animation-duration 属性，否则时长为 0，就不会播放动画了。`)
  }

  render() {
    return (
      <div>
        <div id="md"></div>
        <div className="view_port">
          <div className="polling_message">
            Listening for dispatches
          </div>
          <div className="cylon_eye"></div>
        </div>


        <div className="linear"></div>
        <div className="custom"></div>
      </div>
    );
  }
}
