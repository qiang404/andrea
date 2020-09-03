<template>
	<div class="goods">
		<ul>
			<li>
				<input type="radio" @click="changeMe" v-radio="changed" :checked="isChecked" />
				<img src="http://ehelp.hyyclub.xyz/images/swiper/cake1.png" />
				<div class="context">
					<p>松软牛角面包(纯手工)</p>
					<span>无夹心</span>
					<div class="cal">
						<b>￥7.00</b>
						<div>
							<span>-</span><input type="text" value="1" /><span>+</span>
						</div>
					</div>
				</div>
			</li>
				<li>
				<input type="radio" :checked="isChecked" v-radio="changed" />
				<img src="http://ehelp.hyyclub.xyz/images/swiper/cake1.png" />
				<div class="context">
					<p>松软牛角面包(纯手工)</p>
					<span>无夹心</span>
					<div class="cal">
						<b>￥7.00</b>
						<div>
							<span>-</span><input type="text" value="1"/><span>+</span>
						</div>
					</div>
				</div>
			</li>
				<li>
				<input type="radio" v-radio="changed" :checked="isChecked" />
				<img src="http://ehelp.hyyclub.xyz/images/swiper/cake1.png" />
				<div class="context">
					<p>松软牛角面包(纯手工)</p>
					<span>无夹心</span>
					<div class="cal">
						<b>￥7.00</b>
						<div>
							<span>-</span><input type="text" value="1"/><span>+</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Goods',
		data() {
			return {
				changed:false,
			}
		},
		props:{
			isChecked:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			changeMe() {
				
			}
		}
	}
</script>
<style lang="less" scoped>
	.goods {
		background-color: #f6f6f6;
		height: 1200px;
		overflow: auto;

		ul {
			li {
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 210px;
				width: 700px;
				border-radius: 20px;
				margin: 10px auto 0;
				box-sizing: border-box;
				padding: 20px 20px;

				img {
					width: 165px;
					height: 160px;
					margin: 0 15px;
				}

				.context {
					display: flex;
					flex-direction: column;
					height: 100%;
					flex: 1;
					justify-content: space-around;
					// align-items: center;

					span{
						font-size: 12px;
						color: #6c6c6c;
						margin-top: -10px;
					}

					b {
						color: red;
					}
				}

				.cal {
					display: flex;
					justify-content:space-between;

					input {
						height: 40px;
						width: 80px;
						outline: none;
						border-top: 1px #d2d2d2 solid;
						border-bottom: 1px #d2d2d2 solid;
						border-left: none;
						border-right: none;
						justify-content: flex-end;
						text-align: center;
					}
					&>div{
						display: flex;
					}
					span {
						display: inline-block;
						width: 40px;
						height: 40px;
						border: 1px #d2d2d2 solid;
						text-align: center;
						margin: 0;
					}
				}
			}
		}
	}
</style>