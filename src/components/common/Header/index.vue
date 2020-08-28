<template>
  <div id="header">
      <slot name="left"></slot>
      <slot name="middle"></slot>
      <slot name="right"></slot>
  </div>
</template>

<script>
export default {
    name : 'Header',

}

</script>
<style lang="less" scoped>
#header{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    height: 108px;
    align-items: center;
    font-weight: bold;
}
</style>