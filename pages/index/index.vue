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

        <view class="contain" :style="'margin-top:' + navHeight + 'rpx;'">
            <scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
                <view class="scroll-item" v-for="(item, index) in topBar" :key="index" :id="'top' + index" @tap="changeTab(index)">
                    <text :class="topBarIndex === index ? 'f-active-color' : 'f-color'">{{ item.name }}</text>
                </view>
            </scroll-view>

            <swiper @change="onChangeTab" :current="topBarIndex">
                <swiper-item v-for="(item, index) in topBar" :key="index">
                    <view>{{ item.name }}</view>
                </swiper-item>
            </swiper>
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
        </view>
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
            navHeight: 0,
            //选中的索引
            topBarIndex: 0,
            //顶栏跟随的索引id值
            scrollIntoIndex: 'top0',
            //顶栏数据
            topBar: [{ name: '推荐' }, { name: '运动户外' }, { name: '服饰内衣' }, { name: '鞋靴箱包' }, { name: '美妆个护' }, { name: '家居数码' }, { name: '食品母婴' }]
        };
    },
    onLoad() {
        this.navHeight = app.globalData.navHeight + 10;
    },
    methods: {
        changeTab(index) {
            if (this.topBarIndex === index) {
                return;
            }
            this.topBarIndex = index;
            this.scrollIntoIndex = 'top' + index;
        },
        onChangeTab(e) {
            this.changeTab(e.detail.current);
        }
    }
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
.scroll-content {
    width: 100%;
    height: 80rpx;
    white-space: nowrap;
}
.scroll-item {
    display: inline-block;
    padding: 10rpx 30rpx;
    font-size: 32rpx;
}
.f-active-color {
    color: #49bdfb;
    padding: 10rpx 0;
    border-bottom: 6rpx solid #49bdfb;
}
</style>
