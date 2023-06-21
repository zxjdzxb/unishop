<template>
    <view class="search">
        <view class="header">
            <view class="input">
                <u-input placeholder="搜索" prefixIcon="search" prefixIconStyle="font-size: 22px;color: #79795a" border="surround" v-model="value" @change="change"></u-input>
            </view>
            <view class="btn">
                <u-button @click="searchList" type="primary" text="搜索"></u-button>
            </view>
        </view>
        <Lines></Lines>
        <view class="content">
            <view class="search-item">
                <view class="search-title">
                    <view class="f-color">最近搜索</view>
                    <view class="iconfont icon-iconset0213"></view>
                </view>
                <view>
                    <view class="search-name f-color">四件套</view>
                    <view class="search-name f-color">面膜</view>
                </view>
            </view>

            <view class="search-item">
                <view class="search-title">
                    <view class="f-color">热门搜索</view>
                </view>
                <view>
                    <view class="search-name f-color">四件套</view>
                    <view class="search-name f-color">面膜</view>
                    <view class="search-name f-color">四件套</view>
                    <view class="search-name f-color">面膜</view>
                    <view class="search-name f-color">四件套</view>
                    <view class="search-name f-color">面膜</view>
                    <view class="search-name f-color">四件套</view>
                    <view class="search-name f-color">面膜</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        };
    },
    methods: {
        change(e) {
            console.log('change', e);
        },
        searchList() {
            uni.navigateTo({
                url: '../search-list/search-list'
            });
        }
    }
};
</script>

<style lang="scss">
.header {
    display: flex;
    background-color: #fff;
    .input {
        padding: 20rpx 20rpx;
        width: 90%;
    }
    .btn {
        padding: 20rpx 20rpx;
    }
}
.content {
    .search-item {
        padding: 20rpx;
    }
    .search-title {
        display: flex;
        justify-content: space-between;
    }
    .search-name {
        padding: 4rpx 24rpx;
        background-color: #e1e1e1;
        display: inline-block;
        border-radius: 26rpx;
        margin: 10rpx;
    }
}
</style>
