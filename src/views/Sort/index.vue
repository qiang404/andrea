<template>
  <div id="sort">
    <Header>
      <span slot="left"></span>
      <div slot="middle" class="serach">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="安德莉亚奶油蛋糕" />
      </div>
      <span slot="right"></span>
    </Header>
    <Sortnav :sortList="sortList" />
    <Swiper :swiperList="swiperList" />
    <Products :productList="productList" :h="'818px'"/>
    <router-view></router-view>

    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Tabbar from "@/components/common/Tabbar";
import Sortnav from "@/views/Sort/Sortnav";
import Swiper from "@/components/common/Swiper";
import Products from "@/components/products";
export default {
  name: "Sort",
  components: {
    Header,
    Tabbar,
    Sortnav,
    Swiper,
    Products,
  },
  data() {
    return {
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
         {
          name: "蜜红豆面包",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake3.png",
          price: "10.00",
          cid: 9,
        },
        {
          name: "草莓果酱蛋糕",
          imgurl: "http://ehelp.hyyclub.xyz/images/swiper/cake4.png",
          price: "35.00",
          cid: 10,
        },
      ],
      sortList:['精选','玛芬蛋糕','威风蛋糕','天使蛋糕','重油蛋糕','天使蛋糕','重油蛋糕']
    };
  },
};
</script>
<style lang="less" scoped>
#sort {
   background-color: #f6f6f6;
   height: 2300px;
  .serach {
    width: 649px;
    height: 63px;
    background-color: #f6f6f6;
    border-radius: 60px;
    display: flex;
    align-items: center;
    i {
      opacity: 0.68;
      margin-left: 50px;
      margin-right: 23px;
    }
    input {
      border: none;
      outline: none;
      height: 100%;
      background-color: #f6f6f6;
      width: 80%;
      border-radius: 0 60px 60px 0;
    }
  }
  .swiper-container {
    width: 718px;
    height: 424px;
    border-radius: 20px;
    .swiper-item {
      width: 718px;
      height: 424px;
    }
  }
}
</style>
