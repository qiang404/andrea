<template>
	<div id="pay">
		<Header>
			<i class="iconfont icon-prev" slot="left" @click="back"></i>
			<p slot="middle">订单支付</p>
			<span slot="right"></span>
		</Header>
		<div class="content">
			<Scroller style="overflow:auto">
				<div style="padding:20px 0;">
					<div class="selectStore" @tap="toSelectStore">
						<i class="iconfont icon-weibiaoti-"></i>
						<div class="location">
							<p> {{this.$store.state.deliveryShop.shopname }}</p>
							<span>{{ this.$store.state.deliveryShop.address }}</span>
						</div>
						<i class="iconfont icon-iconfontjiantou5"></i>
					</div>
					<ul class="product">
						<li v-for="item in this.$store.state.payComming" :key="item.pid">
							<img :src="item.imageurl || item.imgurl">
							<div>
								<span>{{item.name}}</span>
								<span>{{item.categoryname}}</span>
								<span>×{{item.num}}</span>
							</div>
							<span class="price">
								<p>￥{{item.price}}</p>
							</span>
						</li>
					</ul>
					<div class="takeType">
						<div>
							<span>到店自取</span>
							<span>应付<b>￥{{totalMoney}}</b></span>
						</div>
					</div>
					<div class="takeTime">
						<span>请选择取餐时间</span>
						<ul>
							<li>
								<input type="radio" id="one" value="0" v-model="picked">
								<label for="one">现在取餐</label>
							</li>
							<li>
								<input type="radio" id="two" value="1" v-model="picked">
								<label for="two">10分钟后到店取</label>
							</li>
							<li>
								<input type="radio" id="three" value="2" v-model="picked">
								<label for="three">20分钟后到店区</label>
							</li>
							<li>
								<input type="radio" id="four" value="3" v-model="picked">
								<label for="four">30分钟后到店区</label>
							</li>
						</ul>
					</div>
					<div class="coupon">
						<span>优惠券</span>
						<span>无可用</span>
					</div>
					<div v-if="this.$store.getters.deliveryAddress.length <= 0" class="select_address" @tap="toAddress">
						<span>选择地址</span>
						<i class="iconfont icon-iconfontjiantou5"></i>
					</div>
					<div v-else class="address">
						<div class="address_content" v-for="item in this.$store.getters.deliveryAddress" :key="item.id"
							@tap="toAddress">
							<div>
								<div>
									<span>{{ item.customer}}</span>
									<span class="phone"> {{item.customerphone}} </span>
								</div>
								<span class="address_detail"> {{item.addressdetail}} </span>
							</div>
							<i class="iconfont icon-iconfontjiantou5"></i>
						</div>
					</div>
					<div class="payType" @tap="changePayType">
						<span>支付方式</span>
						<div>
							<span v-if="payType" class="zhifu">
								<i class="iconfont icon-iconzhi01"></i>
								<span>支付宝</span>
							</span>
							<span v-else class="zhifu">
								<i class="iconfont icon-weixinzhifu"></i>
								<span>微信</span>
							</span>
							<i class="iconfont icon-iconfontjiantou5"></i>
						</div>
					</div>
					<div class="protocal">
						<i class="iconfont icon-gouxuanzhong" :class="active?'active':''" @tap="active=!active"></i>
						<span>我已阅读并同意</span>
						<span>《支付协议》</span>
					</div>
				</div>
			</Scroller>
		</div>
		<div class="fixfoot">
			<div>
				<span>合计：</span><b>￥{{totalMoney}}</b>
			</div>
			<div class="toPay" @click="toPay">去支付</div>
		</div>
		<PayType :isShow="callPayType" @callback="callbackHandler" />
	</div>
</template>

<script>
	import Header from '@/components/common/Header'
	import PayType from './PayType'
	import axios from 'axios'
	import Axios from 'axios'
	export default {
		name: 'Pay',
		components: {
			Header,
			PayType
		},
		data() {
			return {
				picked: 0, // 配送时间状态
				active: false, // 勾选支付协议状态
				callPayType: false, // 选择支付方式组件显示状态
				payType: true, // 支付方式true为支付宝，false为微信
				applyUrl:''
				
			}
		},
		methods: {
			// 路由返回
			back() {
				this.$router.back()
			},
			// 改变支付方式
			changePayType() {
				this.callPayType = true
				console.log(this.getTime());
			},
			// 接收子组件支付方式
			callbackHandler(data, payType) {
				this.payType = payType
				this.callPayType = data
			},
			// 支付
			toPay() {
				if (!this.active) {
					this.$toast("请先同意协议", 'center', 1000)
				} else {
						this.applyUrl = "http://123.57.175.146:8048/order/takeorder?uid=62&sid=" + this.$store.state.deliveryShop
						.id + "&token=123&aid=" + this.$store.getters
						.deliveryAddress[0].id + "&paytype=0&appotime=" + this.getTime() + "&oid=" + this.$route.params
						.oid +
						"&successUrl=http://localhost:8080/paysuccess/"+this.$route.params.oid
					window.location.href = this.applyUrl
				}
			},
			// 路由跳转到选择店面
			toSelectStore() {
				this.$router.push("/store")
			},
			// 路由跳转到选择收货地址
			toAddress() {
				this.$router.push("/address")
			},
			// 获取当前时间格式为yyyy-MM-dd
			getTime() {
				let date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth()
				let day = date.getDate()
				if (month <= 9) {
					month = "0" + month
				}
				if (day <= 9) {
					day = "0"+ day
				}
				return year + '-' + month + '-' + day
			},
			// 获取所有店面信息
			getShop() {
				this.$request({
						method: 'post',
						url: '/shop/query',
						data: {
							uid: this.$store.state.uid,
							token: this.$store.state.token
						}
					})
					.then(res => {
						this.computNearestShop(res)
					})
			},

			// 计算最近的店面
			computNearestShop(shoplist) {
				let req = []
				shoplist.forEach(item => {
					let requsetUrl =
						"https://restapi.amap.com/v3/direction/walking?origin=112.37384, 34.661337&destination=" +
						item.location + "&key=32afb243c6d01a86f788f6095f91b2fa"
					req.push(axios.get(requsetUrl))
				})
				axios.all(req).then(results => {
					let distance = []
					results.forEach(item => {
						distance.push(item.data.route.paths[0].distance)
					})
					distance.forEach((item, index) => {
						shoplist[index].distance = item
					})
					shoplist.sort(sortByDistance)

					function sortByDistance(a, b) {
						return a.distance - b.distance
					}
					this.$store.commit('saveShopInfo', shoplist)
					this.$store.commit('deliveryShop', shoplist[0])
				})
			}
		},
		created() {
			this.getShop()
		},
		computed: {
			// 需要支付的总价钱
			totalMoney() {
				let sum = 0
				let payComming = this.$store.state.payComming
				if (payComming.length > 0) {
					payComming.forEach(item => {
						if (item.number) {
							sum += item.number * item.price
						} else {
							sum += item.num * item.price
						}
						
					})
				}
				return sum.toFixed(2)
			}
		},
	}
</script>
<style lang="less" scoped>
	#pay {
		background-color: #f6f6f6;
		height: 1333px;

		.content {
			height: 1125px;
			overflow: hidden;
		}

		.selectStore {
			display: flex;
			background-color: #fff;
			margin: 0 20px 0;
			border-radius: 20px;
			height: 140px;
			align-items: center;
			justify-content: space-around;

			.icon-weibiaoti- {
				font-size: 60px;
				color: #F18D94;
			}

			.location {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				height: 100%;
				width: 70%;

				p {
					font-size: 34px;
				}

				span {
					font-size: 24px;
					color: #9F9F9F;
				}
			}
		}

		.product {
			background-color: #fff;
			margin: 20px 20px 0;
			padding: 0 30px;

			li {
				display: flex;
				padding: 40px 0;
				border-bottom: 1px solid #f6f6f6;

				img {
					width: 160px;
					height: 160px;
					// border-radius: 50%;
					margin-right: 30px;
				}

				&>div {
					display: flex;
					flex-direction: column;

					span:nth-child(3) {
						display: flex;
						justify-content: flex-end;
					}
				}

				.price {
					display: flex;
					justify-content: flex-end;
					flex-direction: column;
					flex: 1;
					position: relative;

					P {
						position: absolute;
						right: 0;
						bottom: 0;
					}
				}
			}
		}

		.takeType {
			background-color: #fff;
			margin: 0 20px 0;
			height: 100px;
			border-radius: 0 0 20px 20px;
			padding: 0 30px;

			&>div {
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			span:nth-child(1) {
				color: #9F9F9F;
			}
		}

		.takeTime {
			margin: 20px 20px 0;
			background-color: #fff;
			height: 180px;
			display: flex;
			flex-direction: column;
			padding: 0 20px;
			justify-content: space-around;

			ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				li {
					input {
						margin-right: 30px;
					}

					&:nth-child(3),
					&:nth-child(4) {
						margin-top: 20px;
					}
				}
			}
		}

		.coupon {
			background-color: #fff;
			margin: 20px 20px 0;
			border-radius: 20px;
			height: 90px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30px;

			span {
				color: #9F9F9F;
			}
		}

		.select_address {
			background-color: #fff;
			margin: 20px 20px 0;
			border-radius: 20px;
			height: 90px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30px;

			span {
				color: black;
			}
		}

		.address {
			background-color: #fff;
			margin: 20px 20px 0;
			border-radius: 20px;
			// height: 90px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 30px;

			.address_content {
				display: flex;
				width: 100%;
				align-items: center;
				justify-content: space-between;

				.phone {
					font-size: 28px;
					color: #999999;
				}
			}

		}

		.payType {
			background-color: #fff;
			margin: 20px 20px 0;
			border-radius: 20px;
			height: 90px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30px;

			span {
				color: #9F9F9F;
			}

			&>div {
				display: flex;
				align-items: center;
			}

			.zhifu {
				display: flex;

				.icon-weixinzhifu {
					color: #09BB07;
					font-size: 60px;
				}

				.icon-iconzhi01 {
					color: #3D9CFE;
					font-size: 60px;
				}

				span {
					color: black;
					height: fit-content;
					margin: 10px 20px 0 20px;
				}
			}
		}

		.protocal {
			margin: 20px 20px 0;

			.icon-gouxuanzhong {
				margin-right: 30px;
				color: #999999;
			}

			span {
				font-size: 26px;
			}

			span:nth-child(2) {
				color: #9F9F9F;

			}

			span:nth-child(3) {
				color: #3D9CFE;
			}
		}

		.fixfoot {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: #fff;
			display: flex;
			padding: 0 30px;
			justify-content: space-between;
			height: 100px;
			align-items: center;

			span {
				color: #9F9F9F;
			}

			.toPay {
				background-color: #DCB884;
				color: white;
				width: 220px;
				height: 80px;
				border-radius: 50px;
				text-align: center;
				line-height: 80px;
			}
		}

		.active {
			color: #09BB07 !important;
		}
	}
</style>