import Button from "./components/button"
import Toast from "./components/toast"

const install = function (v) {
    v.component(Button.name, Button)
    v.component(Toast.name, Toast)
}

// auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    Button,
    Toast,
}
