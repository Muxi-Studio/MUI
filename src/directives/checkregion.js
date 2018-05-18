let eventID

export default {
    bind(el, binding) {
        eventID = document.body.addEventListener("click", (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value()
            }
        })
    },
    unbind() {
        document.body.removeEventListener("click", eventID)
    },
}
