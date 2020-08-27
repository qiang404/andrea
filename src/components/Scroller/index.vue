<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {debounce} from '@/assets/js/Ulits'
export default {
    name : 'Scroller',
    data() {
        return {
            scroll: null,
            fangdou: null
        }
    },
    props:{
        handleToPullUp: {
            type:Function,
            default:function () {}
        },
    },
    mounted() {
         this.scroll = new BScroll(this.$refs.wrapper,{
            tap:true,
            probeType:1,
            pullUpLoad: true
        })
        this.fangdou = debounce(this.handleToPullUp,500)
        this.scroll.on('pullingUp',() => {
            this.fangdou()
        })
    }

}

</script>
<style lang="less" scoped>
.wrapper{
    height: 100%;
}
</style>