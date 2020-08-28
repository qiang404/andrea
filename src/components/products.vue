<template>
  <div class="products" :style="hStyle">
    <div class="hide" :style="hStyle">
      <Scroller :handleToPullUp="getMoreCakes" ref="scroll">
        <ul>
          <li class="cake" v-for="item in productList" :key="item.cid">
            <img @tap="handleToDetail(item.cid)" v-lazy="item.imgurl" alt="" />
            <p @tap="handleToDetail(item.cid)">{{ item.name }}</p>
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
  name: "Products",
  props: {
    productList: {
      type: Array,
      default: [],
    },
    h:{
      tyep:String,
      default:'450px'
    }
  },
  data() {
    return {
      hStyle:{'height':this.h}
    }
  },
  methods: {
    getMoreCakes() {
      console.log("请求更多数据了");
      this.$refs.scroll.scroll.finishPullUp();
    },
    handleToDetail(cid) {
      this.$router.push("/detail/" + cid);
    },
  },
  updated() {
    this.$refs.scroll.scroll.refresh();
  },
};
</script>
<style lang="less" scoped>
.products {
  width: 704px;
  margin: 0 auto;
  height: 1000px;
  margin-bottom: 110px;
  .hide {
    overflow: hidden;
    height: 890px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 18px;
    overflow: hidden;
    .cake {
      width: 330px;
      height: 394px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      margin-bottom: 14px;
      justify-content: space-between;
      img {
        width: 330px;
        height: 260px;
      }
      p {
        font-size: 30px;
        color: #030202;
        margin-left: 23px;
        margin-top: 30px;
      }
      .price {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        margin-bottom: 20px;
        b {
          font-size: 30px;
          color: #fb0606;
        }
      }
    }
  }
}
</style>