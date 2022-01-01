<template>
    <van-card
    :price="(cardData.oriPrice*cardData.discount).toFixed(2)"
    :desc="cardData.gameName"
    :title="cardData.gameNameCn"
    :thumb="cardData.gameAva"
    :origin-price="cardData.oriPrice"
    >
    <template #num>
      <span>{{`-${((1-cardData.discount)*100).toFixed(2)}%`}}</span>
    </template>
    </van-card>
    <van-divider />
</template>

<script>
import { Card } from 'vant'
import { reactive } from 'vue'

export default {
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    [Card.name]: Card
  },
  setup() {
    const state = reactive({
      data: []
    })
    return { state }
  }

}
</script>

<style lang="scss" scoped>
.van-card{
  background: #fff;
  ::v-deep .van-card__thumb{
    width: 45%;
    margin-right: 5%;
  }
}

.van-divider{
  margin: 0;
}
span{
  display: inline-block;
  background-color: #22ac38;
  color: #fff;
  padding: 0 2px;
  border-radius: 2px;
}
</style>
