<template>
    <div class="m-table-head-item" v-bind:style="{ width: width + 'px'}">{{label}}</div>
</template>
<script>
import { bus } from "../../emitter/bus"

export default {
    name: "m-table-col",
    props: ["width", "prop", "label"],
    mounted() {
        if (this.$slots.default) {
            const send = {
                prop: this.prop,
                vnode: this.$slots.default,
            }
            bus.$emit("sloton", send)
        }
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-table-head-item{
	display: inline-block;
	font-size: 16px;
	text-align: left;
	text-indent: 8px;
}
</style>
