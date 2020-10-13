<template>
  <div>支付成功{{second}}秒后返回</div>
</template>

<script>
export default {
    name:'PaySuccess',
    data() {
        return {
            second:5
        }
    },
    created() {
        this.$request({
            method:'post',
            url:'/order/changeorder',
            data:{
                uid:this.$store.state.user.uid,
                token:this.$store.state.user.token,
                oid:this.$route.params.oid,
                payState:1
            }
        }).then(() => {})
    },
    mounted() {
       let timer = setInterval(() => {
            this.second--
            if (this.second === 0) {
                this.$router.push('/order')
                clearInterval(timer)
            }
        },1000)
    }

}

</script>
<style lang="less" scoped>
</style>