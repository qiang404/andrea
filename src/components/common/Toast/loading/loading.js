import LoadingComponent from './loading.vue'

var Loading = {}

Loading.install = function (Vue) {
	// 生成一个Vue的子类
	const ToastConstructor = Vue.extend(LoadingComponent)
	// 生成一个该子类的实例
	const instance = new ToastConstructor();
	Vue.prototype.$loading = function (type,msg) {
		if (type === 'open') {
			instance.showToast = true;
			instance.msg = msg
			document.body.appendChild(instance.$mount().$el);
		} else {
			instance.showToast = false;
			instance.msg = ''
			document.body.removeChild(instance.$mount().$el);
		}

	};
}
export default Loading