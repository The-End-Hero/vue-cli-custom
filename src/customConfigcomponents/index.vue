<template>
  <div class="contain">
    <div class="left-banner">
      <el-tree
        :data="data2"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps"
        @check-change="handleCheckChange"
        @current-change="handleCurrentChange"
        @node-click="handleNodeClick" ref="tree">
      </el-tree>
    </div>

    <div class="right-main">
      <draggable v-model="data1" :options="{group:'people'}" @start="drag=true" @end="drag=false">
        <div class="show-json" v-for="element in data1" :key="element.id">{{element}}</div>
      </draggable>
    </div>
  </div>
</template>

<script>
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
//        console.log(data)
      }
    },
    data() {
      return {
        msg: 'index',
        data1: [],
        data2: [{
          id: 'one',
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
          }]
        }, {
          id: 'two',
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 'three',
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
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
