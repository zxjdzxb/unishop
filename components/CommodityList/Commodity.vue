<template>
    <view class="commodity" :style="'flex-wrap:' + wrap + ';'">
        <!-- 单个商品组件 -->

        <view class="commodity-item" v-for="(item, index) in dataList" :key="index" :style="'width:' + itemW + ';'">
            <image class="commodity-img" :src="item.imgUrl" mode="" :style="'height:' + bigH + ';'"></image>

            <view class="commodity-content">
                <text class="commodity-name" :style="'font-size:' + nameSize + ';'">{{ item.name }}</text>
                <view>
                    <text class="pprice">¥{{ item.pprice }}</text>
                    <text class="oprice">¥{{ item.oprice }}</text>
                </view>
                <text class="discount">{{ item.discount }}折</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'Commodity',
    props: {
        dataList: Array,
        itemW: {
            type: String,
            default: '375rpx'
        },
        bigH: {
            type: String,
            default: '375rpx'
        },
        //是否换行
        wrap: {
            type: String,
            default: 'wrap'
        },
        //商品文字大小
        nameSize: {
            type: String,
            default: '26rpx'
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.commodity {
    display: flex;
}
.commodity-item {
    padding-bottom: 20rpx;
}
.commodity-img {
    width: 100%;
}
.commodity-content {
    text-align: center;
}
.commodity-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333333;
    word-break: break-all;
    padding: 6rpx 20rpx;
}
.oprice {
    text-decoration: line-through;
    font-size: 24rpx;
    color: #999999;
}
.discount {
    border-radius: 4rpx;
    border: 1px solid #ff3333;
    padding: 2rpx 10rpx;
    font-size: 20rpx;
    color: #ff3333;
}
</style>
