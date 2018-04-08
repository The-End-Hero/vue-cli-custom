import React, {Component} from 'react';
import Flex from './Flex'

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
        <div className="onetap">
          display:flex/inline-flex;<br/>
          设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效 <br/>
          水平的主轴（main axis）和垂直的交叉轴（cross axis） <br/>
          六个 <strong>容器(即display:flex;同级)</strong> 属性：<br/>
          1.flex-direction<br/>
          2.flex-wrap<br/>
          3.flex-flow<br/>
          4.justify-content<br/>
          5.align-items<br/>
          6.align-content<br/>
        </div>

        <div className="onetap">
          <button onClick={() => {
            this.setState({flexDirectionValue: 'row'})
          }}>flex-direction:row（默认值）主轴为水平方向，起点在左端。
          </button>
          <button onClick={() => {
            this.setState({flexDirectionValue: 'row-reverse'})
          }}>flex-direction:row-reverse 主轴为水平方向，起点在右端。
          </button>
          <button onClick={() => {
            this.setState({flexDirectionValue: 'column'})
          }}>flex-direction:column 主轴为垂直方向，起点在上沿。
          </button>
          <button onClick={() => {
            this.setState({flexDirectionValue: 'column-reverse'})
          }}>flex-direction:column-reverse 主轴为垂直方向，起点在下沿。
          </button>
          <Flex info="flex-direction 属性决定主轴的方向（即项目的排列方向）。row（默认值）：主轴为水平方向，起点在左端。"
                containerAttr={{flexDirection: flexDirectionValue}}></Flex>
        </div>


        <div className="onetap">
          <button onClick={() => {
            this.setState({flexWrapValue: 'nowrap'})
          }}>flex-wrap:row（默认值）主轴为水平方向，起点在左端。
          </button>
          <button onClick={() => {
            this.setState({flexWrapValue: 'wrap'})
          }}>flex-wrap:row-reverse 主轴为水平方向，起点在右端。
          </button>
          <button onClick={() => {
            this.setState({flexWrapValue: 'wrap-reverse'})
          }}>flex-wrap:column 主轴为垂直方向，起点在上沿。
          </button>
          <Flex propwidth='600px' info="flex-wrap 属性定义，如果一条轴线排不下，如何换行。 nowrap（默认值）：不换行。"
                containerAttr={{flexWrap: flexWrapValue}}></Flex>
        </div>


        flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

        <div className="onetap">
          <button onClick={() => {
            this.setState({justifyContentValue: 'flex-start'})
          }}>justify-content:flex-start（默认值）：左对齐
          </button>
          <button onClick={() => {
            this.setState({justifyContentValue: 'flex-end'})
          }}>justify-content:flex-end 右对齐
          </button>
          <button onClick={() => {
            this.setState({justifyContentValue: 'center'})
          }}>justify-content:center 居中
          </button>
          <button onClick={() => {
            this.setState({justifyContentValue: 'space-between'})
          }}>justify-content:space-between 两端对齐，项目之间的间隔都相等
          </button>
          <button onClick={() => {
            this.setState({justifyContentValue: 'space-around'})
          }}>justify-content:space-around 每个项目两侧的间隔相等，所以，项目之间的间隔比项目与边框的间隔大一倍。
          </button>
          <Flex info="justify-content属性定义了项目在主轴上的对齐方式。 flex-start（默认值）：左对齐。"
                containerAttr={{justifyContent: justifyContentValue}}></Flex>
        </div>



        <div className="onetap">
          <button onClick={() => {
            this.setState({alignItemsValue: 'flex-start'})
          }}>align-items:flex-start 交叉轴的起点对齐。
          </button>
          <button onClick={() => {
            this.setState({alignItemsValue: 'flex-end'})
          }}>align-items:flex-end 交叉轴的终点对齐。
          </button>
          <button onClick={() => {
            this.setState({alignItemsValue: 'center'})
          }}>align-items:center 交叉轴的中点对齐。
          </button>
          <button onClick={() => {
            this.setState({alignItemsValue: 'baseline'})
          }}>align-items:baseline 项目的第一行文字的基线对齐。
          </button>
          <button onClick={() => {
            this.setState({alignItemsValue: 'stretch'})
          }}>align-items:stretch （默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
          </button>
          <Flex info="align-items 属性定义项目在交叉轴上如何对齐。 stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。"
                containerAttr={{alignItems: alignItemsValue}}></Flex>
        </div>



        <div className="onetap">
          <button onClick={() => {
            this.setState({alignContentValue: 'flex-start'})
          }}>align-content:flex-start 与交叉轴的起点对齐。
          </button>
          <button onClick={() => {
            this.setState({alignContentValue: 'flex-end'})
          }}>align-content:flex-end 与交叉轴的终点对齐。
          </button>
          <button onClick={() => {
            this.setState({alignContentValue: 'center'})
          }}>align-content:center 与交叉轴的中点对齐。
          </button>
          <button onClick={() => {
            this.setState({alignContentValue: 'space-between'})
          }}>align-content:space-between 与交叉轴两端对齐，轴线之间的间隔平均分布。
          </button>
          <button onClick={() => {
            this.setState({alignContentValue: 'space-around'})
          }}>align-content:space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
          </button>
          <button onClick={() => {
            this.setState({alignContentValue: 'stretch'})
          }}>align-content:stretch (默认值）：轴线占满整个交叉轴。
          </button>
          <Flex propwidth='600px' info="align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用(需要设置flex-wrap: wrap)。 stretch (默认值）：轴线占满整个交叉轴。"
                containerAttr={{alignContent: alignContentValue,flexWrap: 'wrap',height:'400px'}}></Flex>
        </div>



        <div className="onetap">
          以下6个属性设置在<strong>项目</strong>上。<br/>

          <strong>1.order:&lt;integer&gt;; </strong>属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。<br/>
          <strong>2.flex-grow:&lt;number&gt;;</strong> 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。<br/>
          <strong>3.flex-shrink:&lt;number&gt;;</strong> 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。<br/>
          <strong>4.flex-basis:&lt;length&gt;||auto;</strong> 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。<br/>
          <strong>5.flex: none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ]</strong>属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。<br/>
          <strong>6.align-self :auto | flex-start | flex-end | center | baseline | stretch;</strong>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。<br/>
        </div>

      </div>
    );
  }
}
