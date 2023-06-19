<template>
    <view>
        <Commodity :dataList="dataList"></Commodity>
    </view>
</template>

<script>
import Commodity from './Commodity.vue';
export default {
    name: 'CommodityList',
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
