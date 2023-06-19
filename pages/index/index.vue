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

            <swiper @change="onChangeTab" :current="topBarIndex" :style="'height:' + clentHeight + 'px;'">
                <swiper-item v-for="(item, index) in newTopBar" :key="index">
                    <scroll-view scroll-y="true" :style="'height:' + clentHeight + 'px;'">
                        <block v-if="item.data.length > 0">
                            <block v-for="(k, i) in item.data" :key="i">
                                <IndexSwiper v-if="k.type === 'swiperList'" :dataList="k.data"></IndexSwiper>
                                <template v-if="k.type === 'recommendList'">
                                    <Recommend :dataList="k.data"></Recommend>
                                    <Card cardTitle="猜你喜欢"></Card>
                                </template>
                                <CommodityList v-if="k.type === 'commodityList'" :dataList="k.data"></CommodityList>
                            </block>
                        </block>
                        <view v-else>暂无数据...</view>
                    </scroll-view>
                </swiper-item>
            </swiper>
        </view>
        <!--      <view class="uview">
            <Cart cardTitle="Uview"></Cart>
            <u-swiper :list="list1"></u-swiper>
        </view> -->
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
            clentHeight: 0,
            //顶栏数据
            topBar: [],
            //承载数据
            newTopBar: []
        };
    },
    onLoad() {
        this.navHeight = app.globalData.navHeight + 10;
        this.__init();
    },
    onReady() {
        // let view = uni.createSelectorQuery().select('.home-data');
        // // console.log(view);
        // view.boundingClientRect((data) => {
        //     // console.log(data);
        //     this.clentHeight = 2000;
        //     // this.clentHeight = data.height;
        // }).exec();
        uni.getSystemInfo({
            success: (res) => {
                console.log(uni.upx2px(80), this.getClientHeight());
                this.clentHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight()-88;
            }
        });
    },
    methods: {
        __init() {
            uni.request({
                url: 'http://192.168.8.164:3000/api/index_list/data',
                success: (res) => {
                    let data = res.data.data;
                    console.log(data);
                    this.topBar = data.topBar;
                    this.newTopBar = this.initData(data);
                }
            });
        },
        initData(res) {
            let arr = [];
            for (let i = 0; i < this.topBar.length; i++) {
                let obj = {
                    data: []
                };
                //获取首次数据
                if (i == 0) {
                    obj.data = res.data;
                }
                arr.push(obj);
            }
            return arr;
        },
        changeTab(index) {
            if (this.topBarIndex === index) {
                return;
            }
            this.topBarIndex = index;
            this.scrollIntoIndex = 'top' + index;
        },
        onChangeTab(e) {
            this.changeTab(e.detail.current);
        },
        //获取可视区域高度【兼容】
        getClientHeight() {
            const res = uni.getSystemInfoSync();
            const system = res.platform;
            if (system === 'ios') {
                return 44 + res.statusBarHeight;
            } else if (system === 'android') {
                return 48 + res.statusBarHeight;
            } else {
                return 0;
            }
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
