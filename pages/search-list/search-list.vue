<template>
    <view>
        <view class="header">
            <view class="input">
                <u-input placeholder="筛选" prefixIcon="search" prefixIconStyle="font-size: 22px;color: #79795a" border="surround" v-model="keyword" @change="change"></u-input>
            </view>
            <view class="btn">
                <u-button @click="searchList" type="primary" text="筛选"></u-button>
            </view>
        </view>
        <ShopList :keyword="keyword"></ShopList>
    </view>
</template>

<script>
export default {
    data() {
        return {
            keyword: ''
        };
    },
    onLoad(e) {
        this.keyword = e.keyword;
        // #ifdef APP-PLUS
        var webView = this.$mp.page.$getAppWebview();
        webView.setTitleNViewSearchInputText(e.keyword);
        // #endif
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
</style>
