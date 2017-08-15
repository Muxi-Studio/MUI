<template>
    <div class="m-table">
    	<div class="m-table-head">
        	<slot></slot>
        </div>
        <div v-for="item in data" class="m-table-row">
        	<div v-for="info in tableinfo" class="m-table-item" v-bind:style="{ width: info.width + 'px'}">{{item[info.order]}}</div>
        </div>
    </div>
</template>
<script>
import { bus } from "../../emitter/bus"

export default {
    name: "m-table",
    props: ["data"],
    data() {
        return {
    	    tableinfo: [],
        }
    },
    created() {
        bus.$on("sloton", this.Addlist)
    },
    mounted() {
        this.$children.forEach((e) => {
            this.tableinfo.push({ width: e.width, order: e.prop })
        })
    },
    methods: {
        Addlist(e) {
            console.log(e)
        },
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
