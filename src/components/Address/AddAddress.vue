<template>
	<div id="addAddress">
		<Header>
			<i slot="left" class="iconfont icon-zuojiantou" @click="back"></i>
			<p slot="middle">收货地址</p>
			<div slot="right"></div>
		</Header>
		<div class="address_main">
			<div class="address_main_item">
				<label>用户名</label><input type="text" placeholder="请输入取餐人" v-model="name">
			</div>
			<div class="address_main_item">
				<label>手机号</label><input type="text" placeholder="请输入手机号" v-model="tel">
			</div>
			<div class="address_main_item">
				<label>地址</label><input type="text" placeholder="请输入地址" v-model="address">
			</div>
			<div class="address_main_item">
				<label>默认地址</label>
				<div class="container">
					<div class="bg_con">
						<input id="checked_1" type="checkbox" class="switch" v-model="isdefault" />
						<label for="checked_1"></label>
					</div>
				</div>
			</div>
			<span id="savebtn" @click="saveAddress">保存</span>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/common/Header'
	export default {
		name: 'AddAddress',
		components: {
			Header
		},
		data() {
			return {
				name:'',
				tel:'',
				address:'',
				isdefault:false
			}
		},
		methods: {
			back() {
				this.$router.back()
			},
			saveAddress() {
				if (this.name && this.tel && this.address) {
					this.$request({
						methods:"post",
						url:'/address/add',
						data:{
							uid:this.$store.state.user.uid,
							token:this.$store.state.user.token,
							customer:this.name,
							customerphone:this.tel,
							address:this.address,
							iisDefault:this.isdefault?1:0
						}
					}).then(res => {
						if (res.status === 0) {
							this.$toast("添加成功",'center',500,() => {
								if (this.isdefault) this.$store.commit('resetDefault')
								this.$store.commit('saveAddress',res.table)
								this.$router.back();
							})
						}
					})
				} else {
					this.$toast("信息不能为空",'center',1000,)
				}
			}
		},

	}
</script>
<style lang="less" scoped>
	#addAddress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 998;
		background-color: #f6f6f6;
		animation: movein .3s;

		.address_main {
			margin-top: 30px;
			background-color: #fff;
			height: 100%;

			.address_main_item {
				display: flex;
				padding: 0 20px;
				height: 100px;
				justify-content: space-between;
				align-items: center;

				input {
					outline: none;
					border: none;
					width: 460px;
					height: 100%;
				}

				.container {
					.bg_con .switch {
						display: none;
					}

					.bg_con label {
						position: relative;
						display: block;
						padding: 1px;
						border-radius: 48px;
						height: 44px;
						margin-bottom: 30px;
						background-color: #eee;
						cursor: pointer;
						-webkit-user-select: none;
						width: 80px;
					}

					.bg_con label:before {
						content: '';
						display: block;
						border-radius: 48px;
						height: 44px;
						background-color: white;
						transform: scale(1, 1);
						transition: all 0.3s ease;
					}

					.bg_con label:after {
						content: '';
						position: absolute;
						top: 50%;
						left: 50%;
						margin-top: -22px;
						margin-left: -22px;
						width: 44px;
						height: 44px;
						border-radius: 44px;
						background-color: white;
						box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.08);
						transform: translateX(-18px);
						transition: all 0.3s ease;
					}

					.bg_con .switch:checked~label:after {
						transform: translateX(18px);
					}

					.bg_con .switch:checked~label:before {
						background-color: #61B161;
					}
				}
			}

			#savebtn {
				background-color: #F18D94;
				display: inline-block;
				height: 100px;
				width: 600px;
				border-radius: 50px;
				margin: 400px auto 0;
				color: white;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	@keyframes movein {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(0);
		}
	}
</style>