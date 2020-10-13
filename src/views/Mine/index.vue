<template>
  <div id="Mine">
    <div v-if="$store.state.user.token" class="orderdetail" @click="visitOrder">
      查看订单
    </div>
    <router-view></router-view>
    <Tabbar v-if="$store.state.user.token" />
  </div>
</template>

<script>
  import Tabbar from '@/components/common/Tabbar'

  export default {
    name: 'Mine',
    components: {
      Tabbar,
    },
    data() {
      return {}
    },
    methods: {
      visitOrder() {
        this.$router.push('/order')
      }
    },
    activated() {}

  }
</script>
<style lang="less" scoped>
  #Mine {
    width: 100%;
    height: 1333px;

    .orderdetail {
      width: 200px;
      height: 100px;
      background-color: aqua;
      margin: 600px auto 0;
      text-align: center;
      line-height: 100px;
      border-radius: 20px;
      color: rgb(224, 146, 56);
    }
  }
</style>