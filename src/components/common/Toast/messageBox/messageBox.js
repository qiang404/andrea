import messageBoxComponent from './messageBox.vue'

let messageBox = {}
messageBox.install = function (Vue) {
	// 生成一个Vue的子类
	const ToastConstructor = Vue.extend(messageBoxComponent)
	// 生成一个该子类的实例
	const instance = new ToastConstructor();
	Vue.prototype.$messageBox = function (msg,userFunc,that) {
		instance.msg = msg;
		instance.isShow = true;
		instance.userFunc = userFunc
		instance.that = that
		document.body.appendChild(instance.$mount().$el)
	};
}

export default messageBox