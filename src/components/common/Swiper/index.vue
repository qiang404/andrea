<template>
  <div class="swiper-container" ref="swiper">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
        <img class="jiujishabi" :src="item.imgUrl" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: "Swiper",
  props: {
    swiperList: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(this.$refs.swiper, {
        autoplay: true,
        loop: true,
      });
    });
  },
};
</script>
<style lang="less" scoped>
img{
  width: inherit;
  height: inherit;
}
</style>