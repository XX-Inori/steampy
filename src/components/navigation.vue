<template>
<nav>
    <van-row justify="space-between">
        <van-col span="6">
            <img src="@/assets/img/logo.png" alt="logo" />
            <span>steamPy</span>
        </van-col>
        <van-col span="2">
            <van-icon name="search" size="24" />
        </van-col>
    </van-row>
</nav>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav{
    padding: 10px 20px;
    .van-col{
        display: flex;
        align-items: center;
        img{
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
}
</style>
