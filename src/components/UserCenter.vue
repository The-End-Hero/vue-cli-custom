<template>
  <div v-on:click="hidebtn">
    <header-top></header-top>
    <router-view/>
    <footer-buttom></footer-buttom>
  </div>
</template>

<script>
  import HeaderTop from './HeaderTop.vue'
  import FooterButtom from './FooterButtom.vue'
  import ButtonSelect from './ButtonSelect.vue'

  export default {
    name: 'UseLess',
    components:{
      HeaderTop,
      FooterButtom,
      ButtonSelect
    },
    methods: {
      showbuttondetail:function () {
        this.$refs.buttonList.style.display='block'
      },
      hidebtn(e){
//        console.log(this.$refs)
        console.log(e,'e')
        console.log('hidebtn')
        console.log(this.$children)
        const children = this.$children

        function ddd(children) {
          for(var key in children){
          console.log(children[key])
          console.log(children[key].$refs)
            for(var keys in children[key].$refs){
//            console.log(children[key].$refs[keys])
              if(keys.indexOf('buttonselect')>-1){
//              console.log(13)
//                children[key].$refs[keys].isshow = false
              }
            }
          }
        }
//        ddd(children)
//        for(var key in children){
//
//          ddd(children[key].$children)
//        }

        const data1 = this
        const data = {
          $children: [
            {
              $refs: {}
            },
            {
              $children: [
                {
                  $refs: {
                    buttonselect1:5,
                    buttonselect3:6,
                    buttonselect4:7,
                    buttonselect5:8
                  }
                },
                {
                  $refs: {}
                },
                {
                  $children:[
                    {$refs:{
                      buttonselect7:1,
                      buttonselect8:2,
                      buttonselect99:3,
                      buttonselect555:4
                    }}
                  ]
                }
              ]
            }
          ]
        }

        function rrr(data) {
//          console.log(data,'data')
          if(data.$children){
//            console.log(data.$children,'data.$children')
//            for(var i in data.$children){
            for(var i=0;i<data.$children.length;i++){
//              console.log(data.$children[i])
              for(var j in data.$children[i]){
                if(j == '$refs'){
//                  console.log('!!!')
//                  console.log(data.$children[i][j])
                  data.$children[i][j]
                  for(var k in data.$children[i][j]){
//                    console.log(k)
                    if(k.indexOf('buttonselect')>-1){
//                      console.log('获取')
//                      console.log(data.$children[i][j][k])
                      data.$children[i][j][k].isshow = false
                    }
                  }
                }
//                console.log(typeof j)
              }
              if(data.$children[i]){
                rrr(data.$children[i])
              }
            }
          }
        }
        rrr(data1)
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        workingtime:{
          from:'workingtime',
          list:[
            {msg:'1年'},
            {msg:'2年'},
            {msg:'3~5年'},
            {msg:'5~10年'},
            {msg:'10年以上'},
          ]
        },
        education:{
          from:'education',
          list:[
            {msg:'博士'},
            {msg:'硕士'},
            {msg:'本科'},
            {msg:'大专'},
            {msg:'中专'},
          ]
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scss">
  .myrecommend-table {
    border-collapse: collapse; /*相邻边被合并;separate: 边框独立*/
    border: none;
    width: 960px;
  }
  .myapply-table{
    border-collapse: collapse; /*相邻边被合并;separate: 边框独立*/
    border: none;
    width: 960px;
  }
  .myapply-table td {
    border: solid #CCC 1px;
    height: 38px;
    text-align: center;
    /*width: 20%;*/
    font-size: 14px;
    color: #444444;
    padding: 12px;
  }
  .myapply-table .two{
    width: 163px;
  }
  .myapply-table th{
    border: solid #CCC 1px;
    height: 34px;
    background: #F5F5F5;
    font-size: 14px;
    color: #444444;
  }
  .myrecommend-table td {
    border: solid #CCC 1px;
    height: 38px;
    text-align: center;
    width: 20%;
    font-size: 14px;
    color: #444444;
  }

  .myrecommend-table th{
    border: solid #CCC 1px;
    height: 34px;
    background: #F5F5F5;
    font-size: 14px;
    color: #444444;
  }
/*.header{*/
  /*height: 40px;*/
  /*background: #F5F5F5;*/
  /*border-bottom: 1px solid #E4E4E4;*/
/*}*/
  /*.header-contant{*/
    /*margin: 0 auto;*/
    /*width: 1200px;*/
    /*height: 20px;*/
    /*margin-top: 10px;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 14px;*/
    /*color: #666666;*/
  /*}*/
/*.header-contant >div{*/
  /*float: right;*/
  /*margin-left: 30px;*/
/*}*/
  /*.header-logo{*/
    /*height: 100px;*/
  /*}*/
  /*.header-logo-contant{*/
    /*margin: 0 auto;*/
    /*width: 1200px;*/
    /*height: 100px;*/
  /*}*/
  /*.header-logo-title{*/
    /*font-family: PingFangSC-Medium;*/
    /*font-weight: bold;*/
    /*font-size: 22px;*/
    /*color: #262626;*/
    /*line-height: 30px;*/
    /*float: left;*/
    /*margin: 35px 28px;*/
  /*}*/
/*.header-logo-logo{*/
  /*float: left;*/
  /*display: block;*/
  /*width: 170px;*/
  /*height: 52px;*/
  /*margin: 24px 0;*/
/*}*/
  /*.header-banner{*/
    /*height: 50px;*/
    /*background: #223857;*/
    /*color: #fff;*/
    /*font-size: 16px;*/
    /*!*line-height: 50px;*!*/
  /*}*/
  /*.header-banner-list{*/
    /*width: 1200px;*/
    /*margin: 0 auto;*/
    /*height: 50px;*/
  /*}*/
  /*.header-banner-list > li{*/
    /*float: left;*/
    /*font-family: PingFangSC-Medium;*/
    /*font-size: 16px;*/
    /*line-height: 22px;*/
    /*color: #FFFFFF;*/
    /*padding: 14px 40px;*/
  /*}*/

  .recruit-content{
    width: 1200px;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .recruit-content-left-banner{
    box-sizing: border-box;
    float: left;
    width: 180px;
    min-height: 486px;
    background: #F5F5F5;
    padding-top: 10px;
    margin-bottom: 20px;
  }
  .recruit-content-left-banner>li{
    line-height: 48px;
    font-size: 14px;
    color: #444444;
    font-weight: bold;
    cursor: pointer;
  }
  .recruit-content-left-banner i{
    padding-right: 9px;
    padding-left: 28px;
    font-size: 14px;
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
  /*.footer{*/
    /*border-top: 1px solid #E4E4E4;*/
    /*height: 83px;*/
    /*!*width: 1200px;*!*/
    /*text-align: center;*/
    /*font-family: PingFangSC-Regular;*/
    /*font-size: 14px;*/
    /*color: #999999;*/
    /*line-height: 22px;*/
    /*box-sizing: border-box;*/
    /*padding-top: 20px;*/
    /*margin:auto;*/
  /*}*/


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
    font-size: 14px;
    color: #666666;
  }
  .my-resume-status-per-title > span{
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
    padding-left: 17px;
    user-select: none;
    cursor: pointer;
    border-left: 3px solid #FFF;

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
  /*.my-recommend-table-first{*/
    /*background: #F5F5F5;*/
    /*border: 1px solid #E4E4E4;*/
    /*border-right: 0px solid #E4E4E4;*/
    /*height: 36px;*/
    /*font-size: 0;*/
  /*}*/
/*.my-recommend-table-first span{*/
  /*display: inline-block;*/
  /*vertical-align: top;*/
  /*width: 20%;*/
  /*text-align: center;*/
  /*font-size: 14px;*/
  /*color: #444444;*/
  /*line-height: 36px;*/
  /*!*border-right: 1px solid #E4E4E4;*!*/
  /*box-shadow: 1px 0px 0px 0px #E4E4E4;*/
/*}*/
  /*.my-recommend-table-list{*/
    /*!*background: #F5F5F5;*!*/
    /*border: 1px solid #E4E4E4;*/
    /*border-right: 0px solid #E4E4E4;*/
    /*border-top: 0px solid #E4E4E4;*/
    /*min-height: 39px;*/
    /*font-size: 0;*/
  /*}*/
/*.my-recommend-table-list span{*/
  /*display: inline-block;*/
  /*vertical-align: top;*/
  /*width: 20%;*/
  /*height: 100%;*/
  /*text-align: center;*/
  /*font-size: 14px;*/
  /*color: #444444;*/
  /*padding: 11px 0;*/
  /*!*line-height: 39px;*!*/
  /*!*border-right: 1px solid #E4E4E4;*!*/
  /*box-shadow: 1px 0px 0px 0px #E4E4E4;*/
/*}*/
  select{
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
  }



  .my-apply{
    width: 960px;
    margin-left: 20px;
    float: left;
  }
  .my-apply-title{
    font-size: 18px;
    color: #444444;
    margin-bottom: 21px;
    margin-top: 10px;
    line-height: 18px;
  }
  .my-apply-searchbar{
    height: 36px;
    /*background: gainsboro;*/
    font-size: 0;
    margin-bottom: 20px;
  }
  .my-apply-searchbar input {
    display: inline-block;
    vertical-align: top;
    width: 120px;
    height: 34px;
    padding: 0;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-right: 20px;
    margin-left: 10px;
  }
  .my-apply-searchbar select{
    display: inline-block;
    vertical-align: top;
    width: 120px;
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
  .my-apply-searchbar span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #444444;
    line-height: 36px;
  }
  .my-apply-searchbar .my-apply-search{
    background: #0091EA;
    border-radius: 4px;
    color: #ffffff;
    padding: 0 16px;
  }
  .preview_resume{
    font-size: 14px;
    color: #0091EA;
    margin-top: 20px;
    line-height: 17px;
    cursor: pointer;
    /*margin-left: 23px;*/
  }
  .preview_resume i{
    padding-right: 10px;
    font-size: 14px;
  }



  .create-resume-content-content{
    width: 384px;
    /*min-height: 200px;*/
    font-size: 0;
  }
  .create-resume-content-content i{
    font-size: 14px;
    color: #E85043;

  }
  .create-resume-content-content span{
     display: inline-block;
     vertical-align: top;
     width: 104px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #444444;
    margin-top: 20px;
  }
  .create-resume-content-content input{
    display: inline-block;
    vertical-align: top;
    width: 280px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-top: 20px;
    box-sizing: border-box;
    padding-left: 10px;
    font-size: 14px;
    color: #444444;
  }
  .create-resume-content-content select{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 280px;
    height: 36px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    margin-top: 20px;
    background: url("../pages/index/assets/logo.png") no-repeat scroll right center transparent;
    background-size: 36px;
  }
  .create-resume-content-content button{
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
  .create-resume-content-content button i{
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
  .create-resume-timer{
    margin-top: 20px;
    font-size: 0;
  }
  .create-resume-timer span{
    display: inline-block;
    vertical-align: top;
    width: 104px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #444444;
  }
  .create-resume-timer input {
    display: inline-block;
    vertical-align: top;
    width: 140px;
    height: 34px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
  }
  .create-resume-timer .link-time{
    width: 40px;
    text-align: center;
    font-size: 20px;
  }
  .create-resume-text{
    margin-top: 20px;
    font-size: 0;
  }
  .create-resume-text span{
    display: inline-block;
    vertical-align: top;
    width: 104px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #444444;
  }
  .create-resume-text textarea {
    display: inline-block;
    vertical-align: top;
    width: 610px;
    min-height: 120px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    padding: 0;
    resize: none;
  }
  .create-resume-content-line{
    height: 1px;
    border-bottom: 1px dashed #E4E4E4;
    /*margin: 15px 0;*/
    margin-top: 20px;
    margin-bottom: 15px;
  }
</style>
