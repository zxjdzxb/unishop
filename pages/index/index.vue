<template>
    <!-- HBuilderX 2.6.3+ 新增 page-meta, 详情：https://uniapp.dcloud.io/component/page-meta -->
    <view class="container">
        <!-- 这里是状态栏 -->
        <u-navbar title="首页" :bgColor="bgColor">
            <view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="19"></u-icon>
                <u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
                <u-icon name="home" size="20"></u-icon>
            </view>
        </u-navbar>

        <cover-view class="contain" :style="'margin-top:' + navHeight + 'rpx'">
            <cover-view>自己封装</cover-view>
            <IndexSwiper></IndexSwiper>
            <Recommend></Recommend>
            <Cart cardTitle="猜你喜欢"></Cart>
            <CommodityList></CommodityList>
            <Banner></Banner>
            <Icons></Icons>
            <Cart cardTitle="热门推荐"></Cart>
            <Hot></Hot>
            <Shop></Shop>
        </cover-view>
        <view class="uview">
            <Cart cardTitle="Uview"></Cart>
            <u-swiper :list="list1"></u-swiper>
        </view>
    </view>
</template>

<script>
const app = getApp();
export default {
    data() {
        return {
            bgColor: '#ffffff',
            list1: ['https://cdn.uviewui.com/uview/swiper/swiper1.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper3.png'],
            navHeight: 0
        };
    },
    onLoad() {
        this.navHeight = app.globalData.navHeight + 10;
        console.log(this.navHeight);
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-self: start;
}
.status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin: 20rpx 0;
}
.u-nav-slot {
    display: flex;
}
</style>
