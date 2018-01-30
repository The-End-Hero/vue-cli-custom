<template>
  <div class="hello">
    <div class="nonono">
      <div style="display: flex">
        <div style=" height: 400px;background: #eeeeee">
          <div style="float: right;min-width: 100%; text-align: right;" v-for="item in zuowei">
            <span style="background:red;display: inline-block;vertical-align:top;margin: 10px;" v-for="its in item[0]">
              {{its.marea}}区 <br/>
              {{its.rownum}}排{{its.columnnum}}座
            </span>
          </div>
        </div>
        <div style="background: red;min-width: 10px;"></div>
        <div style=" height: 400px; background: gray">
          <div style="float: left;min-width: 100%; text-align: left;" v-for="item in zuowei">
            <span style="background:red;display: inline-block;vertical-align:top;margin: 10px;" v-for="its in item[1]">
              {{its.marea}}区 <br/>
              {{its.rownum}}排{{its.columnnum}}座
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    created(){
      console.log(this.zuowei,'this.zuowei')
//      const zuowei = this.zuowei
      const zuowei = []
      this.zuowei.map(function (current,index,arr) {
        const array = [[],[]]
        for(let i=0;i<current.length;i++){
          if(i<current.length-1){
            if(current[0].marea == current[i].marea && current[i].marea == current[i+1].marea){
              array[0].push(current[i])
            }else if(current[0].marea == current[i].marea && current[i].marea != current[i+1].marea){
              array[0].push(current[i])
            }else if(current[0].marea != current[i].marea && current[i].marea == current[i+1].marea){
              array[1].push(current[i])
            }
          }else {
            array[1].push(current[i])
          }
        }
        console.log(array,'array')
        zuowei[index] = array
      })
      console.log(zuowei,'zuowei')
      this.zuowei = zuowei
      console.log(this.zuowei,'this.zuowei')
    },
    methods: {
      zuoweimap(current,index,arr){
//        const cur = current
        const array = [[],[]]
        for(let i=0;i<current.length;i++){
//          console.log(cur[i].marea)
          if(i<current.length-1){
            if(current[0].marea == current[i].marea && current[i].marea == current[i+1].marea){
              array[0].push(current[i])
            }else if(current[0].marea == current[i].marea && current[i].marea != current[i+1].marea){
              array[0].push(current[i])
            }else if(current[0].marea != current[i].marea && current[i].marea == current[i+1].marea){
              array[1].push(current[i])
            }
          }else {
            array[1].push(current[i])
          }
        }
        console.log(array,'array')
//        return array
        current = array
        return array
      }
    },
      data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        zuowei: [
          [
            {rownum: 1, columnnum: 1, marea: 'A', employeecode: '222d'},
            {rownum: 1, columnnum: 2, marea: 'A', employeecode: ''},
            {rownum: 1, columnnum: 3, marea: 'A', employeecode: '222d'},
            {rownum: 1, columnnum: 4, marea: 'A', employeecode: '222d'},
            {rownum: 1, columnnum: 5, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 6, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 7, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 8, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 9, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
            {rownum: 1, columnnum: 10, marea: 'B', employeecode: '222d'},
          ],
          [
            {rownum: 2, columnnum: 1, marea: 'A', employeecode: '1'},
            {rownum: 2, columnnum: 2, marea: 'A', employeecode: '2'},
            {rownum: 2, columnnum: 3, marea: 'A', employeecode: '3'},
            {rownum: 2, columnnum: 4, marea: 'A', employeecode: '4'},
            {rownum: 2, columnnum: 5, marea: 'B', employeecode: '5'},
            {rownum: 2, columnnum: 6, marea: 'B', employeecode: '6'},
            {rownum: 2, columnnum: 7, marea: 'B', employeecode: '7'},
          ],
          [
            {rownum: 3, columnnum: 1, marea: 'A', employeecode: '222d'},
            {rownum: 3, columnnum: 2, marea: 'A', employeecode: '222d'},
            {rownum: 3, columnnum: 3, marea: 'A', employeecode: '222d'},
            {rownum: 3, columnnum: 4, marea: 'A', employeecode: '222d'},
            {rownum: 3, columnnum: 5, marea: 'B', employeecode: '222d'},
            {rownum: 3, columnnum: 6, marea: 'B', employeecode: '222d'},
            {rownum: 3, columnnum: 7, marea: 'B', employeecode: '222d'},
          ]
          ,
          [
            {rownum: 4, columnnum: 1, marea: 'C', employeecode: '222d'},
            {rownum: 4, columnnum: 2, marea: 'C', employeecode: '222d'},
            {rownum: 4, columnnum: 3, marea: 'C', employeecode: '222d'},
            {rownum: 4, columnnum: 4, marea: 'C', employeecode: '222d'},
            {rownum: 4, columnnum: 5, marea: 'B', employeecode: '222d'},
            {rownum: 4, columnnum: 6, marea: 'B', employeecode: '222d'},
            {rownum: 4, columnnum: 7, marea: 'B', employeecode: '222d'},
          ]
        ],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    white-space: nowrap;
  }

  .nonono {

    max-width: 1000px;
    overflow-x: auto;
  }
</style>
