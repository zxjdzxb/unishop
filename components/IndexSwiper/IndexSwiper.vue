<template>
    <view>
        <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
            <swiper-item>
                <view class="swiper-item">
                    <image class="swiper-img" src="@/static/c1.png" mode=""></image>
                </view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item">
                    <image class="swiper-img" src="@/static/c2.png" mode=""></image>
                </view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item">
                    <image class="swiper-img" src="@/static/c3.png" mode=""></image>
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
export default {
    name: 'IndexSwiper',
    data() {
        return {};
    }
};
</script>

<style lang="scss">
swiper {
    width: 100%;
    height: 400rpx;
}
.swiper-img {
    width: 100%;
    height: 400rpx;
}
</style>
