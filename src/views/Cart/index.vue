<template>
  <div id="cart">
    <Header>
      <span slot="left"></span>
      <span class="title" slot="middle">购物车({{ num }})</span>
      <span slot="right"></span>
    </Header>
    <div class="goods">
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
    </div>
    <div class="pay">
      <div class="select">
        <input type="radio" v-radio="changed" /><span
          >全选</span
        >
      </div>
      <div class="then">
        <span
          >合计:<b>￥{{ tmoney }}</b></span
        >
        <span>结算</span>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar";
import Header from "@/components/common/Header";
export default {
  name: "Cart",
  components: {
    Tabbar,
    Header,
  },
  data() {
    return {
      num: 3,
      tmoney: 0,
      changed: false,
    };
  },
  methods: {
    // radioEvent(e) {
    //   setTimeout(() => {
    //     if (!this.changed) {
    //       e.target.checked = false;
    //     }
    //       this.changed = false;
    //   }, 0);
    // },
    // isChange() {
    //   this.changed = true;
    // },
  },
};
</script>
<style lang="less" scoped>
#cart {
  .title {
    font-size: 40px;
  }
  .goods {
    background-color: #f6f6f6;
    height: 1200px;
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
        background-color: red;
        height: 70px;
        text-align: center;
        line-height: 70px;
        color: white;
      }
    }
  }
}
</style>