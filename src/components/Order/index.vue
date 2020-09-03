<template>
	<div id="order">
		<Header>
			<i class="iconfont icon-zuojiantou" slot="left" @click="back"></i>
			<p slot="middle">我的订单</p>
			<span slot="right"></span>
		</Header>
		<OrderItem/>
	</div>
</template>

<script>
	import Header from '@/components/common/Header'
	import OrderItem from './OrderItem'
	export default {
		name: 'Order',
		components: {
			Header,
			OrderItem
		},
		methods: {
			back() {
				this.$router.back()
			}
		}

	}
</script>
<style lang="less" scoped>
	#order {
		background-color: #f6f6f6;
		height: 1230px;
	}
</style>