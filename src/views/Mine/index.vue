<template>
  <div id="Mine">
    <router-view></router-view>
    <Tabbar v-if="$store.state.token"/>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar'

export default {
    name : 'Mine',
    components: {
      Tabbar,
    },
    data() {
      return {
      }
    },
    activated() {
    }

}

</script>
<style lang="less" scoped>
#mine{
  height: 100%;
}
</style>