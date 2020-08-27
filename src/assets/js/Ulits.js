export function debounce (func,delay) {
    let timer = null
    return function () {
        if (timer) {
            this.scroll.finishPullUp()
            clearTimeout(timer)
            console.log('清除了');
        }
        timer = setTimeout(() => {
            console.log('触发了');
            func.apply(this)
        }, delay);
    }
}