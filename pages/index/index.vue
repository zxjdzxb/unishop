<template>
    <view>{{ title }}</view>
</template>

<script>
export default {
    data() {
        return {
            title: '1433223'
        };
    },
    methods: {},
    onReady() {
        // this.$refs.uForm.setRules(this.rules)
    },
    onLoad() {}
};
</script>
<style lang="scss">
.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    padding: 20rpx;
}

.ubtn {
    margin: 100rpx 60rpx;
}
</style>
