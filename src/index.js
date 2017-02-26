import Button from "./components/button"

const install = function (v) {
    v.component(Button.name, Button)
}

// auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    Button,
}
