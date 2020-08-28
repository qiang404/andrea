<template>
  <div id="home">
    <Header :class="isFixed ? 'fixed' : ''" ref="header">
      <i slot="left" class="iconfont icon-weibiaoti-">洛阳</i>
      <p slot="middle">安德莉亚</p>
      <i slot="right" class="iconfont icon-sousuo"></i>
    </Header>
    <Swiper :swiperList="swiperList" />
    <Menu />
    <Mustbuy />
      <div class="top">
      <div class="left">
        <i class="iconfont icon-dianzan"></i>
        <p>推荐产品</p>
      </div>
      <div class="right">
        <p>更多</p>
        <i class="iconfont icon-iconfontjiantou5"></i>
      </div>
    </div>
    <Products :productList="productList" />
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Swiper from "@/components/common/Swiper";
import Menu from "@/views/Home/menu";
import Mustbuy from "@/views/Home/mustbuy";
import Products from "@/components/products";
import Tabbar from "@/components/common/Tabbar";
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Menu,
    Mustbuy,
    Products,
    Tabbar,
  },
  data() {
    return {
      isFixed: false,
      swiperList: [
        {
          name: "swiper1",
          imgUrl: "http://ehelp.hyyclub.xyz/images/swiper/banner1.png",
        },
        {
          name: "swiper2",
          imgUrl: "http://ehelp.hyyclub.xyz/images/swiper/banner2.png",
        },
        {
          name: "swiper3",
          imgUrl: "http://ehelp.hyyclub.xyz/images/swiper/banner3.png",
        },
      ],
      productList: [
        {
          name: "巧克力千层蛋糕",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake1.png",
          price: "25.00",
          cid: 1,
        },
        {
          name: "松软牛角面包(纯手工)",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake2.png",
          price: "7.00",
          cid: 2,
        },
        {
          name: "蜜红豆面包",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake3.png",
          price: "10.00",
          cid: 3,
        },
        {
          name: "草莓果酱蛋糕",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake4.png",
          price: "35.00",
          cid: 4,
        },
        {
          name: "巧克力千层蛋糕",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake1.png",
          price: "25.00",
          cid: 5,
        },
        {
          name: "松软牛角面包(纯手工)",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake2.png",
          price: "7.00",
          cid: 6,
        },
        {
          name: "蜜红豆面包",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake3.png",
          price: "10.00",
          cid: 7,
        },
        {
          name: "草莓果酱蛋糕",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake4.png",
          price: "35.00",
          cid: 8,
        },
      ],
    };
  },
  mounted() {
    window.onscroll = this.handleScroll;
  },
  methods: {
    handleScroll() {
      if (
        document.documentElement.scrollTop > this.$refs.header.$el.scrollHeight
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
#home {
  background-color: #f6f6f6;
  overflow: hidden;
  height: 100%;
    .top{
      width: 704px;
      margin: 0 auto;
      margin-top: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      align-items: center;
      i{
        font-size: 34px;
        margin-right: 18px;
      }
      p{
        color: #111010;
        font-size: 26px;
        font-weight: bold;
      }
    }
    .right{
      display: flex;
      align-items: center;
      i{
        font-size: 20px;
        margin-left: 11px;
      }
      p{
        color: #454545;
        font-size: 20px;
      }
    }
  }
  .swiper-container {
    width: 704px;
    height: 326px;
    border-radius: 20px;
  }
  i.icon-weibiaoti- {
    font-size: 26px;
  }
  i.icon-sousuo {
    font-size: 38px;
  }
  p {
    font-size: 36px;
    margin-left: -20px;
  }
}
</style>