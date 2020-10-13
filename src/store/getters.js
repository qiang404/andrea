export default {
    getProducts(state) {
        return state.shopCarList
    },
    // 收货地址列表根据是否是默认排序
    sortAddress(state) {
        let newArray = state.addressList
        for(let i = 0; i < newArray.length-1; i++) {
            let flag = false
            for (let j = 1; j < newArray.length - i; j++) {
                if (newArray[j].isdefault > newArray[j-1].isdefault) {
                    let temp = newArray[j]
                    newArray[j] = newArray[j-1]
                    newArray[j-1] = temp
                    flag = true
                }
            }
            if (!flag) return newArray
        }
        return newArray
    },
    // 获取收货地址
    deliveryAddress(state) {
        // 如果手动选择过收货地址就返回该地址
        if (state.address.length > 0) return state.address
        else {
            // 没有选择过且没有添加过收货地址就为[]
           if (state.addressList.length <= 0) return []
           let res = state.addressList.filter(item => item.isdefault == 1)
           // 如果添加过收货地址且有默认地址就返回默认地址
           if (res.length > 0) return res
           // 添加过收货地址但是没有默认地址就返回第一个地址
           else return [state.addressList[0]]
        }
    },
}