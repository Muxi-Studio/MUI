import Button from "./components/button"
import Toast from "./components/toast"
import Input from "./components/forms/input"
import Textarea from "./components/forms/textarea"

const install = function (v) {
    v.component(Button.name, Button)
    v.component(Toast.name, Toast)
    v.component(Input.name, Input)
    v.component(Textarea.name, Textarea)
}

// auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    Button,
    Toast,
    Input,
    Textarea,
}
