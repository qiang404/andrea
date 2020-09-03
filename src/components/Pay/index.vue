<template>
  <div id="Pay">
      <Header>
          <i class="iconfont icon-zuojiantou" slot="left"></i>
          <p slot="middle">支付订单</p>
          <span slot="right"></span>
      </Header>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
export default {
    name: 'Pay',
    components:{
        Header
    }

}

</script>
<style lang="less" scoped>
</style>