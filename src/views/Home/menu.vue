<template>
  <div class="menu">
    <div class="broadcast">
      <i class="iconfont icon-laba"></i>
      <div class="swiper-container" ref="broadcast">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in newsList" :key="item.id">
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <img src="@/assets/img/newcake.png" alt="" />
          <p>最新甜品</p>
        </li>
        <li>
          <img src="@/assets/img/gift.png" alt="" />
          <p>积分兑换</p>
        </li>
        <li>
          <img src="@/assets/img/book.png" alt="" />
          <p>在线预订</p>
        </li>
        <li>
          <img src="@/assets/img/company.png" alt="" />
          <p>公司介绍</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Menu",
  props:{
    newsList:{
      type:Array,
      default:[]
    }
  },
  activated() {
    new Swiper(this.$refs.broadcast, {
      direction: "vertical",
      autoplay: true,
      loop: true,
      observer:true,
      observeParents:true
    });
  },
};
</script>
<style lang="less" scoped>
.menu {
  height: 190px;
  display: flex;
  flex-direction: column;
  width: 704px;
  margin: 0 auto;
  margin-top: 23px;
  // margin-bottom: 5px;
  .broadcast {
    display: flex;
    height: 30px;
    i {
      color: #f69736;
      font-size: 32px;
      margin-right: 15px;
    }
    p {
      color: #292929;
      opacity: 0.75;
      font-size: 20px;
    }
    .swiper-container {
      margin: 0;
    }
    .swiper-slide {
      overflow: hidden;
    }
  }
  .content {
    margin-top: 29px;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 110px;
        img {
          width: 70px;
          height: 70px;
        }
        p {
          font-size: 22px;
          font-weight: bold;
          margin-top: 13px;
        }
      }
    }
  }
}
</style>