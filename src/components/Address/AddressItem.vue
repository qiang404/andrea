<template>
	<div class="addressItem">
		<ul>
			<li>
				<div class="person">
					<span>小王</span>
					<span>13525472293</span>
				</div>
				<div class="address">
					<span>河南洛阳市嵩县伊东水城A区606</span>
				</div>
				<div class="opreation">
					<span>
						<i class="iconfont icon-gouxuanzhong" style="color:#F18D94"></i>
						<span>设为默认</span>
					</span>
					<span class="edit">
						<i class="iconfont icon-bianji"></i>
						<span>编辑</span>
					</span>
					<span>
						<i class="iconfont icon-lajitong"></i>
						<span>删除</span>
					</span>
				</div>
			</li>
			<li>
				<div class="person">
					<span>小王</span>
					<span>13525472293</span>
				</div>
				<div class="address">
					<span>河南洛阳市嵩县伊东水城A区606</span>
				</div>
				<div class="opreation">
					<span>
						<i class="iconfont icon-gouxuanzhong"></i>
						<span>设为默认</span>
					</span>
					<span class="edit">
						<i class="iconfont icon-bianji"></i>
						<span>编辑</span>
					</span>
					<span>
						<i class="iconfont icon-lajitong"></i>
						<span>删除</span>
					</span>
				</div>
			</li>
			<li>
				<div class="person">
					<span>小王</span>
					<span>13525472293</span>
				</div>
				<div class="address">
					<span>河南洛阳市嵩县伊东水城A区606</span>
				</div>
				<div class="opreation">
					<span>
						<i class="iconfont icon-gouxuanzhong"></i>
						<span>设为默认</span>
					</span>
					<span class="edit">
						<i class="iconfont icon-bianji"></i>
						<span>编辑</span>
					</span>
					<span>
						<i class="iconfont icon-lajitong"></i>
						<span>删除</span>
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'AddressItem'

	}
</script>
<style lang="less" scoped>
	.addressItem {
		ul {
			padding: 0 20px;

			li {
				background-color: #fff;
				border-radius: 20px;
				padding: 0 20px;
				margin-top: 20px;
				display: flex;
				flex-direction: column;
				.person {
					height: 80px;
					display: flex;
					align-items: center;
					span {
						font-size: 38px;
						color: #463C3A;
						margin-right: 30px;

					}
				}
				.address{
					font-size: 26px;
					color: #9B9B9B;
					border-bottom: 1px solid #f6f6f6;
					height: 70px;
				}
				.opreation{
					height: 120px;
					display: flex;
					align-items:center;
					justify-content: space-between;
					i{
						font-size: 36px;
						margin:0 20px 0 10px;
					}
					.icon-gouxuanzhong{
						color: #999999;
					}
					.icon-bianji{
						color: #A6A6A6;
					}
					.icon-lajitong{
						font-size: 50px;
						color: #A6A6A6;
					}
					span{
						font-size: 28px;
						color: #A6A6A6;
						display: flex;
						align-items: center;
					}
					.edit{
						margin-right: -150px;
					}
				}
			}
		}

	}
</style>