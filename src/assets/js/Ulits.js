export function debounce (func,delay) {
    let timer = null
    return function () {
        if (timer) {
            this.scroll.finishPullUp()
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this)
        }, delay);
    }
}

export function throttle(func, wait) {
    let timeout; 
    return function () {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }
        this.finishPullUp()
    }
}
