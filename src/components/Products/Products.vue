<template>
  <div class="products" :style="hStyle">
    <div class="hide" :style="hStyle">
      <Scroller v-if="searchRes" :handleToPullUp="getMoreCakes" ref="scroll">
        <ul>
          <li class="cake" v-for="(item,index) in productList" :key="item.id">
            <img @tap="handleToDetail(item.id)" v-lazy="item.imageurl" alt="" />
            <p @tap="handleToDetail(item.id)">{{ item.name }}</p>
            <div class="price">
              <b>￥{{ item.price }}</b>
              <i class="iconfont icon-gouwuche" @tap="addGoods(index,item.id)"></i>
            </div>
          </li>
        </ul>
      </Scroller>
      <h3 v-else >好像什么也没有</h3>
    </div>
  </div>
</template>

<script>
import {pushToCart} from '@/assets/js/Ulits'
  export default {
    name: "Products",
    props: {
      productList: {
        type: Array,
        default: [],
      },
      h: {
        type: String,
        default: '450px'
      },
      hasMore: {
        type: Boolean,
        default: true
      },
       searchRes: {
        type: Boolean,
        default: true
      },
      
    },
    data() {
      return {
        hStyle: {
          'height': this.h
        }
      }
    },
    methods: {
      getMoreCakes() {
        if (this.hasMore) {
          this.$emit('getCake', this.$refs.scroll.scroll)
        } else {
          this.$toast('我也是有底线的','center',1000)
          this.$refs.scroll.scroll.finishPullUp();
        }
      },
      handleToDetail(id) {
          this.$router.push("/detail/" + id);
      },
      addGoods(index,id) {
        pushToCart.call(this,[this.productList[index]],id,1)
        //   let config = {
        //   method:'post',
        //   url:'/shopcar/add',
        //   data:{
        //     uid:this.$store.state.user.id,
        //     token:this.$store.state.token,
        //     pid:id
        //   }
        // }
        // this.$request(config).then(res => console.log(res))
      }
    },
    updated() {
      if (this.productList.length > 0)
      this.$refs.scroll.scroll.refresh();
    },
  };
</script>
<style lang="less" scoped>
  .products {
    width: 704px;
    margin: 0 auto;
    height: 1100px;
    margin-bottom: 110px;

    .hide {
      overflow: hidden;
      height: 890px;
      h3{
        width: fit-content;
        margin: 50px auto;
      }
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

      span {
        display: block;
        margin: 0 auto;
        width: 200px;
        font-size: 28px;
      }
    }
  }
</style>