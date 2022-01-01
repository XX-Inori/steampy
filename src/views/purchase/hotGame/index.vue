<template>
    <swipe />
    <p>大家都在买</p>
    <hotCard />
</template>

<script>
import Swipe from './components/Swipe'
import HotCard from './components/hotCard'
export default {
  components: {
    Swipe,
    HotCard
  }
}
</script>

<style lang="scss" scoped>
p{
  margin-bottom: 0px;
  margin-left: 18px;
  color: #000;
  font-size: 14px;
  font-weight: 800;
}
</style>
