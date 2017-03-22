import Button from "./components/button"
import Toast from "./components/toast"
import Input from "./components/forms/input"
import Textarea from "./components/forms/textarea"
import Radio from "./components/forms/radio"
import Checkbox from "./components/forms/checkbox"
import CheckboxGroup from "./components/forms/checkbox/group"
import DatePicker from "./components/datepicker"

const install = function (v) {
    v.component(Button.name, Button)
    v.component(Toast.name, Toast)
    v.component(Input.name, Input)
    v.component(Textarea.name, Textarea)
    v.component(Radio.name, Radio)
    v.component(Checkbox.name, Checkbox)
    v.component(CheckboxGroup.name, CheckboxGroup)
    v.component(DatePicker.name, DatePicker)
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
    Radio,
    Checkbox,
    CheckboxGroup,
}
