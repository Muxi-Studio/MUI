<template>
	<li class="m-menu-item" @click="selectMenu" v-hover-open="openMethod" v-hover-close="closeMethod" :class="{ active: active }" v-if="$slots.default || label">
		<slot></slot>
		<template v-if="!$slots.default">{{label}}</template>
	</li>
</template>
<script>
import { bus } from "../../../emitter/bus"
import hoverOpen from "./directives/hover-open"
import hoverClose from "./directives/hover-close"
import menuMixin from "./mixin"

export default {
    name: "m-menu-item",
    props: ["label", "index"],
    data() {
        return {
            active: false,
            trigger: false,
        }
    },
    mixins: [menuMixin],
    created() {
        this.trigger = !(this.rootMenu.trigger === "click")
        // bus.$emit("addTag", this.index)
        bus.$on("update", this.updateFocus)
        bus.$on("updateArray", this.updateFocusArray)
    },
    directives: {
        HoverOpen: hoverOpen,
        HoverClose: hoverClose,
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/font.scss';
@import '../../../scss/common/color.scss';
.m-menu-item{
    list-style:none;
    padding: 20px 100px 20px 30px;
    font-size: $fontsize-button;
    color:$secondary-color;
    position: relative;
}
.m-menu>.m-menu-item{
	&:hover{
		background-color: $text-darkest;
		cursor: pointer;
		&::before{
			content: "";
			position: absolute;
			top:0;
			left: 0;
			width: 4px;
			height: 100%;
			background-color: #f4d03f;
		}
	}
}
.active{
	color:$primary-darker;
}
</style>