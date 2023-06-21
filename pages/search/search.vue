<template>
    <view class="search">
        <view class="header">
            <view class="input">
                <u-input placeholder="搜索" prefixIcon="search" prefixIconStyle="font-size: 22px;color: #79795a" border="surround" v-model="keyword" @change="change"></u-input>
            </view>
            <view class="btn">
                <u-button @click="search" type="primary" text="搜索"></u-button>
            </view>
        </view>
        <Lines></Lines>
        <view class="content">
            <view class="search-item">
                <view class="search-title">
                    <view class="f-color">最近搜索</view>
                    <view class="iconfont icon-iconset0213" @tap="clearHistory"></view>
                </view>
                <view>
                    <view v-if="searchData.length > 0">
                        <view class="search-name f-color" v-for="(item, index) in searchData" :key="index">
                            {{ item }}
                        </view>
                    </view>
                    <view v-else class="search-end">暂无搜索记录</view>
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
            keyword: '',
            //搜索过的词记录
            searchData: []
        };
    },
    onLoad() {
        uni.getStorage({
            key: 'searchData',
            success: (res) => {
                this.searchData = JSON.parse(res.data);
            }
        });
    },
    methods: {
        change(e) {
            console.log('change', e);
        },
        search() {
            if (this.keyword === '') {
                return uni.showToast({
                    title: '关键词不能为空',
                    icon: 'none'
                });
            } else {
                uni.navigateTo({
                    url: '../search-list/search-list?keyword=' + this.keyword + ''
                });
            }
            uni.hideKeyboard();
            this.addSearch();
        },
        //记录最近搜索词
        addSearch() {
            let idx = this.searchData.indexOf(this.keyword);
            if (idx < 0) {
                this.searchData.unshift(this.keyword);
            } else {
                this.searchData.unshift(this.searchData.splice(idx, 1)[0]);
            }

            uni.setStorage({
                key: 'searchData',
                data: JSON.stringify(this.searchData)
            });
        },
        //清除搜索记录
        clearHistory() {
            uni.showModal({
                title: '重要提示',
                content: '是否要清除搜索记录',
                cancelText: '取消',
                confirmText: '确定',
                success: (res) => {
                    if (res.confirm) {
                        uni.removeStorage({
                            key: 'searchData'
                        });
                        this.searchData = [];
                    }
                }
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
    .search-end {
        text-align: center;
    }
}
</style>
