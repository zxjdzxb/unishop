<template>
    <!-- HBuilderX 2.6.3+ 新增 page-meta, 详情：https://uniapp.dcloud.io/component/page-meta -->
    <view class="index">
        <u-navbar title="首页" :bgColor="bgColor">
            <view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="19"></u-icon>
                <u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
                <u-icon @click="search" name="search" size="20"></u-icon>
            </view>
        </u-navbar>
        <view class="contain" :style="'margin-top:' + navHeight + 'rpx;'">
            <scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
                <view :id="'top' + index" class="scroll-item" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
                    <text :class="topBarIndex === index ? 'f-active-color' : 'f-color'">{{ item.name }}</text>
                </view>
            </scroll-view>

            <swiper @change="onChangeTab" :current="topBarIndex" :style="'height:' + clentHeight + 'px;'">
                <swiper-item v-for="(item, index) in newTopBar" :key="index">
                    <scroll-view scroll-y="true" :style="'height:' + clentHeight + 'px;'" @scrolltolower="DloadMore(index)">
                        <block v-if="item.data.length > 0">
                            <block v-for="(k, i) in item.data" :key="i">
                                <!--推荐-->
                                <IndexSwiper v-if="k.type === 'swiperList'" :dataList="k.data"></IndexSwiper>
                                <template v-if="k.type === 'recommendList'">
                                    <Recommend :dataList="k.data"></Recommend>
                                    <Card cardTitle="猜你喜欢"></Card>
                                </template>

                                <!--运动户外....-->
                                <Banner v-if="k.type === 'bannerList'" :dataList="k.imgUrl"></Banner>

                                <template v-if="k.type === 'iconsList'">
                                    <Icons :dataList="k.data"></Icons>
                                    <Card cardTitle="热销爆品"></Card>
                                </template>

                                <template v-if="k.type === 'hotList'">
                                    <Hot :dataList="k.data"></Hot>
                                    <Card cardTitle="推荐店铺"></Card>
                                </template>

                                <template v-if="k.type === 'shopList'">
                                    <Shop :dataList="k.data"></Shop>
                                    <Card cardTitle="为您推荐"></Card>
                                </template>

                                <CommodityList v-if="k.type === 'commodityList'" :dataList="k.data"></CommodityList>
                            </block>
                        </block>
                        <view v-else>暂无数据...</view>
                        <view class="load-text f-color">
                            {{ item.loadText }}
                        </view>
                    </scroll-view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script>
import $http from '@/common/api/request.js';

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
            page: 1,
            isScrollToLower: false,
            //承载数据
            newTopBar: []
        };
    },
    onLoad() {
        this.navHeight = app.globalData.navHeight + 10;
        this.__init();
    },
    onReady() {
        uni.getSystemInfo({
            success: (res) => {
                this.clentHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight() - 88;
            }
        });
    },
    methods: {
        __init() {
            $http
                .request({
                    url: '/index_list/data'
                })
                .then((res) => {
                    this.topBar = res.topBar;
                    this.newTopBar = this.initData(res);
                })
                .catch(() => {
                    uni.showToast({
                        title: '请求失败',
                        icon: 'none'
                    });
                });
        },
        initData(res) {
            let arr = [];
            for (let i = 0; i < this.topBar.length; i++) {
                let obj = {
                    data: [],
                    load: 'first',
                    loadText: '上拉加载更多...'
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
            //每一次滑动==》赋值first
            if (this.newTopBar[this.topBarIndex].load === 'first') {
                this.addData();
            }
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
        },
        //对应显示不同数据
        addData(callback) {
            //拿到索引
            let index = this.topBarIndex;
            //拿到id===>不同的板块
            let id = this.topBar[index].id;
            //请求不同的数据
            let page = Math.ceil(this.newTopBar[index].data.length / 4) + 1;
            $http
                .request({
                    url: '/index_list/' + id + '/data/' + page + ''
                })
                .then((res) => {
                    this.page = page;
                    this.newTopBar[index].data = [...this.newTopBar[index].data, ...res];
                    console.log(this.newTopBar[index].data);
                })
                .catch(() => {
                    uni.showToast({
                        title: '请求失败',
                        icon: 'none'
                    });
                });

            //当请求结束后，重新赋值
            this.newTopBar[index].load = 'last';

            if (typeof callback === 'function') {
                callback();
            }
        },
        //上拉加载更多
        loadMore(index) {
            if (this.isScrollToLower) {
                return;
            }
            this.isScrollToLower = true;
            //请求完数据 ，文字提示信息又换成【上拉加载更多...】
            this.newTopBar[index].loadText = '加载中...';
            this.addData(() => {
                this.newTopBar[index].loadText = '上拉加载更多...';
                this.isScrollToLower = false;
            });
        },
        // 防抖就是「回城被打断」
        debounce(fn, delay) {
            let timer = null;
            return () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    fn();
                }, delay);
            };
        },
        DloadMore(index) {
            this.debounce(this.loadMore(index), 1000);
        },
        search() {
            uni.navigateTo({
                url: '../search/search'
            });
        }
    }
};
</script>

<style scoped lang="scss">
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
.load-text {
    border-top: 2rpx solid #636263;
    line-height: 60rpx;
}
</style>
