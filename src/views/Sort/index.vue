<template>
  <div id="sort">
    <Header>
      <span slot="left"></span>
      <div slot="middle" class="serach">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="安德莉亚奶油蛋糕" v-model="keyword" />
      </div>
      <span slot="right"></span>
    </Header>
    <Sortnav :sortList="sortList" @filterCake="filterCake"/>
    <Swiper :swiperList="swiperList" />
    <Products :productList="productList" :searchRes="searchRes" :h="'815px'" @getCake="getCake" :hasMore="hasMore" />
    <router-view></router-view>

    <Tabbar />
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import Tabbar from "@/components/common/Tabbar";
  import Sortnav from "@/views/Sort/Sortnav";
  import Swiper from "@/components/common/Swiper";
  import Products from "@/components/Products/Products";
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
        swiperList: [],
        productList: [],
        sortList: [],
        pageindex: 2,
        hasMore: true,
        searchRes: true,
        keyword: '',
        debounce: null
      };
    },
    mounted() {
      getBanner(3, data => {
        this.swiperList = data
      })
      let sortConfig = {
        url: '/categoiry/query',
        method: 'post'
      }
      this.$request(sortConfig).then(res => {
        if (res.status === 0) {
          this.sortList = res.table.sort(sortId)
          this.sortList.unshift({
            categoryname: '精选',
            id: 0
          })
        }

        function sortId(a, b) {
          return a.id - b.id
        }
      })
      this.init()
      this.debounce = debounce(this.search, 500)
    },
    methods: {

      // 上拉加载更多
      getCake(scroll) {
        getProduct(8, this.pageindex++, this.keyword, this.$store.state.sortType, ).then(res => {
          if (res.length === 0) {
            this.hasMore = false
            scroll && scroll.finishPullUp()
            this.$toast('我也是有底线的','center',1000)
            return
          }
          this.productList = this.productList.concat(res)
          scroll && scroll.finishPullUp()
        })
      },
      // 筛选
      filterCake(id) {
        getProduct(8, 1, this.keyword, id ? id : '').then(res => {
          if (res.length === 0) {
            this.searchRes = false
          } else {
            this.searchRes = true
          }
          this.productList = res
        })
      },
      search() {
        getProduct(8, 1, this.keyword, this.$store.state.sortType).then(res => {
          if (res.length === 0) {
            this.searchRes = false
          } else {
            this.searchRes = true
          }
          this.productList = res
        })
        this.pageindex == 2
      },
      init() {
        getProduct(8,1,this.keyword,this.$store.state.sortType).then(res => {
          this.productList = res
        })
      }
    },
    watch: {
       keyword(newVal) {
      if (newVal === '') {
        this.pageindex = 2
        this.init()
      } else {
        this.debounce()
      }
    }
    }
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