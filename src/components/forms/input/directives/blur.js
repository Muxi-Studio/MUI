export default {
    bind: (el, binding) => {
        el.addEventListener("blur", binding.value)
    },
    unbind: (el, binding) => {
        el.removeEventListener("blur", binding.value)
    },
}
