<template>
  <div class="contain">
    <div class="left-banner">
      <el-tree
        :data="data2"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        @check-change="handleCheckChange"
        @current-change="handleCurrentChange"
        @node-click="handleNodeClick" ref="tree">
      </el-tree>

    </div>

    <div class="right-main">
      <!--<draggable v-model="data1" :options="{group:'people'}" @start="drag=true" @end="drag=false">-->
      <!--<div class="show-json" v-for="element in data1" :key="element.id">{{element}}</div>-->
      <!--</draggable>-->
      <h4>{{msg}}</h4>
    </div>
  </div>
</template>

<script>
  import './index.scss'
  import draggable from 'vuedraggable'

  export default {
    name: 'index',
    components: {draggable},
    methods: {
      handleCheckChange(data, checked, indeterminate) {
//        console.log(data, checked, indeterminate);
        console.log(data)
        console.log(checked)
        console.log(indeterminate)
//        console.log(1)

        console.log(this.$refs.tree.getCheckedNodes())
        const arr = []
        for (let i = 0; i < this.$refs.tree.getCheckedNodes().length; i++) {
          if (typeof this.$refs.tree.getCheckedNodes()[i].id != 'string') {
            arr.push(this.$refs.tree.getCheckedNodes()[i])
          }
        }
        let a = new Set(arr);
        let b = new Set(this.data1);
        let differenceABSet = new Set([...a].filter(x => !b.has(x)))

        let popAB = Array.from(differenceABSet)
        console.log(popAB, 'popAB')
        for (let i = 0; i < popAB.length; i++) {
          if (typeof popAB[i].id != 'string') {
            this.data1.push(popAB[i])
          }
        }
        let c = new Set(this.data1)
        // 交集
        let intersectionSet = new Set([...c].filter(x => a.has(x)));
        this.data1 = Array.from(intersectionSet)

//        this.data1 = arr
      },
      handleCurrentChange(a, b) {
//        console.log(2)
//        console.log(a)
//        console.log(b)
      },
      handleNodeClick(data) {
        console.log(data, 'data')
        this.msg = data.detail
        scroll(0,0)
      }
    },
    data() {
      /**
       * vue源码根目录下有很多文件夹，下面先列出我知道的几个，后续会补充。
       * Vue
       *   |—  build  打包相关的配置文件，其中最重要的是config.js。主要是根据不同的入口，打包为不同的文件。
       *   |—  dist 打包之后文件所在位置
       *   |—  examples 部分示例
       *   |—  flow 因为Vue使用了[Flow](https://flow.org/)来进行静态类型检查，这里定义了声明了一些静态类型
       *   |—  packages vue还可以分别生成其它的npm包
       *   |—  src 主要源码所在位置
       *      |— compiler 模板解析的相关文件
       *          |—codegen 根据ast生成render函数
       *          |—directives 通用生成render函数之前需要处理的指令
       *          |—parser 模板解析
       *      |—  core 核心代码
       *          |— components 全局的组件，这里只有keep-alive
       *          |— global-api 全局方法，也就是添加在Vue对象上的方法，比如Vue.use,Vue.extend,,Vue.mixin等
       *          |— instance 实例相关内容，包括实例方法，生命周期，事件等
       *          |— observer 双向数据绑定相关文件
       *          |— util 工具方法
       *          |— vdom 虚拟dom相关
       *      |— entries 入口文件，也就是build文件夹下config.js中配置的入口文件。看源码可以从这里看起
       *      |— platforms 平台相关的内容
       *          |— web web端独有文件
       *              |— compiler 编译阶段需要处理的指令和模块
       *              |— runtime 运行阶段需要处理的组件、指令和模块
       *              |— server 服务端渲染相关
       *              |— util 工具库
       *          |— weex weex端独有文件
       *      |— server 服务端渲染相关
       *      |— sfc 暂时未知
       *      |— shared 共享的工具方法
       *   |—  test 测试用例
       */
      return {
        msg: '',
        data1: [],
        data2: [{
          id: 'one',
          label: 'vue源码结构(2.2.6)',
          children: [
            {
              id: 4,
              label: 'build',
              detail: '打包相关的配置文件，其中最重要的是config.js。主要是根据不同的入口，打包为不同的文件。'
            },
            {
              id: 5,
              label: 'dist',
              detail: '打包之后文件所在位置',
            },
            {
              id: 6,
              label: 'examples',
              detail: '部分示例',
            },
            {
              id: 7,
              label: 'flow',
              detail: '因为Vue使用了[Flow](https://flow.org/)来进行静态类型检查，这里定义了声明了一些静态类型',
            },
            {
              id: 8,
              label: 'packages',
              detail: 'vue还可以分别生成其它的npm包'
            },
            {
              id: 9,
              label: 'src',
              detail: '主要源码所在位置',
              children: [
                {
                  id: 11,
                  label: 'compiler',
                  detail: '模板解析的相关文件',
                  children:[
                    {
                      id: 18,
                      label: 'codegen',
                      detail: '根据ast生成render函数'
                    },
                    {
                      id: 19,
                      label: 'global-api',
                      detail: '全局方法，也就是添加在Vue对象上的方法，比如Vue.use,Vue.extend,,Vue.mixin等'
                    },
                    {
                      id: 20,
                      label: 'parser',
                      detail: '模板解析'
                    },
                  ]
                },
                {
                  id: 12,
                  label: 'core',
                  detail: '核心代码',
                  children:[
                    {
                      id: 21,
                      label: 'components',
                      detail: '全局的组件，这里只有keep-alive'
                    },
                    {
                      id: 22,
                      label: 'directives',
                      detail: '通用生成render函数之前需要处理的指令'
                    },
                    {
                      id: 23,
                      label: 'instance',
                      detail: '实例相关内容，包括实例方法，生命周期，事件等'
                    },
                    {
                      id: 24,
                      label: 'observer',
                      detail: '双向数据绑定相关文件'
                    },
                    {
                      id: 25,
                      label: 'util',
                      detail: '工具方法'
                    },
                    {
                      id: 26,
                      label: 'vdom',
                      detail: '虚拟dom相关'
                    },
                  ]
                },
                {
                  id: 13,
                  label: 'entries',
                  detail: '入口文件，也就是build文件夹下config.js中配置的入口文件。看源码可以从这里看起'
                },
                {
                  id: 14,
                  label: 'platforms',
                  detail: '平台相关的内容',
                  children:[
                    {
                      id: 27,
                      label: 'web',
                      detail: 'web端独有文件',
                      children:[
                        {
                          id: 29,
                          label: 'compiler',
                          detail: '编译阶段需要处理的指令和模块',
                        },
                        {
                          id: 30,
                          label: 'runtime',
                          detail: '运行阶段需要处理的组件、指令和模块',
                        },
                        {
                          id: 31,
                          label: 'server',
                          detail: '服务端渲染相关',
                        },
                        {
                          id: 32,
                          label: 'util',
                          detail: '工具库',
                        },
                      ]
                    },
                    {
                      id: 28,
                      label: 'weex',
                      detail: 'weex端独有文件'
                    }
                  ]
                },
                {
                  id: 15,
                  label: 'server',
                  detail: '服务端渲染相关'
                },
                {
                  id: 16,
                  label: 'sfc',
                  detail: '暂时未知'
                },
                {
                  id: 17,
                  label: 'shared',
                  detail: '共享的工具方法'
                },
              ]
            },
            {
              id: 10,
              label: 'test',
              detail: '测试用例'
            }
          ]
        },
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/scss">
  .contain {
    display: flex;
    min-height: 100vh;
    .left-banner {
      flex: 1;
      background: #ceac7c;
    }
    .right-main {
      flex: 3;
      background: #ccc;
      .show-json {
        flex: 1;
        max-width: 400px;
        /*min-height: 400px;*/
        cursor: all-scroll;
        background: #cc7a84;
        margin-bottom: 10px;
      }
    }
  }
</style>
