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
      <span>运费 包邮</span>
      <span>销量 {{ productDetail.salenumber }}</span>
    </div>
    <div class="peisong">
      <span>配送：同城送、快递、自提</span>
      <i class="iconfont icon-iconfontjiantou5"></i>
    </div>
    <div class="detail">
      <h5>商品详情</h5>
      <span>蛋糕类型:&#32;巧克力蛋糕</span>
      <span>主要原料:&#32;奶油、巧克力、可可粉</span>
      <span>蛋糕口味:&#32;巧克力味</span>
      <span>赠送配件:&#32;蛋糕叉、蛋糕碟</span>
      <span>保鲜条件:&#32;0-4℃冷藏储存，收到蛋糕后3小时内使用最佳</span>
      <img :src="productDetail.imageurl">
    </div>
    <div class="buy">
      <span><i class="iconfont icon-dianpu"></i><b>店铺</b></span>
      <span><i class="iconfont icon-liaotian"></i><b>客服</b></span>
      <span><i class="iconfont icon-shoucang"></i><b>收藏</b></span>
      <div @click="addGoods">加入购物车</div>
      <div @click="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import Swiper from "@/components/common/Swiper";

  import {
    getProduct
  } from '@/network/getProduct'
  import {
    getBanner
  } from '@/network/getBanner'
  import {
    pushToCart
  } from '@/assets/js/Ulits'
  export default {
    name: "Detail",
    components: {
      Header,
      Swiper,
    },
    data() {
      return {
        swiperList: [],
        productDetail: {},
      };
    },
    methods: {
      back() {
        this.$router.push('/home')
      },
      addGoods() {
        pushToCart.call(this, [this.productDetail],this.$route.params.id,1)
      
      },
      buy() {
        if (this.$store.state.user.token) {
          this.productDetail.pid = this.productDetail.id
          this.productDetail.num = 1
          let payGoods = [this.productDetail]
          this.$store.commit('submitPayGoods',payGoods)
          this.$request({
            method:'post',
            url:'/order/addorder',
            data:{
              uid:this.$store.state.user.uid,
              token:this.$store.state.user.token,
              pid:this.$route.params.id
            }
          }).then(res => {
             if (res.status === 0) {
                this.$router.push('/pay/'+res.orderid)
            }
          })
        } else {
          this.$toast('请先登录', 'center', 1000, () => {
            this.$router.push('/mine/login')
          })
        }
      }
    },
    activated() {
        this.$request({
          url:'product/getproduct',
          method:'post',
          data:{
            pid:this.$route.params.id
          }
        }).then(res => {
          this.productDetail = res[0]
          })
        getBanner(3, res => {
          this.swiperList = res
        })
    }
  };
</script>
<style lang="less" scoped>
  #detail {
    height: 100%;
    background-color: #f6f6f6;
    margin-bottom: 110px;

    .swiper-container {
      width: 100%;
      height: 479px;

      .swiper-item {
        img {
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

    .express {
      height: 75px;
      background-color: #fff;
      margin: 10px 0;
      width: 100%;

      span {
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

    .peisong {
      height: 75px;
      background-color: #fff;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        margin-left: 30px;
        font-size: 22px;
      }

      i {
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

    .detail {
      display: flex;
      flex-direction: column;

      h5 {
        margin: 40px auto;
      }

      h5::before {
        content: '';
        display: inline-block;
        width: 60px;
        border-top: 1px solid black;
        margin-bottom: 8px;
        margin-right: 10px;
      }

      h5::after {
        content: '';
        display: inline-block;
        width: 60px;
        border-top: 1px solid black;
        margin-bottom: 8px;
        margin-left: 10px;
      }

      span {
        font-size: 16px;
        // margin-left: 35px;
        margin: 10px 0 10px 35px;
      }
    }
  }
</style>