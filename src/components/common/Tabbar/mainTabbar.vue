<template>
  <div :style="styleObj" class="tabbarItem">
    <slot></slot>
  </div>
</template>

<script>
import TabbarItem from "@/components/common/Tabbar/tabbarItem.vue";
export default {
  name: "MainTabbar",
  components:{
    TabbarItem
  },
  props:['color'],
  data() {
    return {
      styleObj:{'background-color':this.color}
    }
  },
};
</script>
<style lang="less">
.tabbarItem {
  height: 98px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  // background-color: #fcfcfc;
  border-top: 1px solid #e3e3e3;
  display: flex;
}
</style>