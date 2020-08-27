<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
    <Tabbar/>
  </div>
</template>
<script>
import Tabbar from '@/components/common/Tabbar'
export default {
    name: 'App',
    components:{
      Tabbar,
    }
}
</script>
<style>
</style>
