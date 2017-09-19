<template>
<div class="m-table-wrapper">
    <slot></slot>
    <table class="m-table">
        <thead></thead>
        <m-table-body :data="data" :columns="columns"></m-table-body>
    </table>
</div>
</template>
<script>
import { bus } from "../../emitter/bus"
import TableBody from "./table-body.vue"
import TableCol from "./table-col.vue"

export default {
    name: "m-table",
    props: ["data"],
    data() {
        return {
            columns: []
        }
    },
    created() {
        bus.$on("initCol",this.addCol)
    },
    mounted() {
    },
    components: {
        "m-table-body":TableBody,
        "m-table-col":TableCol
    },
    methods: {
        addCol(e){
            this.columns.push(e)
        }
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-table{
	width: auto;
	display: inline-block;
}
.m-table-head{
	background-color: $secondary-color;
	color:$text-darker;
	font-size: 0px;
	font-weight: bold;
	height: 50px;
	overflow: hidden;
	line-height: 50px;
}
.m-table-row{
	width:auto;
	font-size: 14px;
	min-height: 50px;
	border:1px solid $secondary-color;
	border-top: 0px;
}
.m-table-item{
	display: inline-block;
	line-height: 30px;
	padding:10px 6px;
	box-sizing: border-box;
	vertical-align: top;
}
</style>
