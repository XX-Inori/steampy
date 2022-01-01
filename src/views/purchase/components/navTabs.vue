<template>
  <van-tabs v-model:active="state.active" swipeable line-width= 0 >
    <van-tab
    v-for="item in tabs"
    :key="item.title"
    :title="item.title"
    >
    <component
    :is="item.com"
    >
    </component>
    </van-tab>
  </van-tabs>
</template>

<script>
import { reactive } from 'vue'
import HotGame from '../hotGame'
export default {
  setup() {
    const tabs = [{
      title: '热门游戏',
      com: HotGame
    },
    {
      title: 'CDKey'
    },
    {
      title: '余额'
    },
    {
      title: '推荐'
    }]
    const state = reactive({
      active: ''
    })
    return { state, tabs }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .van-tab--active{
  font-size: 16px
}
</style>
