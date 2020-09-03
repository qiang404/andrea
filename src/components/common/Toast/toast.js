/**
 * 自定义 提示框( Toast )组件
 */
import ToastComponent from './toast.vue'


var Toast = {};
Toast.install = function (Vue) {
	// 生成一个Vue的子类
	const ToastConstructor = Vue.extend(ToastComponent)
	// 生成一个该子类的实例
	const instance = new ToastConstructor();
	Vue.prototype.$toast = function (msg, type, duration,callback) {
		instance.msg = msg;
		instance.showToast = true;
		instance.type = 'lx-toast-' + type
		document.body.appendChild(instance.$mount().$el);
		setTimeout(function () {
			instance.showToast = false;
			callback && callback()
		}, duration)
	};
}



export default Toast 