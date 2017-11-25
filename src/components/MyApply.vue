<template>
  <div class="recruit">
    <div class="recruit-content clearfix">
      <div class="recruit-content-left-banner">
        <router-link to="/UserCenter/MyResume"><li><i class="icon iconfont"></i>我的简历</li></router-link>
        <router-link to="/UserCenter/MyRecommend"><li><i class="icon iconfont"></i>我推荐的</li></router-link>
        <router-link to="/UserCenter/MyApply"><li><i class="icon iconfont"></i>我申请的</li></router-link>
        <router-link to="/UserCenter/MyCollection"><li><i class="icon iconfont"></i>我收藏的</li></router-link>
      </div>


      <!--个人中心-我申请的-->
      <div class="my-apply">
        <div class="my-apply-title">我申请的</div>
        <div class="my-apply-searchbar">
          <span>职位名称：</span>
          <input type="text">
          <span>部门：</span>
          <input type="text">
          <span class="education-select">工作地点：</span>
          <select>
            <option value="volvo">高中</option>
            <option value="saab">学士</option>
            <option value="opel">硕士</option>
            <option value="audi">博士</option>
          </select>
          <span class="education-select">职位状态：</span>
          <select>
            <option value="volvo">高中</option>
            <option value="saab">学士</option>
            <option value="opel">硕士</option>
            <option value="audi">博士</option>
          </select>
          <span class="my-apply-search">搜索</span>
        </div>
        <table class="myapply-table">
          <thead>
          <tr>
            <th>职位名称</th>
            <th>部门</th>
            <th>职级</th>
            <th>学历</th>
            <th>工作年限</th>
            <th>工作地点</th>
            <th>发布时间</th>
            <th>职位状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              前端开发工程师
            </td>
            <td class="two">
              人力资源中心-人力资源支持
            </td>
            <td>
              经理
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
            <td>
              上海
            </td>
            <td>
              2017-07-11
            </td>
            <td>
              在线
            </td>
            <td>
              删除
            </td>
          </tr>
          <tr>
            <td>
              前端开发工程师
            </td>
            <td>
              人力资源中心-人力资源支持
            </td>
            <td>
              经理
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
            <td>
              上海
            </td>
            <td>
              2017-07-11
            </td>
            <td>
              在线
            </td>
            <td>
              删除
            </td>
          </tr>
          <tr>
            <td>
              前端开发工程师
            </td>
            <td>
              人力资源中心-人力资源支持
            </td>
            <td>
              经理
            </td>
            <td>
              本科
            </td>
            <td>
              3-5年
            </td>
            <td>
              上海
            </td>
            <td>
              2017-07-11
            </td>
            <td>
              在线
            </td>
            <td>
              删除
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
