export function debounce(func, delay) {
	let timer = null
	return function () {
		let context = this;
		let args = arguments;
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			func.apply(context,args)
		}, delay);
	}
}

export function throttle(func, wait) {
	let timeout;
	return function () {
		let context = this;
		let args = arguments;
		if (!timeout) {
			timeout = setTimeout(() => {
				timeout = null;
				func.apply(context, args)
			}, wait)
		}
		this.finishPullUp()
	}
}

export function pushToCart(poduct,id,count) {
	if (!this.$store.state.user.token) {
		this.$toast('请先登录!','center',1000,() => {
      this.$router.push('/mine/login')    
		})
		return false
	} else {
		let config = {
			method:'post',
			url:'/shopcar/add',
			data:{
			  uid:this.$store.state.user.uid,
			  token:this.$store.state.user.token,
			  pid:id,
			  count:count
			}
		  }
		this.$request(config).then(res => {
			if (res.status === 0) {
				this.$store.commit('addGoods', poduct)
				this.$toast('加入购物车成功!','center',1000)
			} else {
				this.$toast('加入购物车失败!','center',1000)
			}
		})
		
		return true
	}
}


