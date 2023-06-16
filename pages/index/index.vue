<template>
    <!-- HBuilderX 2.6.3+ 新增 page-meta, 详情：https://uniapp.dcloud.io/component/page-meta -->
    <view class="container">
        <cover-view class="status_bar">
            <u-sticky offset-top="200">
                <!-- 这里是状态栏 -->
                <u-navbar title="首页" :bgColor="bgColor">
                    <view class="u-nav-slot" slot="left">
                        <u-icon name="arrow-left" size="19"></u-icon>
                        <u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
                        <u-icon name="home" size="20"></u-icon>
                    </view>
                </u-navbar>
            </u-sticky>
        </cover-view>
        <view>
            <view>自己封装</view>
            <IndexSwiper></IndexSwiper>
            <Recommend></Recommend>
            <Cart cardTitle="猜你喜欢"></Cart>
            <CommodityList></CommodityList>
            <Banner></Banner>
            <Icons></Icons>
            <Cart cardTitle="热门推荐"></Cart>
            <Hot></Hot>
        </view>
        <view class="uview">
            <Cart cardTitle="Uview"></Cart>
            <u-swiper :list="list1"></u-swiper>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            bgColor: '#ffffff',
            list1: ['https://cdn.uviewui.com/uview/swiper/swiper1.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper3.png']
        };
    },
    onLoad() {
        //暂时根据状态栏与导航栏高度，设置弹窗距离顶部距离，大佬们若有好的方法欢迎补充！！！
        // uni.getSystemInfo({
        //     success: (e) => {
        //         let statusBar = 0; //状态栏高度
        //         let customBar = 0; // 状态栏高度 + 导航栏高度
        //         console.log('app-plus', e);
        //         // #ifdef APP-PLUS
        //         statusBar = e.statusBarHeight;
        //         customBar = e.statusBarHeight + 44;
        //         // #endif
        //         // #ifdef H5
        //         statusBar = 0;
        //         customBar = e.statusBarHeight + 44;
        //         // #endif
        //         console.log('statusBar', statusBar);
        //         console.log('customBar', customBar);
        //         this.popupTop = customBar;
        //     }
        // });
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
