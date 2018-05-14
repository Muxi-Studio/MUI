export default{
    bind (el, binding, vnode) {
        el.event = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value()
            }
        }
        document.body.addEventListener('click', el.event)
    },
    unbind (el) {
        document.body.removeEventListener('click', el.event)
    }
    
}