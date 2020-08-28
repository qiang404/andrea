<template>
  <div id="detail">
    <Header>
      <i @click="back" slot="left" class="iconfont icon-zuojiantou"></i>
      <p slot="middle">产品详情</p>
      <div slot="right"></div>
    </Header>
    <Swiper :swiperList="swiperList" />
    <div class="name">
      <span>
        <p>{{ productDetail.name }}</p>
        <b>{{ productDetail.price }}</b>
      </span>
      <span>库存{{ productDetail.stock }}</span>
    </div>
    <div class="express">
      <span>运费 {{ productDetail.baoyou }}</span>
      <span>销量 {{ productDetail.salenumber }}</span>
    </div>
    <div class="peisong">
      <span>配送：同城送、快递、自提</span>
      <i class="iconfont icon-iconfontjiantou5"></i>
    </div>
    <div class="detail"></div>
    <div class="buy">
      <span><i class="iconfont icon-dianpu"></i><b>店铺</b></span>
      <span><i class="iconfont icon-liaotian"></i><b>客服</b></span>
      <span><i class="iconfont icon-shoucang"></i><b>收藏</b></span>
      <div @click="addGoods">加入购物车</div>
      <div>立即购买</div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Swiper from "@/components/common/Swiper";
export default {
  name: "Detail",
  components: {
    Header,
    Swiper,
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
      productDetail: {
        name: "巧克力千层蛋糕",
        price: "35.00",
        stock: "203",
        baoyou: "包邮",
        salenumber: "98",
      },
    };
	},
	methods: {
		back() {
			this.$router.back()
    },
    addGoods() {
      
    }
	}
};
</script>
<style lang="less" scoped>
#detail {
  height: 100%;
  background-color: #f6f6f6;
  .swiper-container {
    width: 100%;
    height: 479px;
    .swiper-item {
			img{
				width: 100%;
      height: 479px;
			}
    }
  }
  i {
    font-size: 40px;
    font-weight: bold;
  }
  p {
    font-size: 36px;
    color: #030202;
    font-weight: bold;
  }
  .name {
    background-color: #fff;
    width: 100%;
    display: flex;
    padding: 0 16px;
    box-sizing: border-box;
    height: 140px;
    justify-content: space-between;
    p {
      font-size: 36px;
      font-weight: bold;
    }
    b {
      font-size: 36px;
      color: #ff0101;
      font-weight: bold;
    }
    span {
      height: 100%;
      &:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      &:nth-child(2) {
        display: flex;
        flex-direction: column-reverse;
        font-size: 22px;
        color: #494848;
        padding-bottom: 25px;
        box-sizing: border-box;
      }
    }
  }
  .express{
			height: 75px;
			background-color: #fff;
			margin: 10px 0;
			width: 100%;
			span{
				margin-top: 20px;
				display: inline-block;
				font-size: 24px;
				&:nth-child(1) {
					margin-left: 30px;
				}
				&:nth-child(2) {
					margin-left: 65px;
				}
			}
	}
	.peisong{
		height: 75px;
		background-color: #fff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		span{
			margin-left: 30px;
			font-size: 22px;
		}
		i{
			font-size: 22px;
			margin-right: 10px;
		}
	}
  .buy {
    height: 100px;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon-dianpu {
        color: #ff6962;
      }
      b {
        font-size: 18px;
        color: #090909;
      }
    }
    div {
      height: 100%;
      flex: 2;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      &:nth-child(4) {
        background-color: #fe6840;
      }
      &:nth-child(5) {
        background-color: #f20202;
      }
    }
  }
}
</style>