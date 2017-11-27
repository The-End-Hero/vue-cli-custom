<template>
  <div class="clearfix">
    <div class="paging">
      <span class="total-text">{{stateinfo.totaltext}}</span>
      <!--极限情况-->
      <!--<div class="pagenum">-->
        <!--<span class="icon iconfont"></span>-->
        <!--<span class="first">1</span>-->
        <!--<span class="first">1</span>-->
        <!--<span class="first">1</span>-->
        <!--<span class="first">1</span>-->
        <!--<span class="first">1</span>-->
        <!--<p>...</p>-->
        <!--<span class="second" >2</span>-->
        <!--<span class="chosenone second">3</span>-->
        <!--<span class="second" >4</span>-->
        <!--<span class="second" >5</span>-->
        <!--<span class="second" >6</span>-->
        <!--<p>...</p>-->
        <!--<span class="third">100</span>-->
        <!--<span class="third">100</span>-->
        <!--<span class="third">100</span>-->
        <!--<span class="third">100</span>-->
        <!--<span class="icon iconfont"></span>-->
      <!--</div>-->

      <!--少于10页-->
      <div class="pagenum">
        <span class="icon iconfont"></span>
        <span class="noellipsis">1</span>
        <span class="noellipsis">1</span>
        <span class="noellipsis">1</span>
        <span class="noellipsis">1</span>
        <span class="noellipsis">1</span>
        <span class="icon iconfont"></span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props:['info'],
    mounted(){
      console.log(this.stateinfo)
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        stateinfo:this.info,

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .paging {
    height: 36px;
    /*background: #666;*/
    color: #999999;
    margin-top: 30px;
    font-size: 0;
    float: right;
  }

  .paging span {
    display: inline-block;
    vertical-align: top;
    line-height: 36px;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
    cursor: default;
  }

  .pagenum {
    display: inline-block;
    vertical-align: top;
    line-height: 36px;
    font-size: 0px;
    /*border: 1px solid #E4E4E4;*/
    border-radius: 4px;
  }

  .pagenum p{
    display: inline-block;
    vertical-align: top;
    line-height: 36px;
    font-size: 14px;
    width: 36px;
    text-align: center;
  }
  .pagenum span {
    display: inline-block;
    vertical-align: top;
    line-height: 36px;
    color: #666666;
    min-width: 36px;
    font-size: 14px;
    border: 1px solid #E4E4E4;
    border-left: 0;
    cursor: pointer;

  }

  .pagenum .noellipsis{
    border-right: 0;
    box-shadow: 1px 0px 0px 0px #E4E4E4;
  }
  .pagenum span:nth-last-of-type(1) {
    box-shadow: 0px 0px 0px 0px #E4E4E4;
  }
  .second{
    box-shadow: -1px 0px 0px 0px #E4E4E4;
  }
  .pagenum .third{
    border-right: 0;
    border-left: 1px solid #E4E4E4;
  }
  .pagenum .icon {
    width: 50px;
    color: #999999;
    border: 1px solid #E4E4E4;
    border-radius: 4px 0px 0px 4px ;
  }

  .pagenum .icon:nth-last-of-type(1) {
    transform: rotate(180deg);

  }

  .pagenum .chosenone {
    background: #0091EA;
    color: #fff;
    border-top: 1px solid #0091EA;
    border-bottom: 1px solid #0091EA;
    /*box-shadow: 0px 1px 0px 0px #0091EA,0px -1px 0px 0px #0091EA;*/
  }

  .total-text{
    margin-right: 8px;
  }

</style>
