<template>
	<div id="order">
		<Header>
			<i class="iconfont icon-zuojiantou" slot="left" @click="back"></i>
			<p slot="middle">我的订单</p>
			<span slot="right"></span>
		</Header>
		<ul class="orderState">
			<li v-for="(item,index) in orderStateList" :key="index" :class="currentIndex == index?'active':''"
				@click="changeData(index)">{{ item }}</li>
		</ul>
		<OrderItem :orderDetailList="orderDetailList" />
	</div>
</template>

<script>
	import Header from '@/components/common/Header'
	import OrderItem from './OrderItem'
	export default {
		name: 'Order',
		components: {
			Header,
			OrderItem,

		},
		data() {
			return {
				orderStateList: ["全部", "待支付", "进行中", "已完成", "已取消"],
				currentIndex: 0,
				orderDetailList: []
			}
		},
		methods: {
			back() {
				this.$router.push('/mine')
			},
			requestAddress(index) {
				this.$request({
					method: 'post',
					url: '/order/query',
					data: {
						uid: this.$store.state.user.uid,
						token: this.$store.state.user.token,
						payState: index - 1
					}
				}).then(res => {
					if (res.status === 0) {
						this.orderDetailList = res.table
					}
				})
			},
			changeData(index) {
				this.currentIndex = index
				this.requestAddress(index)
			}
		},
		activated() {
			this.$bus.$on('orderUpdate', () => {
				this.requestAddress(0)
			})
			this.currentIndex == 0
			this.requestAddress(0)
		}

	}
</script>
<style lang="less" scoped>
	#order {
		background-color: #f6f6f6;
		height: 1333px;

		.orderState {
			display: flex;
			background-color: #fff;
			height: 80px;
			align-items: center;
			justify-content: space-around;

			li {
				height: 100%;
				padding-top: 20px;
				box-sizing: border-box;
			}

			.active::after {
				content: '';
				display: block;
				width: 50px;
				border-top: 4px solid red;
				margin: 10px auto 0;

			}
		}
	}
</style>