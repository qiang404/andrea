<template>
  <div id="tabbar">
    <MainTabbar :color="'white'">
      <TabbarItem :path="'/home'">
        <i slot="item-icon" class="iconfont icon-shouye"></i>
        <p slot="item-text">首页</p>
      </TabbarItem>
      <TabbarItem :path="'/sort'">
        <i slot="item-icon" class="iconfont icon-fenleishouye"></i>
        <p slot="item-text">分类</p>
      </TabbarItem>
      <TabbarItem :path="'/cart'">
        <i slot="item-icon" class="iconfont icon-gouwuche"></i>
        <p slot="item-text">购物车</p>
      </TabbarItem>
      <TabbarItem :path="'/mine'">
        <img slot="item-icon" src="@/assets/img/mine.png">
        <p slot="item-text">我的</p>
      </TabbarItem>
    </MainTabbar>
  </div>
</template>

<script>
import MainTabbar from "@/components/common/Tabbar/mainTabbar.vue";
import TabbarItem from "@/components/common/Tabbar/tabbarItem.vue";

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
  height: 100px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  i{
    font-size: 40px;
  }
  p{
    font-size: 24px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 4px;
  }
}
</style>