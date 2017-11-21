<template>
  <div>
    <div class="header">
      <div class="header-contant">
        <div>微信版</div>
        <div>
          <span class="Sign-in">登录</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span class="register">注册</span></div>
        <div>欢迎来到红星美凯龙招聘！</div>
      </div>
    </div>
    <div class="header-logo">
      <div class="header-logo-contant">
        <img class="header-logo-logo" src="http://www.chinaredstar.com/images/logo.jpg" alt="红星美凯龙">
        <div class="header-logo-title">红星美凯龙招聘</div>
      </div>
    </div>
    <div class="header-banner">
      <div class="header-banner-list">
        <li ref="homepage">首页</li>
        <li>社会招聘</li>
        <li>校园招聘</li>
        <li>实习生招聘</li>
        <li ref="usercenter">个人中心</li>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted:function () {
      if(window.location.href.indexOf('UserCenter')>-1){
//        alert(123)
        this.$refs.usercenter.style.backgroundColor='#0091EA'
      }else if(window.location.href.indexOf('HomePage')>-1){
        this.$refs.homepage.style.backgroundColor='#0091EA'
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    height: 40px;
    background: #F5F5F5;
    border-bottom: 1px solid #E4E4E4;
    min-width: 1200px;
  }
  .header-contant{
    margin: 0 auto;
    width: 1200px;
    height: 20px;
    padding-top: 10px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
  }
  .header-contant >div{
    float: right;
    margin-left: 30px;
  }
  .header-logo{
    height: 100px;
  }
  .header-logo-contant{
    margin: 0 auto;
    width: 1200px;
    height: 100px;
  }
  .header-logo-title{
    font-family: PingFangSC-Medium;
    font-weight: bold;
    font-size: 22px;
    color: #262626;
    line-height: 30px;
    float: left;
    margin: 35px 28px;
  }
  .header-logo-logo{
    float: left;
    display: block;
    width: 170px;
    height: 52px;
    margin: 24px 0;
  }
  .header-banner{
    height: 50px;
    background: #223857;
    color: #fff;
    font-size: 16px;
    min-width: 1200px;
    /*line-height: 50px;*/
  }
  .header-banner-list{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
  }
  .header-banner-list>li:hover{
    background: #0091EA;
    user-select: none;
  }
  .header-banner-list > li{
    float: left;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    padding: 14px 40px;
    transition: background 0.2s;
  }
  .Sign-in{
    color: #0091EA;
    cursor: pointer;
  }
  .register{
    cursor: pointer;
  }


</style>
