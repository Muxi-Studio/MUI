<template>
    <td>{{label}}</td>
</template>


<script>
import { bus } from "../../emitter/bus"

export default {
    name: "m-table-col",
    props: ["width", "prop", "label"],
    mounted() {
        var conf = {
            width:this.width,
            prop:this.prop,
            label:this.label
        }
        bus.$emit("initCol",conf)
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
