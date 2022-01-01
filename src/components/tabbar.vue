<template>
    <div class="tabbar-wrapper">
        <van-tabbar v-model="active">
        <van-tabbar-item replace to="/home" name="cart-o" icon="home-o">购买</van-tabbar-item>
        <van-tabbar-item replace to="/home" name="search" icon="shop-o">出售</van-tabbar-item>
        <van-tabbar-item replace to="/home" name="friends" icon="friends-o">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar-wrapper{
    background-color: #000;
}
</style>
