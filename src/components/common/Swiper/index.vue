<template>
  <div class="swiper-container" ref="swiper">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img :src="item.url" alt="" />
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
    data() {
      return {}
    },
    activated() {
      this.$nextTick(() => {
          new Swiper(this.$refs.swiper, {
            autoplay: true,
            loop: true,
            observer: true, //解决异步请求swiper不会自动轮播
            observeParents:true
          });
      });
    },
  };
</script>
<style lang="less" scoped>
  img {
    width: inherit;
    height: inherit;
  }
</style>