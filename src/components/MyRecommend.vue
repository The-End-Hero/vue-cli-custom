<template>
  <div class="recruit">
    <div class="recruit-content clearfix">
      <div class="recruit-content-left-banner">
        <li><i class="icon iconfont"></i>我的简历</li>
        <li><i class="icon iconfont"></i>我推荐的</li>
        <li><i class="icon iconfont"></i>我申请的</li>
        <li><i class="icon iconfont"></i>我收藏的</li>
      </div>
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
            <option value="volvo">高中</option>
            <option value="saab">学士</option>
            <option value="opel">硕士</option>
            <option value="audi">博士</option>
          </select>
          <span class="my-recommend-search">搜索</span>
        </div>
        <table class="myrecommend-table">
          <thead>
          <tr>
            <th>姓名</th>
            <th>应聘职位</th>
            <th>简历</th>
            <th>学历</th>
            <th>工作年限</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              张晓红
            </td>
            <td>
              营销经理
            </td>
            <td>
              查看
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
          </tr>
          <tr>
            <td>
              张晓红
            </td>
            <td>
              营销经理
            </td>
            <td>
              查看
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
          </tr>
          <tr>
            <td>
              张晓红
            </td>
            <td>
              营销经理
            </td>
            <td>
              查看
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
          </tr>
          </tbody>
        </table>
      </div>



    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
