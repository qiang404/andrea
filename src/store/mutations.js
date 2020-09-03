export default {
    changeSortType(state,playload) {
        state.sortType = playload
    },
    saveUser(state,playlod) {
        state.user = playlod
    },
    saveToken(state,playload) {
        state.token = playload
    },
    addGoods(state,playload) {
        state.shopCarList = state.shopCarList.concat(playload)
    }
}