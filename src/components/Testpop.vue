<template>
  <div class="test" v-show="showtype">
    <div>
      <h1>I'm OK！</h1>
      <button @click="closetest">click me!</button>
    </div>
  </div>
</template>

<script>
  import Testpop from './Testpop.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Hello World!',
        showtype: true
      }
    },
    components: {
      Testpop
    },
    methods: {
      closetest() {
        this.showtype = false
      },
      opentest(){
        this.showtype = true
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
  }

  .test > div {
    position: fixed;
    width: 300px;
    height: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  canvas {
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .content {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 100px;
    width: 1200px;
    box-shadow: 1px 1px 5px 0px #cccccc;
    min-height: 70vh;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.97);
  }
</style>
