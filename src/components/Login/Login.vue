<template>
	<div id="login">
		<Header>
			<i slot="left" class="iconfont icon-zuojiantou" @click="back"></i>
			<p class="title" slot="middle">登录</p>
			<span slot="right"></span>
		</Header>
		<img src="http://ehelp.hyyclub.xyz/images/swiper/andrea.jpg" alt="" />
		<h2>Andrea</h2>
		<ul>
			<li>
				<i class="iconfont icon-shouji54"></i>
				<input type="text" v-model="tel" placeholder="请输入会员/手机号" />
			</li>
			<li>
				<i class="iconfont icon-iconset0114"></i>
				<input type="password" v-model="pwd" placeholder="请输入密码" @keyup.enter="login" />
				<span>忘了?</span>
			</li>
		</ul>
		<span class="loginBtn" @click="login">登录</span>
		<p>您还没有账号？</p>
		<router-link tag="p" to="/mine/register">立即注册</router-link>
	</div>
</template>

<script>
	import Header from '@/components/common/Header'
	export default {
		name: "Login",
		components: {
			Header
		},
		data() {
			return {
				pwd: '',
				tel: ''
			}
		},
		methods: {
			back() {
				this.$router.back()
			},
			login() {
				if (this.pwd && this.tel) {
					let loginConfig = {
						url: '/users/logincheck',
						data: {
							account: this.tel,
							pwd: this.pwd
						}
					}
					this.$request(loginConfig).then(res => {
							if (res.message === 'success' && res.status === 0) {
								let getShopCarConfig = {
									url: '/shopcar/query',
									method: 'post',
									data: {
										uid: res.table.id,
										token: res.token
									}
								}
								let getAddressConfig = {
									method: "post",
									url: "/address/querybyuser",
									data: {
										uid: res.table.id,
										token: res.token
									}
								}
								this.$request(getAddressConfig).then(res => {
									this.$store.commit('clearAddress')
									this.$store.commit('saveAddress', res.table)
								})
								this.$toast('登录成功', 'center', 1000, () => {
									let user = {
										uid: res.table.id,
										imgurl: res.table.imgurl,
										token: res.token
									}
									this.$store.commit('saveUser', user)
									window.sessionStorage.setItem("user",JSON.stringify(user) )
									if (this.$route.params.from == '/mine/register') this.$router.push('/mine')
									else this.$router.push(this.$route.params.from)
								})
								return this.$request(getShopCarConfig)
							} else if (res.message === '账号信息错误' && res.status === 1) {
								this.$toast('账号密码错误', 'center', 1000)
							}
						})
						.then(res => {
							if (res.status === 0) {
								res.table.forEach(item => {
									item.select = false
								})
								this.$store.commit('initGoods', res.table)
							}
						})
				} else {
					this.$toast("账号密码不能为空", 'center', 1000)
				}
			}
		},
		activated() {}
	};
</script>
<style lang="less" scoped>
	#login {
		background-color: #fff;
		overflow: auto;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index:100;
		.title {
			font-size: 40px;
			margin-left: 260px;
		}

		img {
			width: 330px;
			height: 330px;
			margin: 20px auto 0;
		}

		h2 {
			width: fit-content;
			margin: 0 auto;
			font-family: "黑体";
			font-size: 80px;
			font-weight: bold;
			margin-top: 20px;
		}

		ul {
			width: 600px;
			margin: 60px auto 50px;
			height: 230px;
			border: 1px solid #dfdfdf;
			border-radius: 30px;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			padding: 0 30px;

			li {
				flex: 1;
				display: flex;
				align-items: center;

				&+li {
					border-top: 1px solid #dfdfdf;
				}

				i {
					font-size: 48px;
					margin-right: 20px;
				}

				input {
					border: none;
					outline: none;
					font-size: 32px;
				}

				span {
					color: #f6b1b5;
					font-size: 30px;
				}
			}
		}

		.loginBtn {
			width: 600px;
			margin: 0 auto 100px;
			display: block;
			background-color: #f18d94;
			color: white;
			height: 90px;
			text-align: center;
			line-height: 100px;
			border-radius: 50px;
		}

		p {
			width: fit-content;
			margin: 0 auto;
		}

		p+p {
			margin-top: 30px;
			color: #e8d1af;
		}
	}
</style>