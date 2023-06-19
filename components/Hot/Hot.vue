<template>
    <view class="hot">
        <Commodity :dataList="dataList" itemW="250rpx" bigH="220rpx"></Commodity>
    </view>
</template>

<script>
import Commodity from '../CommodityList/Commodity.vue';
export default {
    name: 'Hot',
    components: { Commodity },
    props: {
        dataList: Array
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss"></style>
