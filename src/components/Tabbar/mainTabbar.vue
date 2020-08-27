<template>
  <div class="tabbarItem">
    <slot></slot>
  </div>
</template>

<script>
import TabbarItem from "@/components/Tabbar/tabbarItem.vue";
export default {
  name: "MainTabbar",
  comments: [TabbarItem],
};
</script>
<style lang="less">
.tabbarItem {
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fcfcfc;
  border-top: 1px solid #e3e3e3;
  display: flex;
}
</style>