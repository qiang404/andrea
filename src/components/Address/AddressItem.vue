<template>
	<div class="addressItem">
		<ul>
			<li v-for="item in this.$store.getters.sortAddress" :key="item.id" @click="confirmAddress(item)">
				<div class="person">
					<span>{{item.customer}}</span>
					<span>{{item.customerphone}}</span>
				</div>
				<div class="address">
					<span>{{item.addressdetail}}</span>
				</div>
				<div class="opreation">
					<span>
						<i class="iconfont icon-gouxuanzhong" @click="showBox(item)"
							:class="item.isdefault==1?'active':''"></i>
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
		name: 'AddressItem',
		methods: {
			showBox(item) {
				if(item.isdefault === 1) return
				this.$messageBox('确定设为默认地址吗？', this.changeDefault(item.id), this)
			},
			changeDefault(id) {
				return function () {
					this.$request({
						method: 'post',
						url: '/address/setdefault',
						data: {
							uid: this.$store.state.user.id,
							token: this.$store.state.token,
							aid: id
						}
					}).then(res => {
						if (res.status === 0) {
							this.$store.commit("resetDefault")
							this.$store.commit('updateDefault',id)
							this.$toast("修改成功",'center',1000)
						}
					})
				}
			},
			confirmAddress(address) {
				this.$store.commit("confirmAddress",[address])
				this.$router.back()
			}
		},
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
				&:last-child{
					margin-bottom: 20px;
				}
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

				.address {
					font-size: 26px;
					color: #9B9B9B;
					border-bottom: 1px solid #f6f6f6;
					height: 70px;
				}

				.opreation {
					height: 120px;
					display: flex;
					align-items: center;
					justify-content: space-between;

					i {
						font-size: 36px;
						margin: 0 20px 0 10px;
					}

					.icon-gouxuanzhong {
						color: #999999;

					}

					.icon-bianji {
						color: #A6A6A6;
					}

					.icon-lajitong {
						font-size: 50px;
						color: #A6A6A6;
					}

					span {
						font-size: 28px;
						color: #A6A6A6;
						display: flex;
						align-items: center;
					}

					.edit {
						margin-right: -150px;
					}

					.active {
						color: #F18D94;
					}
				}
			}
		}

	}
</style>