<template>
    <view class="banner">
        <image class="banner-img" :src="dataList" mode=""></image>
    </view>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        dataList: String
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.banner {
    width: 100%;
    height: 300rpx;
}
.banner-img {
    width: 100%;
    height: 300rpx;
}
</style>
