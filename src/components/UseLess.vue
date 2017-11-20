<template>
  <div>
    <div class="header">
      <div class="header-contant">
        <div>微信版</div>
        <div>登陆 | 注册</div>
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
        <li>首页</li>
        <li>社会招聘</li>
        <li>校园招聘</li>
        <li>实习生招聘</li>
        <li>个人中心</li>
      </div>
    </div>

    <!--个人中心-->
    <div class="recruit">
      <div class="recruit-content clearfix">
        <div class="recruit-content-left-banner">
          <li>我的简历</li>
          <li>我推荐的</li>
          <li>我申请的</li>
          <li>我收藏的</li>
        </div>
        <!--个人中心-我的简历(无简历)-->
        <!--<div class="recruit-content-right-noresume">-->
          <!--<div class="recruit-content-right-noresume-content">-->
            <!--<div class="recruit-content-right-noresume-logo"></div>-->
            <!--<div class="recruit-content-right-noresume-words">亲，你还没有简历信息</div>-->
            <!--<div class="recruit-content-right-noresume-button">创建简历</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--个人中心-我的简历-->
        <!--<div class="my-resume">-->
          <!--<div class="my-resume-title">简历预览</div>-->
          <!--<div class="my-resume-content clearfix">-->
            <!--<div class="my-resume-content-title twoline">基础信息</div>-->
            <!--<div class="my-resume-content-content">-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">姓名</span>-->
                <!--<span class="my-resume-content-content-detail-two">李晓星</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">性别</span>-->
                <!--<span class="my-resume-content-content-detail-two">男</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">出生日期</span>-->
                <!--<span class="my-resume-content-content-detail-two">1983-08-23</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">国籍：</span>-->
                <!--<span class="my-resume-content-content-detail-two">中国</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">手机号：</span>-->
                <!--<span class="my-resume-content-content-detail-two">18688736745</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">个人邮箱：</span>-->
                <!--<span class="my-resume-content-content-detail-two">47897220@qq.com</span>-->
              <!--</div>-->
            <!--</div>-->

            <!--<div class="my-resume-content-content">-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">工作年限：</span>-->
                <!--<span class="my-resume-content-content-detail-two">4年</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">现居住地：</span>-->
                <!--<span class="my-resume-content-content-detail-two">上海</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">期望工作地：</span>-->
                <!--<span class="my-resume-content-content-detail-two">上海</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">最高学历：</span>-->
                <!--<span class="my-resume-content-content-detail-two">本科</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">身份证号：</span>-->
                <!--<span class="my-resume-content-content-detail-two">6789271983082368974</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="my-resume-content clearfix">-->
            <!--<div class="my-resume-content-title">工作经历</div>-->
            <!--<div class="my-resume-content-content-oneline">-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">姓名</span>-->
                <!--<span class="my-resume-content-content-detail-two">李晓星</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">性别</span>-->
                <!--<span class="my-resume-content-content-detail-two">男</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">出生日期</span>-->
                <!--<span class="my-resume-content-content-detail-two">1983-08-23</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">国籍：</span>-->
                <!--<span class="my-resume-content-content-detail-two">中国</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">手机号：</span>-->
                <!--<span class="my-resume-content-content-detail-two">18688736745</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">个人邮箱：</span>-->
                <!--<span class="my-resume-content-content-detail-two">47897220@qq.com</span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="my-resume-content-line"></div>-->
            <!--<div class="my-resume-content-content-oneline">-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">姓名</span>-->
                <!--<span class="my-resume-content-content-detail-two">李晓星</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">性别</span>-->
                <!--<span class="my-resume-content-content-detail-two">男</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">出生日期</span>-->
                <!--<span class="my-resume-content-content-detail-two">1983-08-23</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">国籍：</span>-->
                <!--<span class="my-resume-content-content-detail-two">中国</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">手机号：</span>-->
                <!--<span class="my-resume-content-content-detail-two">18688736745</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">个人邮箱：</span>-->
                <!--<span class="my-resume-content-content-detail-two">47897220@qq.com</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="my-resume-content clearfix">-->
            <!--<div class="my-resume-content-title">工作经历</div>-->
            <!--<div class="my-resume-content-content-oneline">-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">姓名</span>-->
                <!--<span class="my-resume-content-content-detail-two">李晓星</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">性别</span>-->
                <!--<span class="my-resume-content-content-detail-two">男</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">出生日期</span>-->
                <!--<span class="my-resume-content-content-detail-two">1983-08-23</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">国籍：</span>-->
                <!--<span class="my-resume-content-content-detail-two">中国</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">手机号：</span>-->
                <!--<span class="my-resume-content-content-detail-two">18688736745</span>-->
              <!--</div>-->
              <!--<div class="my-resume-content-content-detail">-->
                <!--<span class="my-resume-content-content-detail-one">个人邮箱：</span>-->
                <!--<span class="my-resume-content-content-detail-two">47897220@qq.com</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="my-resume-confirm">-->
            <!--<div class="my-resume-confirm-content">-->
              <!--<div class="my-resume-confirm-content-one">返回修改</div>-->
              <!--<div class="my-resume-confirm-content-two">搜职位</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="my-resume-status">-->
          <!--<div class="my-resume-status-per">-->
            <!--<div class="my-resume-status-per-title">简历完成度 :<span>10%</span></div>-->
            <!--<div class="my-resume-status-per-per">-->
              <!--<div></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="my-resume-status-class">-->
            <!--<div class="my-resume-status-class-chosen">基础信息</div>-->
            <!--<div>教育经历</div>-->
            <!--<div>工作经历</div>-->
            <!--<div>项目经历</div>-->
            <!--<div>附件</div>-->
          <!--</div>-->
        <!--</div>-->




        <!--个人中心-我推荐的-->
        <div class="my-recommend">
          <div class="my-recommend-title">我推荐的</div>
          <div class="my-recommend-searchbar">
            <span>姓名 ：</span>
            <input type="text">
            <span>应聘职位 ：</span>
            <input type="text">
            <span class="education-select">学历 ：</span>
            <select>
              <option value ="volvo">高中</option>
              <option value ="saab">学士</option>
              <option value="opel">硕士</option>
              <option value="audi">博士</option>
            </select>
            <span class="my-recommend-search">搜索</span>
          </div>
          <div class="my-recommend-table">
            <div class="my-recommend-table-first">
              <span>姓名</span>
              <span>应聘职位</span>
              <span>简历</span>
              <span>学历</span>
              <span>工作年限</span>
            </div>
            <div class="my-recommend-table-list">
              <span>张晓红</span>
              <span>营销经理</span>
              <span>查看</span>
              <span>本科</span>
              <span>3-5年</span>
            </div>
            <div class="my-recommend-table-list">
              <span>张晓红</span>
              <span>营销经理</span>
              <span>查看</span>
              <span>本科</span>
              <span>3-5年</span>
            </div>
            <div class="my-recommend-table-list">
              <span>张晓红</span>
              <span>营销经理</span>
              <span>查看</span>
              <span>本科</span>
              <span>3-5年</span>
            </div>
            <div class="my-recommend-table-list">
              <span>张晓红</span>
              <span>营销经理</span>
              <span>查看</span>
              <span>本科</span>
              <span>3-5年</span>
            </div>
            <div class="my-recommend-table-list">
              <span>张晓红</span>
              <span>营销经理</span>
              <span>查看</span>
              <span>本科</span>
              <span>3-5年</span>
            </div>
            <div class="my-recommend-table-list">
              <span>张晓红</span>
              <span>营销经理</span>
              <span>查看</span>
              <span>本科</span>
              <span>3-5年</span>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="footer">
      <div class="footer-content">
        <div>Copyright 2016 by red starCO,LTD.All rights reserved 沪ICP备12018312号-1</div>
        <div>沪公网安备 31010702002586号</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UseLess',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scss">
.header{
  height: 40px;
  background: #F5F5F5;
  border-bottom: 1px solid #E4E4E4;
}
  .header-contant{
    margin: 0 auto;
    width: 1200px;
    height: 20px;
    margin-top: 10px;
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
    /*line-height: 50px;*/
  }
  .header-banner-list{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
  }
  .header-banner-list > li{
    float: left;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    padding: 14px 40px;
  }

  .recruit-content{
    width: 1200px;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .recruit-content-left-banner{
    float: left;
    width: 180px;
    min-height: 486px;
    background: #F5F5F5;
    padding-top: 10px;
    margin-bottom: 20px;
  }
  .recruit-content-left-banner>li{
    line-height: 48px;
    font-family: .PingFangSC-Medium;
    font-size: 14px;
    color: #444444;
    font-weight: bold;
  }
  .recruit-content-right-noresume{
    float: left;
    width: 982px;
    min-height: 486px;
    margin-left: 35px;
    background: rgba(255,255,255,0.05);
    border: 1px dashed  #E4E4E4;
    border-radius: 4px;
    position: relative;
  }
  .recruit-content-right-noresume-content{
    position: absolute;
    left: 50%;
    top: 50%;
    height: 186px;
    width: 420px;
    margin-left: -210px;
    margin-top: -93px;
    /*background: red;*/
  }
  .recruit-content-right-noresume-logo{
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background: gainsboro;
  }
  .recruit-content-right-noresume-words{
    height: 70px;
    font-family: .PingFangSC-Regular;
    font-size: 16px;
    line-height: 70px;
    text-align: center;
    color: #999999;
  }
  .recruit-content-right-noresume-button{
    background: #0091EA;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    width: 90px;
    margin: 0 auto;
    text-align: center;
  }
  .footer{
    border-top: 1px solid #E4E4E4;
    height: 83px;
    /*width: 1200px;*/
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    line-height: 22px;
    box-sizing: border-box;
    padding-top: 20px;
    margin:auto;
  }


.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.clearfix{
  *zoom: 1;
}


.my-resume{
  float: left;
  margin-left: 19px;
  margin-bottom: 20px;
  width: 800px;
  min-height: 400px;
}
.my-resume-title{
  margin-top: 10px;
  font-family: .PingFangSC-Regular;
  font-size: 18px;
  color: #444444;
}
.my-resume-content{
  margin-top: 20px;
  border: 1px solid #E4E4E4;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  padding: 40px;
}
.my-resume-content-title{
  font-family: .PingFangSC-Medium;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 30px;
  color: #444444;
  font-weight: bold;
}
.my-resume-content-title.twoline{
  margin-bottom: 11px;
}
.my-resume-content-content-oneline{
  width: 100%;
  /*float: left;*/
}
.my-resume-content-content-oneline .my-resume-content-content-detail-one{
  width: 13.45%;
  height: 100%;
}
.my-resume-content-content-oneline .my-resume-content-content-detail-two{
  width: 86%;
}
.my-resume-content-content{
  width: 276px;
  float: left;
}
.my-resume-content-content-detail{
  width: 100%;
  font-size: 0;
  line-height: 17px;
  margin-top: 19px;
}
.my-resume-content-content-detail>span{
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #444444;
}
.my-resume-content-content-detail-one{
  width: 35%;
  height: 100%;
}
.my-resume-content-content-detail-two{
  width: 65%;
  /*height: 100%;*/
}
.my-resume-content-line{
  height: 1px;
  border-bottom: 1px dashed #E4E4E4;
  margin: 30px 0;
}





.my-resume-confirm{
  height: 100px;

}
.my-resume-confirm-content{
  padding-top: 40px;
  height: 40px;
}
.my-resume-confirm-content>div{
  float: left;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #0091EA;
  border-radius: 4px;
  line-height: 38px;
  font-family: .PingFangSC-Regular;
  font-size: 16px;
  color: #0091EA;
  padding: 0 28px ;
  margin-left: 30px;
}
.my-resume-confirm-content .my-resume-confirm-content-one{
  margin-left: 265px;
}
.my-resume-confirm-content .my-resume-confirm-content-two{
  background: #0091EA;
  color: #fff;
}


.my-resume-status{
  float: left;
  margin-left: 19px;
  width: 180px;
}
  .my-resume-status-per{
    /*height: 73px;*/
    width: 180px;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 30px;
  }
  .my-resume-status-per-title{
    font-family: .PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
  }
  .my-resume-status-per-title > span{
    font-family: .PingFangSC-Regular;
    font-size: 14px;
    color: #0091EA ;
    /*line-height: 17px;*/
  }
  .my-resume-status-per-per{
    margin-top: 15px;
    height: 6px;
    width: 156px;
    background: #F5F5F5;
    border-radius: 8px;
    position: relative;
  }
  .my-resume-status-per-per > div{
    position: absolute;
    left: 0;
    top: 0;
    background: #0091EA;
    border-radius: 8px;
    height: 6px;
    width: 20px;
  }
  .my-resume-status-class{
    height: 235px;
    border-left: 1px solid #E4E4E4;
    /*padding-left: 20px;*/
  }
  .my-resume-status-class>div{
    font-size: 14px;
    color: #666666;
    line-height: 17px;
    padding: 15px 0;
    padding-left: 20px;
    user-select: none;
  }
  .my-resume-status-class .my-resume-status-class-chosen{
    border-left: 3px solid #0091EA;
    color: #0091EA;
  }




  .my-recommend{
    float: left;
    margin-left: 19px;
    margin-bottom: 20px;
    width: 960px;
    min-height: 400px;
  }
  .my-recommend-title{
    font-size: 18px;
    line-height: 18px;
    color: #444444;
    margin-bottom: 20px;
  }
  .my-recommend-searchbar{
    height: 36px;
    /*background: gainsboro;*/
    font-size: 0;
    margin-bottom: 20px;
  }
  .my-recommend-searchbar input {
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 34px;
    padding: 0;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-right: 20px;
    margin-left: 10px;
  }
.my-recommend-searchbar select{
  display: inline-block;
  vertical-align: top;
  width: 200px;
  height: 36px;
  padding: 0;
  background: #FFFFFF;
  border: 1px solid #E4E4E4;
  border-radius: 4px;
  margin-right: 20px;
  margin-left: 10px;
  position: relative;
  background: url("../pages/index/assets/logo.png") no-repeat scroll right center transparent;
  background-size: 36px;
}
/*.education-select{*/
  /*position: relative;*/
/*}*/
/*.my-recommend-searchbar select::before{*/
  /*content: '';*/
  /*position: absolute;*/
  /*width: 36px;*/
  /*height: 36px;*/
  /*right: -210px;*/
  /*top: 0;*/
  /*border-radius: 4px;*/
  /*background: red;*/
/*}*/
/*.education-select:after{*/
  /*content: '';*/
  /*position: absolute;*/
  /*width: 36px;*/
  /*height: 36px;*/
  /*right: -210px;*/
  /*top: 0;*/
  /*border-radius: 4px;*/
  /*background: red;*/
/*}*/
.my-recommend-searchbar span {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #444444;
  line-height: 36px;
}
  .my-recommend-searchbar .my-recommend-search{
    background: #0091EA;
    border-radius: 4px;
    color: #ffffff;
    padding: 0 16px;
  }
  .my-recommend-table-first{
    background: #F5F5F5;
    border: 1px solid #E4E4E4;
    border-right: 0px solid #E4E4E4;
    height: 36px;
    font-size: 0;
  }
.my-recommend-table-first span{
  display: inline-block;
  vertical-align: top;
  width: 20%;
  text-align: center;
  font-size: 14px;
  color: #444444;
  line-height: 36px;
  /*border-right: 1px solid #E4E4E4;*/
  box-shadow: 1px 0px 0px 0px #E4E4E4;
}
  .my-recommend-table-list{
    /*background: #F5F5F5;*/
    border: 1px solid #E4E4E4;
    border-right: 0px solid #E4E4E4;
    border-top: 0px solid #E4E4E4;
    min-height: 39px;
    font-size: 0;
  }
.my-recommend-table-list span{
  display: inline-block;
  vertical-align: top;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  color: #444444;
  padding: 11px 0;
  /*line-height: 39px;*/
  /*border-right: 1px solid #E4E4E4;*/
  box-shadow: 1px 0px 0px 0px #E4E4E4;
}
  select{
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
  }
</style>
