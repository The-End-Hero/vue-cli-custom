import React, {Component} from 'react';
import './App.scss'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');
    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect (10, 10, 55, 50);
    //
    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    // ctx.fillRect (30, 30, 55, 50);


    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
  }
  render() {
    return (
      <div>
        123
        <canvas id="tutorial" width="150" height="150"></canvas>
      </div>
    );
  }
}
