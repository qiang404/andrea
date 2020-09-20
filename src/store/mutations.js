import Vue from 'vue'
export default {
    // 排序类型
    changeSortType(state,playload) {
        state.sortType = playload
    },
    // 保存用户
    saveUser(state,playlod) {
        state.user = playlod
    },
    // 保存token
    saveToken(state,playload) {
        state.token = playload
    },
    // 登录加载用户购物车信息
    initGoods(state,playload) {
        state.shopCarList = playload
    },
    // 购物车添加商品
    addGoods(state,playload) {
        let hasPlayLoad = false
        let myIndex = 0
        // 检查购物车中是否已经存在该商品如果存在记录位置
        if (state.shopCarList.length > 0)
        state.shopCarList.forEach((item,index) => {
            if (playload[0].id == item.pid) {
                hasPlayLoad = true
                myIndex = index
            }
        })
        if (hasPlayLoad) {
            let newSp = state.shopCarList[myIndex]
            newSp.num++
            Vue.set(state.shopCarList,myIndex,newSp)
        }
        else {
            playload[0].pid = playload[0].id
            playload[0].num = 1
            playload[0].select = false
            state.isCheckAll = false
            state.shopCarList.push(playload[0])
        }
    },
    // 购物车商品添加数量
    decNum(state,playload) {
        if (state.shopCarList[playload].num > 1) {
            let newSp = state.shopCarList[playload]
            newSp.num--
            Vue.set(state.shopCarList,playload,newSp) 
        }  

    },
    // 购物车商品减少数量
    incNum(state,playload) {
        let newSp = state.shopCarList[playload]
        newSp.num++
        Vue.set(state.shopCarList,playload,newSp)
    },
    // 改变某个商品选中状态
    changeSelect(state,playload) {
        let newSp = state.shopCarList[playload]
        newSp.select = !newSp.select
        Vue.set(state.shopCarList,playload,newSp)
    },
    // 改变所有商品选中状态
    changeAllSelect(state) {
        if (state.shopCarList.length <= 0) return
        let newSp = []
        state.shopCarList.forEach(item => {
            item.select = state.isCheckAll
            newSp.push(item)
        })
        state.shopCarList = newSp
        state.hasCheckSomething = state.isCheckAll // 全选时有商品选择，非全选时无商品选中
    },
    // 记录购物车商品是否全选
    changeIsCheckAll(state,playload) {
        // 购物车没有商品时全选和有商品被选中都为false
        if (state.shopCarList.length <= 0) {
            state.isCheckAll = false 
            state.hasCheckSomething = false
            return 
        } 
        // 如果是全选按钮调用则赋值后一个状态，其他情况赋值传过来的状态
        if (playload === undefined) state.isCheckAll = !state.isCheckAll
        else state.isCheckAll = playload 
    },
    // 记录是否有商品被选中
    changeCheckSomething(state,playload) {
        state.hasCheckSomething = playload
    },
    // 提交要支付的商品
    submitPayGoods(state,playload) {
        state.payComming = playload
    },
    // 删除购物车商品
    deleteShopCarList(state,playload) {
        state.shopCarList.splice(playload,1)
    }
}