<template>
  <button class="dateselect-wxp">{{name}}
    <div class="" @click="checktype">{{title}}</div>
    <i class="icon iconfont" v-if="isdown"></i>
    <!--<div class="button-list" ref="buttonList" v-if="isshow">-->
    <!--<div v-for="site in from.list" v-on:click.stop="checked">{{site.msg}}</div>-->
    <!--&lt;!&ndash;<div>校园招聘</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div>实习生招聘</div>&ndash;&gt;-->
    <!--</div>-->
    <div class="dateinset" v-if="isdown" >
      <div class="title">
        <span @click="change(2) ">去年</span>
        <span @click="change(0)">上个月</span>
        <span>{{title}}</span>
        <span @click="change(1)">下个月</span>
        <span @click="change(3)">明年</span>
      </div>
      <div class="dateinset-table">
        <div class="dateinset-table-day">
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
          <span>日</span>
        </div>
        <div class="dateinset-table-day">
          <span v-for="item in day">{{item.day}}</span>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        title: '',
        nowtime: {
          year: '',
          month: '',
          day: ''
        },
        state: this.from,
        name: null,
        isdown: true,
        day: [
          {day: 123},
        ],
      }
    },
    props: ['from'],
    beforeUpdate() {
      console.log('this.isdown', this.isdown)
    },
    created() {

    },
    mounted() {
      this.init()
    },
    methods: {
      checktype() {
        this.isdown = !this.isdown
      },
      listenwin() {
        window.addEventListener('click', (e) => {
          console.log(123)
          for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].className === 'dateselect-wxp') {
              return false
            }
          }
          this.isdown = false
        })
      },
      init() {
        const now = new Date();
        const year = now.getFullYear();       //年
        const month = now.getMonth() + 1;     //月
        const day = now.getDate();
        this.nowtime.year = year
        this.nowtime.month = month
        this.nowtime.day = day
        console.log('this.nowtime', this.nowtime)
        this.listenwin()
        this.getFirstDay(this.nowtime.year, this.nowtime.month)
        this.title = this.nowtime.year + '年' + this.nowtime.month + '月' + this.nowtime.day + '日'
      },
      change(type){
        if(type == 0 || type == 1){
          this.initmonth(type)
        }else {
          this.inityear(type)
        }

        this.getFirstDay(this.nowtime.year, this.nowtime.month)
        this.title = this.nowtime.year + '年' + this.nowtime.month + '月' + this.nowtime.day + '日'
      },
      inityear(type){
        if(type == 2){
        // 去年
          this.nowtime.year = this.nowtime.year-1
          this.nowtime.month = this.nowtime.month
          this.nowtime.day = this.nowtime.day
        }else if(type == 3){
        // 明年
          this.nowtime.year = this.nowtime.year+1
          this.nowtime.month = this.nowtime.month
          this.nowtime.day = this.nowtime.day
        }
      },
      initmonth(type){
        if(type == 0){
          // 上个月
          if(this.nowtime.month == 12){
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month - 1
            this.nowtime.day = this.nowtime.day
          }else if(this.nowtime.month == 1){
            this.nowtime.year = this.nowtime.year - 1
            this.nowtime.month = 12
            this.nowtime.day = this.nowtime.day
          }else {
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month - 1
            this.nowtime.day = this.nowtime.day
          }
        }else if(type == 1){
          // 下个月
          if(this.nowtime.month == 12){
            this.nowtime.year = this.nowtime.year + 1
            this.nowtime.month = 1
            this.nowtime.day = this.nowtime.day
          }else if(this.nowtime.month == 1){
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month + 1
            this.nowtime.day = this.nowtime.day
          }else {
            this.nowtime.year = this.nowtime.year
            this.nowtime.month = this.nowtime.month + 1
            this.nowtime.day = this.nowtime.day
          }
        }
      },
      runNian(_year) {
        //判断闰年
        if (_year % 400 === 0 || (_year % 4 === 0 && _year % 100 !== 0)) {
          return true;
        }
        else {
          return false;
        }
      },
      // 获取月份天数
      getMonthDay(_year, _month) {
        let allDay
        switch (_month) {
          case 1:
            allDay = 31;
            break;
          case 2:
            if (this.runNian(_year)) {
              allDay = 29;
            }
            else {
              allDay = 28;
            }
            break;
          case 3:
            allDay = 31;
            break;
          case 4:
            allDay = 30;
            break;
          case 5:
            allDay = 31;
            break;
          case 6:
            allDay = 30;
            break;
          case 7:
            allDay = 31;
            break;
          case 8:
            allDay = 31;
            break;
          case 9:
            allDay = 30;
            break;
          case 10:
            allDay = 31;
            break;
          case 11:
            allDay = 30;
            break;
          case 12:
            allDay = 31;
            break;
        }
        console.log(allDay, 'allday')
        return allDay
      },
      //判断某年某月的1号是星期几
      getFirstDay(_year, _month) {
        let allDay = 0, y = _year - 1, i = 1;
        allDay = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1;
        for (; i < _month; i++) {
          switch (i) {
            case 1:
              allDay += 31;
              break;
            case 2:
              if (this.runNian(_year)) {
                allDay += 29;
              }
              else {
                allDay += 28;
              }
              break;
            case 3:
              allDay += 31;
              break;
            case 4:
              allDay += 30;
              break;
            case 5:
              allDay += 31;
              break;
            case 6:
              allDay += 30;
              break;
            case 7:
              allDay += 31;
              break;
            case 8:
              allDay += 31;
              break;
            case 9:
              allDay += 30;
              break;
            case 10:
              allDay += 31;
              break;
            case 11:
              allDay += 30;
              break;
            case 12:
              allDay += 31;
              break;
          }
        }
        console.log(allDay % 7)
        let firstday = allDay % 7
        let firArrlength
        switch (firstday) {
          case 1:
            firArrlength = 1
            break;
          case 2:
            firArrlength = 2
            break;
          case 3:
            firArrlength = 3
            break;
          case 4:
            firArrlength = 4
            break;
          case 5:
            firArrlength = 5
            break;
          case 6:
            firArrlength = 6
            break;
          case 0:
            firArrlength = 7
            break;
        }

        let thisallday = this.getMonthDay(_year, _month)
        let beforethisallday
        let afterthisallday
        if (_month == 12) {
          beforethisallday = this.getMonthDay(_year, _month - 1)
          afterthisallday = this.getMonthDay(_year + 1, 1)
        } else if (_month == 1) {
          beforethisallday = this.getMonthDay(_year - 1, 12)
          afterthisallday = this.getMonthDay(_year, _month + 1)
        } else {
          beforethisallday = this.getMonthDay(_year, _month - 1)
          afterthisallday = this.getMonthDay(_year, _month + 1)
        }
        console.log(_month,'_month')
        console.log(beforethisallday,'beforethisallday')
        console.log(afterthisallday,'afterthisallday')
        const arr = []
        for (let i = 0; i < thisallday; i++) {
          arr.push(
            {day: i + 1}
          )
        }
        for (let i = 0; i < firArrlength - 1; i++) {
          arr.unshift(
            {day: beforethisallday - i}
          )
        }
        for (let i = 0; i < 42 - thisallday - (firArrlength - 1); i++) {
          arr.push(
            {day: i + 1}
          )
        }
        console.log(arr, 'arr')
        this.day = arr
        return allDay % 7;
      }

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    display: inline-block;
    vertical-align: top;
  }

  .dateselect-wxp {
    display: block;
    width: 260px;
    box-sizing: border-box;
    height: 36px;
    border: 1px solid #444;
    position: relative;
  }

  .dateinset {
    position: absolute;
    width: 100%;
    top: 36px;
    left: 0;
    z-index: 9999;
    background-color: #fff;
  }

  .title {
    font-size: 0px;
  }

  .title span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
  }

  .dateinset-table {
    width: 100%;
  }

  .dateinset-table-day {
    font-size: 0px;
  }

  .dateinset-table-day span {
    font-size: 14px;
    width: 14.2%;
  }
</style>
