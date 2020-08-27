<template>
  <div id="tabbar">
    <MainTabbar>
      <TabbarItem :path="'/home'">
        <i slot="item-icon" class="iconfont icon-shouye"></i>
        <p slot="item-text">首页</p>
      </TabbarItem>
      <TabbarItem :path="'/sort'">
        <i slot="item-icon" class="iconfont icon-leimupinleifenleileibie"></i>
        <p slot="item-text">分类</p>
      </TabbarItem>
      <TabbarItem :path="'/cart'">
        <i slot="item-icon" class="iconfont icon-gouwuche"></i>
        <p slot="item-text">购物车</p>
      </TabbarItem>
      <TabbarItem :path="'/mine'">
        <i slot="item-icon" class="iconfont icon-wode"></i>
        <p slot="item-text">我的</p>
      </TabbarItem>
    </MainTabbar>
  </div>
</template>

<script>
import MainTabbar from "@/components/Tabbar/mainTabbar.vue";
import TabbarItem from "@/components/Tabbar/tabbarItem.vue";

export default {

  name: 'Tabbar',
  components: {
    MainTabbar,
    TabbarItem,
  },
}

</script>
<style lang="less" scoped>
#tabbar{
  i{
    font-size: 20px;
  }
  p{
    font-size: 12px;
  }
}
</style>