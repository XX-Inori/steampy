<template>
    <van-list
    v-model:loading="state.loading"
    :finished="state.finished"
    @load="onLoad"
    >
    <card
    v-for="item in state.cardList"
    :key="item.id"
    :cardData="item"
    />
    </van-list>
</template>

<script>
import { reactive } from 'vue'
import { listHot } from '@/api/steamGame'
import Card from '@/components/card'
export default {
  components: {
    Card
  },
  setup() {
    const state = reactive({
      cardList: [],
      loading: false,
      finished: false,
      params: {
        pageNumber: 1,
        pageSize: 10,
        sort: 'createTime',
        order: 'desc'
      }
    })
    const onLoad = () => {
      listHot(state.params).then(res => {
        if (res.code === 401) {
          state.finished = true
          return
        }
        state.cardList.push(...res.result.content)
        state.params.pageNumber += 1
        state.loading = false
      })
    }
    return { state, onLoad }
  }
}
</script>
