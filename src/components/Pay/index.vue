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
				<div class="selectStore">
					<i class="iconfont icon-weibiaoti-"></i>
					<div class="location">
						<p>洛阳王府井店</p>
						<span>洛阳 涧西区 王府井百货楼一路 中州中路429号</span>
					</div>
					<i class="iconfont icon-iconfontjiantou5"></i>
				</div>
				<ul class="product">
					<li v-for="item in this.$store.state.payComming" :key="item.pid">
						<img :src="item.imageurl">
						<div>
							<span>{{item.name}}</span>
							<span>{{item.categoryname}}</span>
							<span>×{{item.num}}</span>
						</div>
						<span class="price">
							<p>￥{{item.stock}}</p>
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
				<div class="payType" @tap="changePayType">
					<span >支付方式</span>
					<div>
						<span v-if="payType" class="zhifu">
							<i class="iconfont icon-weixinzhifu"></i>
							<span>微信支付</span>
						</span>
						<span v-else class="zhifu">
							<i class="iconfont icon-iconzhi01"></i>
							<span>支付宝</span>
						</span>
						<i class="iconfont icon-iconfontjiantou5"></i>
					</div>
				</div>
				<div class="protocal">
					<i class="iconfont icon-gouxuanzhong" :class="active?'active':''" @click="active=!active"></i>
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
			<div class="toPay">去支付</div>
		</div>
		<PayType :isShow="callPayType" @callback="callbackHandler"/>
	</div>
</template>

<script>
	import Header from '@/components/common/Header'
	import PayType from './PayType'
	export default {
		name: 'Pay',
		components: {
			Header,
			PayType
		},
		data() {
			return {
				picked: 0,
				active: false,
				callPayType:false,
				payType:true
			}
		},
		methods: {
			back() {
				this.$router.back()
			},
			changePayType() {
				this.callPayType = true
			},
			callbackHandler(data,payType) {
				this.payType = payType
				this.callPayType = data
			}
		},
		computed: {
			totalMoney() {
				let sum = 0
				let payComming = this.$store.state.payComming
				if (payComming.length > 0) {
					payComming.forEach(item => {
						sum += item.num * item.stock
					})
				}
				return sum
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
				.icon-iconzhi01{
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