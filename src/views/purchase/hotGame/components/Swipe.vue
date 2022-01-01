<template>
  <van-swipe :autoplay="3000" lazy-render :show-indicators="false">
    <van-swipe-item v-for="image in state.images" :key="image">
      <img :src="image.ava" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { Swipe, SwipeItem } from 'vant'
import { listBanner } from '@/api/steamCommon'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    const state = reactive({
      images: []
    })
    const getListBanner = () => {
      const params = {
        pageNumber: 1,
        pageSize: 10,
        sort: 'createTime',
        order: 'desc'
      }
      listBanner(params).then(res => {
        state.images = res.result
      })
    }
    onMounted(getListBanner)
    return { state, getListBanner }
  }
}
</script>

<style lang="scss" scoped>
.van-swipe-item{
  img{
    max-width: 100%;
  }
}
</style>
