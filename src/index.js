import Button from '../packages/button';
import Vue from	'vue'


const install = function (Vue) {
	Vue.component(Button.name, Button);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports={
	install,
	Button
};