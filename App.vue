<script>
import { systemInfo } from '@/common/system-info.js';
export default {
    globalData: {
        navHeight: 0
    },
    onLaunch: function () {
        console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！');
        this.globalData.navHeight = systemInfo().navHeight + systemInfo().statusBarHeight; //头部导航栏总高度
    },
    onShow: function () {
        console.log('App Show');
    },
    onHide: function () {
        console.log('App Hide');
    }
};
</script>
//
<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uni-scss/index.scss';
/* #ifndef APP-NVUE */
@import '@/static/customicons.css';
@import 'uview-ui/index.scss';
@import '@/common/iconfont.css';
@import '@/common/common.css';

// 设置整个项目的背景色
page {
    background-color: #ffffff;
    margin: 0;
    padding: 0;
}
page::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
    display: none;
}

/* #endif */
.example-info {
    font-size: 14px;
    color: #333;
    padding: 10px;
}
</style>
