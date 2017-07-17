export default {
    bind: (el, binding, vnode) => {
        if (vnode.context.trigger) {
            el.addEventListener("mouseover", binding.value)
        }
        // else {
        //     el.addEventListener("click", binding.value)
        // }
    },
    unbind: (el, binding, vnode) => {
        if (vnode.context.trigger) {
            el.addEventListener("mouseover", binding.value)
        }
        // else {
        //     el.addEventListener("click", binding.value)
        // }
    },
}
