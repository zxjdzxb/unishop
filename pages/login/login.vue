<template>
    <view class="login">
        <view class="avatar">
            <u-avatar text="北" fontSize="18" randomBgColor shape="square"></u-avatar>
        </view>
        <view class="form">
            <u--form :model="form" ref="uForm">
                <u-form-item class="email" label="邮箱" :labelWidth="60" prop="email">
                    <u-input placeholder="请输入邮箱" prefixIcon="email" v-model="form.email" prefixIconStyle="font-size: 48rpx;color: #37383b" border="bottom">
                        <template slot="suffix">
                            <u-code ref="uCode" @change="codeChange" seconds="20" changeText="X秒重新获取"></u-code>
                            <u-button @click="getCode" :text="tips" type="success" size="small"></u-button>
                        </template>
                    </u-input>
                </u-form-item>
                <u-form-item label="验证码" :labelWidth="60" prop="code">
                    <u-code-input v-model="form.code" mode="line" hairline></u-code-input>
                </u-form-item>
            </u--form>
        </view>
        <view class="ubtn">
            <u-button type="primary" :plain="true" :hairline="true" @click="submit">提交</u-button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '1660154581@qq.com',
                code: ''
            },
            tips: '',
            value: '',
            rules: {
                email: [
                    {
                        required: true,
                        message: '邮箱必填',
                        trigger: ['blur']
                    },
                    {
                        // 自定义验证函数，见上说明
                        validator: (rule, value, callback) => {
                            // 上面有说，返回true表示校验通过，返回false表示不通过
                            // uni.$u.test.mobile()就是返回true或者false的
                            return uni.$u.test.email(value);
                        },
                        message: '邮箱格式不正确',
                        // 触发器可以同时用blur和change
                        trigger: ['blur']
                    }
                ]
            }
        };
    },
    methods: {
        submit() {
            this.$refs.uForm
                .validate()
                .then((res) => {
                    this.$store
                        .dispatch('user/login', {
                            email: this.form.email,
                            code: this.form.code
                        })
                        .then((result) => {
                            uni.hideLoading();
                            // 登陆成功的结果
                            uni.$u.toast('验证码已发送');
                            uni.redirectTo({
                                url: '/pages/index/index'
                            });
                        });
                })
                .catch((errors) => {
                    uni.$u.toast('校验失败');
                });
        },
        codeChange(text) {
            this.tips = text;
        },
        loginBut: function () {
            // 调用状态管理内的函数请求
            // user是store/index.js下定义的user名称，login是user这个文件内的请求函数
            // code跟iv是传送到store/modules/user.js下login函数内的参数
            this.$store
                .dispatch('user/login', {
                    iv: value[0][1].iv,
                    code: value[1].code
                })
                .then((result) => {
                    // 登陆成功的结果
                    console.log(result);
                });
        },
        getCode() {
            if (this.$refs.uCode.canGetCode) {
                // 模拟向后端请求验证码
                uni.showLoading({
                    title: '正在获取验证码'
                });
                this.$store
                    .dispatch('user/validation', {
                        email: this.form.email
                    })
                    .then((result) => {
                        uni.hideLoading();
                        // 登陆成功的结果
                        console.log(result);
                        uni.$u.toast('验证码已发送');
                        // 通知验证码组件内部开始倒计时
                        this.$refs.uCode.start();
                    });
            } else {
                uni.$u.toast('倒计时结束后再发送');
            }
        },
        change(e) {
            console.log('change', e);
        }
    },
    onReady() {
        this.$refs.uForm.setRules(this.rules);
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
