<template>
  <div @click="pushPath" class="item" :style="active">
    <slot name="item-icon"></slot>
    <slot name="item-text" ></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props:['path'],
  data() {
    return {
      isFirst:true,
    }
  },
  computed: {
    active(){
      return this.$route.path.indexOf(this.path) !== -1 ?{color:'#ff3344'} :{}
    }
  },
  methods: {
    pushPath() {
      if (this.$router.currentRoute.path == this.path) return
      this.$router.push(this.path)

    }
  },
}
</script>
<style lang="less">
.item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>