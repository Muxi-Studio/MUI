<template>
	<li class="m-menu-item" @click="selectMenu" :class="{ active: focus }" v-if="$slots.default || label">
		<slot></slot>
		<template v-if="!$slots.default">{{label}}</template>
	</li>
</template>
<script>
export default {
    name: "m-menu-item",
    props: ["label"],
    data() {
        return {
            focus: false,
        }
    },
    methods: {
        selectMenu() {
            this.focus = !this.focus
        },
    },
    computed: {
        focus: {
            get() {
                return this.focus
            },
            set(val) {
                this.state[this.label] = val
                this.$parent.modify(this.state)
                return !this.focus
            },
        },
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