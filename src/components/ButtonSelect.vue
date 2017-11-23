<template>
  <button v-on:click="showbuttondetail" :class="from.from==='homepage'?'homepagebtn':''">{{from.list[0].msg}}
    <i class="icon iconfont"></i>
    <div class="button-list" ref="buttonList">
      <div v-for="site in from.list" v-on:click="checked">{{site.msg}}</div>
      <!--<div>校园招聘</div>-->
      <!--<div>实习生招聘</div>-->
    </div>
  </button>
</template>

<script>
  export default {
    props: ['from'],
    name: 'Header',
    methods: {
      showbuttondetail:function () {
        this.$refs.buttonList.style.display='block'
      },
      checked:function () {
        console.log(this.msg)
        console.log(this.msg)
        console.log(from)
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button{
    display: inline-block;
    vertical-align: top;
    width: 278px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-top: 20px;
    background-color: #fff;
    position: relative;
  }
  .homepagebtn{
    width: 113px;
    border-radius:  4px 0 0 4px;
    margin-top:0;
    text-align: left;
    padding-left: 15px;
  }
  .homepagebtn i{
    background: #fff;
    border: none;
    border-radius: 0 ;
    font-size: 10px;
    height: 40px;
    line-height: 40px;
    box-shadow: 1px 0px 0px 0px #E4E4E4;
  }
  button i{
    position: absolute;
    color: #444444;
    height: 36px;
    width: 36px;
    line-height: 36px;
    top: -1px;
    right: -1px;
    background: #F5F5F5;
    border: 1px solid #E4E4E4;
    border-radius: 0 4px 4px 0;
    box-sizing: border-box;
  }
  .button-list{
    border: 1px solid #E4E4E4;
    width: 100%;
    box-shadow: 0 1px 2px 0 #E4E4E4;
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 35px;
    background-color: #fff;
    z-index: 9999;
    display: none;
  }
  .button-list div{
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    color: #666666;
    box-shadow: 0px -1px 0px 0px #E4E4E4;
  }
  .button-list div:hover{
    background: #0091EA;
    color: #fff;
  }
</style>
