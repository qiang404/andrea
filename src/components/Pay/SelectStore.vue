<template>
	<div id="selectStore">
		<div id="container">
		</div>
		<ul>
			<li v-for="(item,index) in this.$store.state.shopList" :key="item.id" class="shop" @click="func(index)">
				<div class="shopInfo">
					<span>{{ item.shopname }}</span>
					<span>{{ item.address }}</span>
				</div>
				<span class="distance">{{ item.distance }}米</span>
				<i class="iconfont icon-gouxuanzhong" :class="index === currentIndex?'active':''"></i>
			</li>
		</ul>
		<span class="comfirmBtn" @click="confirmShop()">确定</span>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'SelectStore',
		data() {
			return {
				markList: [],
				locationList: [],
				currentIndex: 0
			}
		},
		methods: {
			confirmShop() {
				this.$store.commit('deliveryShop',this.$store.state.shopList[this.currentIndex])
				this.$router.back()
			},
			func(index) {
				this.currentIndex = index
			}
		},
		created() {
			this.$store.state.shopList.forEach(item => {
				this.locationList.push(item.location)
			})
			console.log(this.locationList);
		},
		mounted() {
			window.onLoad = () => {
				let map = new AMap.Map('container', {
					resizeEnable: false,
					viewMode: '2D',
					center: [112.37384, 34.661337],
					zoom: 13,
					lang: 'zh_cn'
				});
				var center = new AMap.Marker({
					position: new AMap.LngLat(112.37384, 34.661337),
					title: '我的位置',
				})
				map.add(center)
				this.locationList.forEach(item => {
					let position = item
					let arr = position.split(',')
					let x, y
					x = arr[0]
					y = arr[1]
					var marker = new AMap.Marker({
						position: new AMap.LngLat(x, y),
						icon: 'http://www.hyyclub.xyz/andeliya.png'
					})
					map.add(marker)
				})
				AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
					map.addControl(new AMap.ToolBar());
					map.addControl(new AMap.Scale());
				})
			}
			let url = 'https://webapi.amap.com/maps?v=1.4.15&key=32afb243c6d01a86f788f6095f91b2fa&callback=onLoad';
			let jsapi = document.createElement('script');
			jsapi.charset = 'utf-8';
			jsapi.src = url;
			document.head.appendChild(jsapi);

		},
	}
</script>
<style lang="less" scoped>
	#selectStore {
		#container {
			width: 100%;
			height: 640px;

			.amap-logo,
			.amap-copyright {
				display: none !important;
			}
		}

		.active {
			color: darkorange;
		}

		.shop {
			display: flex;
			height: 100px;
			padding: 0 20px;
			justify-content: space-between;
			width: 90%;
			margin: 0 auto;
			align-items: center;

			&:nth-child(1) {
				margin-top: 40px;
			}

			&+li {
				margin-top: 20px;
				border-top: 1px #e3e3e4 solid;
			}

			.shopInfo {
				display: flex;
				flex-direction: column;
				flex: 2;
				span:nth-child(2) {
					color: #98999A;
					font-size: 26px;
				}
			}

			.distance {
				color: #98999A;
				font-size: 26px;
				flex: 1;
			}
		}

		.comfirmBtn {
			background-color: #F18D94;
			display: inline-block;
			height: 100px;
			width: 600px;
			border-radius: 50px;
			margin: 80px auto 0;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>