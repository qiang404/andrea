<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {throttle} from '@/assets/js/Ulits'
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
        click:{
            type:Boolean,
            default:false
        }
    },
    mounted() {
         this.scroll = new BScroll(this.$refs.wrapper,{
            tap:true,
            probeType:1,
            pullUpLoad: true,
            scrollX:true,
            click:this.click
        })
        this.scroll.on('pullingUp',throttle(this.handleToPullUp,500))
    }

}

</script>
<style lang="less" scoped>
.wrapper{
    height: 100%;
}
</style>