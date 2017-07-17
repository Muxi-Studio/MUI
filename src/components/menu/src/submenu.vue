<template>
	<li class="m-menu-item" @click="selectMenu" v-hover-open="selectMenu" v-hover-close="hoverCloseMethod"  :class="{ active: active }" v-if="$slots.default || label">
		<slot name="title"></slot>
		<template v-if="!$slots.title"><a>{{label}}</a></template>
		<span class="arrow">></span>
		<template>
			<div class="submenu" v-show="active">
				<slot></slot>
			</div>
		</template>
	</li>
</template>
<script>
import { bus } from "../../../emitter/bus"

import hoverOpen from "./directives/hover-open"
import hoverClose from "./directives/hover-close"

export default {
    name: "m-submenu",
    props: ["label", "index"],
    data() {
        return {
            active: false,
            trigger: false,
        }
    },
    directives: {
        HoverOpen: hoverOpen,
        HoverClose: hoverClose,
    },
    created() {
        this.trigger = !(this.rootMenu.trigger === "click")
        // bus.$emit("addTag", this.index)
        bus.$on("update", this.updateFocus)
        bus.$on("updateArray", this.updateFocusArray)
    },
    methods: {
        selectMenu(e) {
            e.stopPropagation()
            this.active = true
            this.rootMenu.modify(this.index)          
        },
        updateFocus(e) {
            if (this.index !== e) {
                this.active = false
            }
        },
        hoverOpenMethod() {
            this.active = true
        },
        hoverCloseMethod() {
            this.active = false
        },
        updateFocusArray(e) {
            if (e.indexOf(this.index) !== -1) {
                this.active = true
            } else {
                this.active = false
            }
        },
    },
    computed: {
        rootMenu() {
            var parent = this.$parent
            while (parent.$options.name !== "m-menu") {
                parent = parent.$parent
            }
            return parent
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/font.scss';
@import '../../../scss/common/color.scss';
.active{
	color:$primary-darker;
}
.submenu{
	background-color: $text-darkest;
	display: inline-block;
	position: absolute;
	width:200px;
	top:0;
	left:100%;
}
.submenu>.m-menu-item{
	&:hover{
		color:#f4d03f;
		cursor: pointer;
	}
}
.arrow{
	transform:translate(30px,30px)
}
</style>