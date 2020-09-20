import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sortType:0, // 分类状态
    token:'', // 唯一标识
    user:'', // 用户信息
    shopCarList:[], // 购物车列表
    isCheckAll:false, // 购物车商品是否全选
    hasCheckSomething:false, // 是否有商品被选中
    payComming:[], // 即将支付商品列表
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
