<template>
  <div id="address">
      <Header>
          <i class="iconfont icon-prev" slot="left" @click="back"></i>
          <p slot="middle">收货地址</p>
          <i class="iconfont icon--add3" slot="right"></i>
      </Header>
      <AddressItem/>
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
        }
    }

}

</script>
<style lang="less" scoped>
#address{
    background-color: #f6f6f6;
    height: 1333px;
    .icon--add3{
        color: black;
        font-size: 50px;
        font-weight: normal;
    }
}
</style>