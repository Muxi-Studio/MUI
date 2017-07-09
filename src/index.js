import Button from "./components/button"
import Toast from "./components/toast"
import Input from "./components/forms/input"
import Textarea from "./components/forms/textarea"
import Radio from "./components/forms/radio"
import Checkbox from "./components/forms/checkbox"
import CheckboxGroup from "./components/forms/checkbox/group"
import DatePicker from "./components/datepicker"
import Menu from "./components/menu/menu"
import Menuitem from "./components/menu/menuitem"
import SubMenu from "./components/menu/submenu"

const install = function (v) {
    v.component(Button.name, Button)
    v.component(Toast.name, Toast)
    v.component(Input.name, Input)
    v.component(Textarea.name, Textarea)
    v.component(Radio.name, Radio)
    v.component(Checkbox.name, Checkbox)
    v.component(CheckboxGroup.name, CheckboxGroup)
    v.component(DatePicker.name, DatePicker)
    v.component(Menu.name, Menu)
    v.component(Menuitem.name, Menuitem)
    v.component(SubMenu.name, SubMenu)
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
    DatePicker,
    Menu,
    Menuitem,
    SubMenu,
}
