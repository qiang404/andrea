<template>
  <div id="home">
    <Header :class="isFixed?'fixed':''" ref="header">
      <i slot="left" class="iconfont icon-weibiaoti-">洛阳</i>
      <p slot="middle">安德莉亚</p>
      <i slot="right" class="iconfont icon-sousuo"></i>
    </Header>
    <Swiper :swiperList="swiperList"/>
    <Menu/>
    <Mustbuy/>
    <HomeContent :productList="productList"/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Swiper from "@/components/Swiper"
import Menu from '@/views/Home/menu'
import Mustbuy from '@/views/Home/mustbuy'
import HomeContent from '@/views/Home/homecontent'
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Menu,
    Mustbuy,
    HomeContent
  },
  data() {
    return {
      isFixed:false,
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
      productList:[
        {
          name:'巧克力千层蛋糕',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake1.png',
          price:'25.00',
          cid:1
        },
         {
          name:'松软牛角面包(纯手工)',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake2.png',
          price:'7.00',
          cid:2
        },
         {
          name:'蜜红豆面包',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake3.png',
          price:'10.00',
          cid:3
        },
         {
          name:'草莓果酱蛋糕',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake4.png',
          price:'35.00',
          cid:4
        },
        {
          name:'巧克力千层蛋糕',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake1.png',
          price:'25.00',
          cid:5
        },
         {
          name:'松软牛角面包(纯手工)',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake2.png',
          price:'7.00',
          cid:6
        },
         {
          name:'蜜红豆面包',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake3.png',
          price:'10.00',
          cid:7
        },
         {
          name:'草莓果酱蛋糕',
          imgurl:'http://ehelp.hyyclub.xyz/images/swiper/cake4.png',
          price:'35.00',
          cid:8
        }
      ]
    };
  },
  mounted() {
    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop > this.$refs.header.$el.scrollHeight) {
          this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
};
</script>
<style lang="less" scoped>
.fixed{
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