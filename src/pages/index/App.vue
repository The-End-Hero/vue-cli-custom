<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<transition name="slide-left" mode="out-in">-->
      <router-view/>
    <!--</transition>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform .5s;
  transform-origin: left;
}
.slide-left-enter, .slide-left-leave-active {
  transform: scale(0,1);
}
</style>
