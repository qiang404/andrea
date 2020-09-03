<template>
	<div class="orderItem">
		<ul>
			<li>
				<div class="orderNum">
					<span>订单号：20200309162</span>
					<span>进行中</span>
				</div>
				<div class="main">
					<img src="http://101.200.88.248:8044/img/5.png">
					<div class="intro">
						<span>鲜奶油双层蛋糕--皇冠款</span>
						<span>价格6寸128 8寸208</span>
						<span>￥128.00</span>
					</div>
				</div>
				<div class="opreation">
					<span>取消预约</span><span>确认收货</span>
				</div>
			</li>
				<li>
				<div class="orderNum">
					<span>订单号：20200309162</span>
					<span>进行中</span>
				</div>
				<div class="main">
					<img src="http://101.200.88.248:8044/img/5.png">
					<div class="intro">
						<span>鲜奶油双层蛋糕--皇冠款</span>
						<span>价格6寸128 8寸208</span>
						<span>￥128.00</span>
					</div>
				</div>
				<div class="opreation">
					<span>取消预约</span><span>确认收货</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'OrderItem',


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
				.main{
					display: flex;
					border-bottom: 4px solid #f6f6f6;
					height: 200px;
					align-items: center;
					img{
						width: 180px;
						height: 160px;
						margin:0 15px;
					}
					.intro{
						height: 160px;
						display: flex;
						flex-direction: column;
						span{
							flex:1;
						}
						span:nth-child(1) {
							font-size: 30px;
							font-weight: 500
						}
						span:nth-child(2) {
							font-size: 10px;
							color:#D3D3D3;
						}
					}
				}
				.opreation{
					display: flex;
					height: 100px;
					align-items: center;
					justify-content:flex-end;
					span{
						font-size: 22px;
						border: 1px solid #DADADA;
						color:#9C9C9C;
						display: inline-block;
						width: 140px;
						text-align: center;
						height: 50px;
						line-height: 50px;
						border-radius: 10px;
					}
					span+span{
						margin-left: 20px;
					}
				}
			}
			li+li{
				margin-top: 15px;
			}
		}
	}
</style>