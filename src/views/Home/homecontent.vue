<template>
  <div class="products">
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
    <div class="hide">
      <Scroller :handleToPullUp="getMoreCakes" ref="scroll">
      <ul>
        <li class="cake" v-for="item in productList" :key="item.cid">
            <img v-lazy="item.imgurl" alt="">
            <p>{{ item.name }}</p>
            <div class="price">
                <b>￥{{ item.price }}</b>
                <i class="iconfont icon-gouwuche"></i>
            </div>
        </li>
    </ul>
    </Scroller>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'HomeContent',
    props:{
        productList:{
            type:Array,
            default:[]
        }
    },
    methods: {
      getMoreCakes() {
        console.log('请求更多数据了');
        this.$refs.scroll.scroll.finishPullUp()
      }
    },
    updated() {
      this.$refs.scroll.scroll.refresh()
    }
};
</script>
<style lang="less" scoped>
.products{
    width: 704px;
    margin: 0 auto;
    margin-top: 36px;
    // margin-bottom: 100px;
    height: 1000px;
    .top{
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
  .hide{
    overflow: hidden;
    height: 800px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 18px;
    // height: 800px;
    overflow: hidden;
    .cake{
      width: 330px;
      height: 394px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      margin-bottom: 14px;
      justify-content: space-between;
      img{
        width: 330px;
        height: 260px;
      }
      p{
        font-size: 30px;
        color: #030202;
        margin-left: 23px;
        margin-top: 30px;
      }
      .price{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        margin-bottom: 20px;
         b{
        font-size: 30px;
        color: #fb0606;
        }
      }
     
  }
  
  }
}
  
</style>