<template>
  <div id="home">
    <Header :class="isFixed ? 'fixed' : ''" ref="header">
      <i slot="left" class="iconfont icon-weibiaoti-">洛阳</i>
      <div class="search" v-if="isSearch" slot="middle">
        <input type="text" placeholder="请输入蛋糕名称" v-model="keyword">
      </div>
      <p v-else slot="middle">安德莉亚</p>
      <i slot="right" class="iconfont" :class="isSearch?'icon-cha':'icon-sousuo'" @click="toggle"></i>
    </Header>
    <Swiper v-if="swiperList" :swiperList="swiperList" />
    <Menu :newsList="newsList" />
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
    <Products :productList="productList" @getCake="getCake" :hasMore="hasMore" :searchRes="searchRes" />
    <Tabbar />
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import Swiper from "@/components/common/Swiper";
  import Menu from "@/views/Home/menu";
  import Mustbuy from "@/views/Home/mustbuy";
  import Products from "@/components/Products/Products.vue";
  import Tabbar from "@/components/common/Tabbar";
  import {
    getBanner
  } from '@/network/getBanner'
  import {
    getProduct
  } from '@/network/getProduct'
  import {
    debounce
  } from '@/assets/js/Ulits'
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
        swiperList: [],
        productList: [],
        pageindex: 2,
        hasMore: true,
        newsList: [],
        isSearch: false,
        keyword: '',
        debounceSearch: null,
        searchRes: true
      };
    },
    mounted() {
      window.onscroll = this.handleScroll;
      getBanner(3, data => {
        this.swiperList = data
      })
      this.$request({
        url: '/news/query',
        method: 'post'
      }).then(res => {
        this.newsList = res.table
      })
      this.init()
      this.debounceSearch = debounce(this.search, 500)
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
      init() {
        getProduct(6, 1, '', '').then(res => {
          this.productList = res
        })
      },
      getCake(scroll) {
        getProduct(6, this.pageindex++, '', '', ).then(res => {
          if (res.length === 0) {
            this.hasMore = false
            scroll && scroll.finishPullUp()
            this.$toast('我也是有底线的', 'center', 1000)
            return
          }
          this.productList = this.productList.concat(res)
          scroll && scroll.finishPullUp()
        })
      },
      toggle() {
        this.isSearch = !this.isSearch
        if (!this.isSearch) {
          this.keyword = ''
          this.search();
        };
      },
      search() {
        getProduct(6, 1, this.keyword, '').then(res => {
          if (res.length === 0) {
            this.searchRes = false
          } else {
            this.searchRes = true
          }
          this.productList = res
        })
        this.pageindex = 2
        this.hasMore = true
      }
    },
    watch: {
      keyword(newVal) {
        if (newVal === '') {
          this.pageindex = 2
          this.init()
        } else {
          this.debounceSearch()
        }
      }
    }
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

    .search {
      height: 60%;
      background-color: #f6f6f6;
      border-radius: 40px;
      color: #ADADAD;
      display: flex;
      justify-content: flex-end;

      input {
        border: none;
        outline: none;
        width: 90%;
        background-color: #f6f6f6;
        height: 100%;
        border-radius: 0 40px 40px 0;
      }

    }

    .top {
      width: 704px;
      margin: 0 auto;
      margin-top: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        align-items: center;

        i {
          font-size: 34px;
          margin-right: 18px;
        }

        p {
          color: #111010;
          font-size: 26px;
          font-weight: bold;
        }
      }

      .right {
        display: flex;
        align-items: center;

        i {
          font-size: 20px;
          margin-left: 11px;
        }

        p {
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