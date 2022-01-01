<template>
  <div id="app-wrapper">
   <router-view/>
  <tabbar />
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app-wrapper{
  padding-bottom: 15%;
}
</style>
