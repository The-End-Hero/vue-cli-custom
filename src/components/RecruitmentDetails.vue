<template>
  <div class="details">
    <div class="details-title">
      <div class="title">高级JAVA工程师</div>
      <div class="req">
        <span><i class="icon iconfont"></i>上海</span>
        <span><i class="icon iconfont"></i>全职</span>
        <span><i class="icon iconfont"></i>经验3-5年</span>
        <span><i class="icon iconfont"></i>本科</span>
        <span><i class="icon iconfont"></i>社招</span>
      </div>
      <div class="welfare">
        <span>美女如云</span>
        <span>弹性工作时间</span>
        <span>五险一金</span>
      </div>
      <div class="time">2017-11-16  09:25发布</div>
      <div class="recommend">
        <span>推荐朋友</span>
        <span class="green-me">毛遂自荐</span>
      </div>
      <div class="collection">
        <span><i class="icon iconfont"></i>收藏</span>
        <span><i class="icon iconfont"></i>微信</span>
      </div>
    </div>
    <div class="details-text">
      <div class="text-title">职位亮点</div>
      <div class="text-content">发展空间大,领导好,交通方便,下午茶</div>
    </div>
    <div class="details-text">
      <div class="text-title">职位描述</div>
      <div class="text-content">
        <div class="text-content-title">岗位职责</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div class="text-content-title">岗位职责</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
        <div>1、游戏平台管理后台开发；</div>
      </div>
    </div>
    <div class="details-text">
      <div class="text-title">其他信息</div>
      <div class="text-content clearfix">
        <div class="text-list clearfix">
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
          <div>职位描述：智能化IT</div>
        </div>
      </div>
    </div>
    <div class="details-text">
      <div class="text-title">工作地址</div>
      <div class="text-content">深圳 - 福田区 - 中山北路2098号</div>
    </div>
    <div class="details-text">
      <div class="text-title">公司简介</div>
      <div class="text-content">红星美凯龙是中国经营面积最大、商场数目最多、地理覆盖面积最广的家居装饰及家具商场运营商。与此同时，红星美凯龙还致力于追求中国家居业的美学发展。公司于2012年首次在米兰国际家具展亮相，把中国家居设计和家居艺术带向国际舞台。公司还将艺术整合入业务中，在其商场设展，展示世界知名艺术家的作品，以激发客户对生活的艺术热情。</div>
    </div>
  </div>
</template>

<script>
//  import HeaderTop from './HeaderTop.vue'
//  import FooterButtom from './FooterButtom.vue'
  export default {
    name: 'UseLess',
//    components:{
//      HeaderTop,
//      FooterButtom
//    },
    beforeRouteUpdate (to, from, next) {
      // react to route changes...
      // don't forget to call next()
      console.log(this.$route.params.id)
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
  .details{
    width: 1200px;
    margin: 0 auto;
  }
.details-title{
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E4E4E4;
  position: relative;
}
.collection{
  position: absolute;
  right: 0;
  bottom: 20px;
  font-size: 0;
}
.collection span{
  font-size: 12px;
  color: #999999;
  /*padding-left: 30px;*/
  margin-left: 30px;
  cursor: pointer;
}
.collection i{
  font-size: 22px;
  padding-right: 7px;
}
.recommend{
  position: absolute;
  right: 0;
  top: 32px;
  font-size: 0;
}
  .recommend .green-me{
  background: #32BE78;
    margin-left: 10px;
}
.recommend span{
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  background: #0091EA;
  border-radius: 2px;
  font-size: 14px;
  color: #FFFFFF;
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
  .title{
    font-size: 22px;
    color: #444444;
    line-height: 22px;
    height: 22px;
  }
  .req span{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #0091EA;
    line-height: 17px;
    height: 17px;
    margin-top: 20px;
    margin-bottom: 15px;
    /*padding-left: 20px;*/
    margin-right: 20px;
  }
  .req i{
    padding-right: 5px;
  }
  .welfare,.req{
    font-size: 0;
  }
  .welfare span{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    height: 22px;
    line-height: 20px;
    border: 1px solid #E4E4E4;
    border-radius: 16px;
    font-size: 12px;
    color: #666666;
    padding: 0 10px;
    margin-right: 10px;
  }
  .time{
    font-size: 14px;
    color: #999999;
    line-height: 17px;
    height: 17px;
    margin-top: 15px;
  }
  .details-text{
    margin-top: 30px;
  }
  .text-title{
    font-size: 16px;
    color: #444444;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .text-content{
    margin-bottom: 30px;
    font-size: 14px;
    color: #666666;
    line-height: 24px;
  }
  .text-content-title{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .text-list{
    width: 520px;
  }
  .text-list div{
    float: left;
    width: 260px;
  }
</style>
