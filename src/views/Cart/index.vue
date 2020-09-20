<template>
  <div id="cart">
    <Header>
      <span slot="left"></span>
      <span class="title" slot="middle">购物车({{ this.$store.state.shopCarList.length }})</span>
      <span slot="right"></span>
    </Header>
    <Goods :func="payCanUse" />
    <div class="pay">
      <div class="select">
        <input type="radio" id="selectAll" @click="checkAll" v-radio="changed"
          :checked="this.$store.state.isCheckAll" :disabled="this.$store.state.shopCarList.length > 0 ? false : true" /><label for="selectAll">全选</label>
      </div>
      <div class="then">
        <span>合计:<b>￥{{ totalPrice }}</b></span>
        <span @click="pay" :class="payCanUse?'':'disable'">结算</span>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
  import Tabbar from "@/components/common/Tabbar";
  import Header from "@/components/common/Header";
  import Goods from '@/views/Cart/goods'
  export default {
    name: "Cart",
    components: {
      Tabbar,
      Header,
      Goods
    },
    data() {
      return {
        changed: false,
        product: [],
        payGoods:[]
      };
    },
    methods: {
      checkAll() {
        this.$store.commit('changeIsCheckAll')
        this.$store.commit('changeAllSelect')
      },
      pay() {
        this.payGoods = []
        if (this.payCanUse) {
          this.$store.state.shopCarList.forEach(item => {
            if (item.select) {
              this.payGoods.push(item)
            }
          })
          this.$store.commit('submitPayGoods',this.payGoods)
          this.$router.push('/pay')
        } else {
          return
        }
      }
    },
    computed: {
      payCanUse() {
        if (this.$store.state.hasCheckSomething) {
          return true
        } else {
          return false
        }
      },
      totalPrice() {
        let sum = 0
        let shopCarList = this.$store.state.shopCarList
        if (shopCarList.length > 0) {
          shopCarList.forEach(item => {
            if (item.select) {
              sum += item.stock * item.num
            }
          })
        }
        return sum
      },
      
    },
  };
</script>
<style lang="less" scoped>
  #cart {
    .title {
      font-size: 40px;
    }

    .pay {
      background-color: #fff;
      position: fixed;
      bottom: 100px;
      right: 0;
      left: 0;
      display: flex;
      height: 100px;
      justify-content: space-between;
      padding: 0 30px;
      align-items: center;

      .select {
        input {
          margin-right: 20px;
        }
      }

      .then {
        display: flex;
        align-items: center;

        b {
          color: red;
        }

        span:nth-child(1) {
          margin-right: 10px;
        }

        span:nth-child(2) {
          display: inline-block;
          width: 200px;
          border-radius: 80px;
          height: 70px;
          text-align: center;
          line-height: 70px;
          color: white;
          background-color: red;
          cursor: pointer;
        }
      }
    }

    .disable {
      background-color: gray !important;
      cursor: not-allowed !important;
    }
  }
</style>