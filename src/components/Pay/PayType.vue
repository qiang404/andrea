<template>
    <div v-show="isShow" class="showPayType" @click="cancel">
        <div class="payWarp">
            <p :class="active?'active':''" @click="changePayType('zfb')"><span>支付宝支付</span><i class="iconfont icon-duigou"></i></p>
            <p :class="!active?'active':''"  @click="changePayType('wx')"><span>微信支付</span><i class="iconfont icon-duigou"></i></p>
            <p  @click="cancel"><span>取消</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PayType',
        props:{
            isShow:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                active:true,
            }
        },
        methods: {
            cancel() {
                this.$emit('callback',false,this.active)
            },
            changePayType(type) {
                type === 'wx' ? this.active = false : this.active = true
            }
        },
    }
</script>
<style lang="less" scoped>
    .showPayType {
        position: fixed;
        top: 0;
        left: 0;
        height: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        .payWarp{
            position: fixed;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: #fff;
            height: 400px;
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            border-radius: 20px 20px 0 0;
            animation: mymove .3s;
            p{
                flex: 1;
                font-size: 32px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &:nth-child(3){
                    justify-content: center;
                    span{
                        background-color: #f6f6f6;
                        display: inline-block;
                        width: 85%;
                        height: 60%;
                        border-radius: 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
            p+p{
                border-top: 1px solid #f6f6f6;
            }
        }
        .active{
            color: darkorange;
        }
    }
    @keyframes mymove {
        0% {
            height: 0;
            opacity: 0;
        }
        100%{
            height: 400px;
            opacity: 1;
        }
    }
</style>