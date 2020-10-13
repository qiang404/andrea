<template>
	<div class="goods">
		<Scroller>
			<ul>
				<li v-for="(item,index) in productList" :key="item.pid">
					<input type="radio" @click="changeMe(index)" v-radio="changed" :checked="item.select" />
					<img :src="item.imageurl" />
					<div class="context">
						<div>
							<p>{{item.name}} </p>
							<i class="iconfont icon-lajitong" @tap="delGoods(index,item.pid)"></i>
						</div>
						<span>{{item.categoryname}}</span>
						<div class="cal">
							<b>￥{{item.price}}</b>
							<div>
								<span @tap="decNum(index,item)">-</span><input type="text" :value="item.num" /><span
									@tap="incNum(index,item)">+</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</Scroller>
	</div>
</template>

<script>
	import {
		pushToCart
	} from '@/assets/js/Ulits'
	export default {
		name: 'Goods',
		data() {
			return {
				changed: false,
				isCheckAll: false,
				hasCheckSomething: false
			}
		},
		methods: {
			changeMe(index) {
				this.$store.commit('changeSelect', index)
				this.isCheckAll = !this.$store.state.shopCarList.some(item => {
					return !item.select
				})
				this.hasCheckSomething = this.$store.state.shopCarList.some(item => {
					return item.select
				})
				this.$store.commit("changeCheckSomething", this.hasCheckSomething)
				this.$store.commit('changeIsCheckAll', this.isCheckAll)

			},
			decNum(index, item) {
				if (item.num >= 1) {
					this.$request({
						method: "post",
						url: "/shopcar/add",
						data: {
							uid: this.$store.state.user.uid,
							token: this.$store.state.user.token,
							pid: item.pid,
							count: -1
						}
					}).then(res => {
						if (res.status === 0) {
							this.$store.commit('decNum', index)
						}
					})
				}

			},
			incNum(index, item) {
				this.$request({
					method: "post",
					url: "/shopcar/add",
					data: {
						uid: this.$store.state.user.uid,
						token: this.$store.state.user.token,
						pid: item.pid,
						count: 1
					}
				}).then(res => {
					if (res.status === 0) {
						this.$store.commit('incNum', index)
					}
				})

			},
			delGoods(index, pid) {
				this.$messageBox('确定删除吗？', this.removeGoods(index, pid), this)
			},
			removeGoods(index, pid) {
				return function () {
					this.$store.commit('deleteShopCarList', index)
					let config = {
						method: 'post',
						url: '/shopcar/delete',
						data: {
							uid: this.$store.state.user.uid,
							token: this.$store.state.user.token,
							pid: pid
						}
					}
					this.$request(config).then(res => console.log(res))
					if (this.$store.state.shopCarList.length <= 0) {
						this.$store.commit('changeIsCheckAll', false)
					}
				}
			}
		},
		computed: {
			productList() {
				return this.$store.state.shopCarList
			}
		},
	}
</script>
<style lang="less" scoped>
	.goods {
		background-color: #f6f6f6;
		height: 1000px;
		overflow: hidden;
		padding-bottom: 20px;

		ul {
			li {
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 210px;
				width: 700px;
				border-radius: 20px;
				margin: 10px auto 0;
				box-sizing: border-box;
				padding: 20px 20px;

				img {
					width: 165px;
					height: 160px;
					margin: 0 15px;
				}

				.context {
					display: flex;
					flex-direction: column;
					height: 100%;
					flex: 1;
					justify-content: space-around;

					&>div {
						display: flex;
						justify-content: space-between;

						i {
							font-size: 50px;
						}
					}

					span {
						font-size: 12px;
						color: #6c6c6c;
						margin-top: -10px;
					}

					b {
						color: red;
					}
				}

				.cal {
					display: flex;
					justify-content: space-between;

					input {
						height: 40px;
						width: 80px;
						outline: none;
						border-top: 1px #d2d2d2 solid;
						border-bottom: 1px #d2d2d2 solid;
						border-left: none;
						border-right: none;
						justify-content: flex-end;
						text-align: center;
					}

					&>div {
						display: flex;
					}

					span {
						display: inline-block;
						width: 40px;
						height: 40px;
						border: 1px #d2d2d2 solid;
						text-align: center;
						margin: 0;
					}
				}
			}
		}
	}
</style>