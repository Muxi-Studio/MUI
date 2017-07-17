export default {
    bind: (el, binding, vnode) => {
        if (vnode.context.trigger) {
            el.addEventListener("mouseleave", binding.value)
        }
        // else {
        //     el.addEventListener("blur", binding.value)
        // }
    },
    unbind: (el, binding, vnode) => {
        if (vnode.context.trigger) {
            el.removeEventListener("mouseleave", binding.value)
        }
        // else {
        //     el.removeEventListener("blur", binding.value)
        // }
    },
}
