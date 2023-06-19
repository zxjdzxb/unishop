<template>
    <view class="icons">
        <view class="icons-item" v-for="(item, index) in dataList" :key="inex">
            <image class="icons-img" :src="item.imgUrl" mode=""></image>
            <text class="f-color">{{ item.name }}</text>
        </view>
    </view>
</template>

<script>
export default {
    name: 'Icons',
    props: {
        dataList: Array
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.icons {
    display: flex;
    flex-wrap: wrap;
}
.icons-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rpx;
}
.icons-img {
    width: 110rpx;
    height: 110rpx;
}
</style>
