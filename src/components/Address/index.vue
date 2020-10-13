<template>
  <div id="address">
      <Header>
          <i class="iconfont icon-prev" slot="left" @click="back"></i>
          <p slot="middle">收货地址</p>
          <router-link tag="i" class="iconfont icon--add3" to="/address/addaddress" slot="right"></router-link>
      </Header>
      <AddressItem v-if="this.$store.getters.sortAddress.length > 0"/>
      <div v-else style="width:100px;height:50px;bgckground-color:aqua;text-align:center;line-height:50px;margin:200px auto 0;">请添加地址</div>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import AddressItem from './AddressItem'
export default {
    name:'Adress',
    components:{
        Header,
        AddressItem
    },
    methods:{
        back() {
            this.$router.back()
        },
    },

}

</script>
<style lang="less" scoped>
#address{
    background-color: #f6f6f6;
    height: 1333px;
    overflow: auto;
    .icon--add3{
        color: black;
        font-size: 50px;
        font-weight: normal;
    }
}
</style>