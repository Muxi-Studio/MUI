<template>
	<li class="m-menu-item" @click="selectMenu" @mouseover="active = true" @mouseleave="active = false" :class="{ active: focus }" v-if="$slots.default || label">
		<slot name="title"></slot>
		<template v-if="!$slots.title"><a>{{label}}</a></template>
		<span class="arrow">></span>
		<template v-if="active">
			<div class="submenu" @mouseover="active = true">
				<slot></slot>
			</div>
		</template>
	</li>
</template>
<script>
import { bus } from "../../../emitter/bus"

export default {
    name: "m-submenu",
    props: ["label"],
    data() {
        return {
            focus: false,
            active: false,
        }
    },
    created() {
        bus.$emit("addTag", this.label)
        bus.$on("update", this.updateFocus)
        console.log(this.$slots)
    },
    methods: {
        selectMenu() {
            this.focus = true
            this.$parent.modify(this.label)
        },
        updateFocus(e) {
            if (this.label !== e){
                this.focus = false
            }
        },
        mouseOver() {
            console.log("haha")
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