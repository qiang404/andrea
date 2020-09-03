<template>
  <div class="navbar">
    <Scroller>
      <ul>
        <li v-for="(item, index) in sortList" :key="item.id" :class="currentIndex === index ? 'active' : ''" @tap="commitSort(index,item.id)">
          {{ item.categoryname }}
        </li>
      </ul>
    </Scroller>
  </div>
</template>
 
<script>

export default {
  name: "Navbar",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    sortList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    commitSort(index,id) {
      this.currentIndex = index;
      this.$store.commit("changeSortType", id);
      this.$emit('filterCake',id)
    },
  },
};
</script>
<style lang="less" scoped>
.navbar {
  height: 104px;
  overflow: hidden;
  white-space: nowrap;
  background-color: #fff;
  ul {
    width: fit-content;
    height: 100%;
    li {
      width: fit-content;
      font-size: 30px;
      color: #646161;
      display: inline-block;
      height: 100%;
      line-height: 104px;
      margin-left: 40px;
    }
    li.active {
      color: #f69736;
    }
    .active::after{
          content: '';
          width: 50px;
          display: block;
          border-top: 1px solid #f69736;
          margin: -20px auto 0;
      }
  }
}
</style>