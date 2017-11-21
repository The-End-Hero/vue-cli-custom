<template>
  <div>
    <div class="signin-blue">
      <div class="signin-blue-content">
        <img src="../pages/index/assets/logo_bai.png" alt="红星美凯龙">
        <div class="signin-sur"></div>
      </div>
    </div>
    <div class="signin-white"></div>
    <footer-buttom></footer-buttom>
  </div>
</template>

<script>
  import FooterButtom from './FooterButtom.vue'
  export default {
    name: 'UseLess',
    components:{
      FooterButtom
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scss">
.signin-blue{
  min-width: 1200px;
  min-height: 310px;
  height: 48vh;
  background: url("../pages/index/assets/zhuce_beijing.png");
  background-repeat: repeat-x;
  background-size: auto 100% ;
  position: relative;
}
.signin-blue-content{
  width: 680px;
  position: absolute;
  left: 50%;
  margin-left: -340px;
  top:0;
}
.signin-blue-content>img{
  display: block;
  margin-top: 13vh;
}
  .signin-white{
    min-width: 1200px;
    min-height: 264px;
    height: 40vh;
    background: #fff;
  }
  .signin-sur{
    width: 680px;
    height: 400px;
    margin-top: 5vh;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    box-shadow: 0 1px 2px 0 #E4E4E4;
    border-radius: 2px;
  }
</style>
