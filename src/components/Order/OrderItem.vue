<template>
	<div class="orderItem">
		<ul>
			<li v-for="item in orderDetailList" :key="item.ordernumber">
				<div class="orderNum">
					<span>订单号：{{item.ordernumber}}</span>
					<span v-if="item.paystatus === 0">待支付</span>
					<span v-else-if="item.paystatus === 1">进行中</span>
					<span v-else-if="item.paystatus === 2">已完成</span>
					<span v-else-if="item.paystatus === 3">已取消</span>
				</div>
				<div class="main" v-for="x in item.OrderList" :key="x.odid">
					<img :src="x.imgurl">
					<div class="intro">
						<span>{{ x.name}}</span>
						<span>数量{{x.number}} 价格{{x.price.toFixed(2)}}</span>
						<span>￥{{(x.price * x.number).toFixed(2)}} </span>
					</div>
				</div>
				<div class="opreation" v-if="item.paystatus === 0">
					<span @click="cancelOrder(item.id)">取消订单</span><span @click="toPay(item)">去支付</span>
				</div>
				<div class="opreation" v-else-if="item.paystatus === 1">
					<span @click="cancelBook">取消预约</span><span @click="confimReceive(item.id)">确认收货</span>
				</div>
				<div class="opreation" v-else-if="item.paystatus === 2 || item.paystatus === 3">
					<span>删除订单</span><span>查看订单</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'OrderItem',
		props: {
			orderDetailList: {
				type: Array,
				default: []
			}
		},
		methods: {
			cancelBook() {
			},
			confimReceive(oid) {
				this.$messageBox('确认收货吗', () => {
					this.$request({
						method: 'post',
						url: '/order/changeorder',
						data: {
							uid: this.$store.state.user.uid,
							token: this.$store.state.user.token,
							oid: oid,
							payState: 2
						}
					}).then(res => {
						if (res.status === 0) {
							this.$bus.$emit('orderUpdate')
							this.$toast('确认收货成功', 'center', 1000)
						}
					}, this)
				})
			},
			cancelOrder(oid) {
				this.$messageBox('确定取消订单吗', () => {
					this.$request({
						method: 'post',
						url: '/order/changeorder',
						data: {
							uid: this.$store.state.user.uid,
							token: this.$store.state.user.token,
							oid: oid,
							payState: 3
						}
					}).then(res => {
						if (res.status === 0) {
							this.$toast('取消订单成功', 'center', 1000)
							this.$bus.$emit('orderUpdate')
						}
					}, this)
				})
			},
			toPay(item) {
				this.$store.commit('submitPayGoods',item.OrderList)
				this.$router.push('/pay/'+item.id)
			}
		},
	}
</script>
<style lang="less" scoped>
	.orderItem {
		ul {
			margin-top: 20px;

			li {
				display: flex;
				flex-direction: column;
				padding: 0 20px;
				background-color: #fff;

				.orderNum {
					display: flex;
					height: 80px;
					justify-content: space-between;
					align-items: center;
					border-bottom: 4px solid #f6f6f6;
					font-weight: 500;
					font-size: 28px;
				}

				.main {
					display: flex;
					border-bottom: 4px solid #f6f6f6;
					height: 200px;
					align-items: center;

					img {
						width: 180px;
						height: 160px;
						margin: 0 15px;
					}

					.intro {
						height: 160px;
						display: flex;
						flex-direction: column;

						span {
							flex: 1;
						}

						span:nth-child(1) {
							font-size: 30px;
							font-weight: 500
						}

						span:nth-child(2) {
							font-size: 10px;
							color: #D3D3D3;
						}
					}
				}

				.opreation {
					display: flex;
					height: 100px;
					align-items: center;
					justify-content: flex-end;

					span {
						font-size: 22px;
						border: 1px solid #DADADA;
						color: #9C9C9C;
						display: inline-block;
						width: 140px;
						text-align: center;
						height: 50px;
						line-height: 50px;
						border-radius: 10px;
					}

					span+span {
						margin-left: 20px;
					}
				}
			}

			li+li {
				margin-top: 15px;
			}
		}
	}
</style>