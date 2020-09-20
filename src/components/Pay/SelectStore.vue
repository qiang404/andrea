<template>
	<div id="selectStore">
		<div id="container">
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'SelectStore',
		data() {
			return {

			}
		},
		mounted() {
			window.onLoad = function () {
			 let	map = new AMap.Map('container', {
					resizeEnable: true,
					viewMode: '2D',
					center: [112.434468,34.663041],
					zoom: 11,
					lang: 'zh_cn'
				});
				axios.get(
						'https://restapi.amap.com/v3/place/text?s=rsv3&children=&key=8325164e247e15eea68b59e89200988b&page=1&offset=10&city=410300&language=zh_cn&callback=jsonp_164334_&platform=JS&logversion=2.0&sdkversion=1.3&appname=https%3A%2F%2Flbs.amap.com%2Fconsole%2Fshow%2Fpicker&csid=66F55453-AEB7-40E5-879A-623B7A53FCB2&keywords=安德莉亚'
						)
					.then(res => {
						let data = res.data.replace(/jsonp_164334_\(/, '')
						data = data.slice(0, data.length - 1)
						data = JSON.parse(data)
						data = data.pois
						let markList = []
						data.forEach(item => {
							let position = item.location
							let arr = position.split(',')
							let x, y
							x = arr[0]
							y = arr[1]
							var marker = new AMap.Marker({
								position: new AMap.LngLat(x, y),
								title: item.name,
							})
							map.add(marker);
						})
					})
				AMap.plugin('AMap.Geolocation', function () {
					var geolocation = new AMap.Geolocation({
						enableHighAccuracy: true, //是否使用高精度定位，默认:true
						timeout: 10000, //超过10秒后停止定位，默认：5s
						buttonPosition: 'RB', //定位按钮的停靠位置
						buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
						zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点

					});
					map.addControl(geolocation);
					geolocation.getCurrentPosition(function (status, result) {
						if (status == 'complete') {
							onComplete(result)
						} else {
							onError(result)
						}
					});
				});
				//解析定位结果
				function onComplete(data) {}
				//解析定位错误信息
				function onError(data) {}

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
	}
</style>