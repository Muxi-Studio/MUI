<template>
<div class="m-table-wrapper">
    <table class="m-table">
        <thead>
        <tr>
            <m-table-col></m-table-col>
        </tr>
        </thead>
        <tbody>
<!--         <table-row
                v-for="row in displayedRows"
                :key="row.vueTableComponentInternalRowId"
                :row="row"
                :columns="columns"
        ></table-row> -->
        </tbody>
    </table>
</div>
</template>
<script>
// import { bus } from "../../emitter/bus"
import TableHeader from "./table-header.vue"
import TableCol from "./table-col.vue"

export default {
    name: "m-table",
    props: ["data"],
    data() {
        return {
    	    columns: [],
            rows: [],
        }
    },
    created() {
    },
    mounted() {
    },
    components: {
        TableHeader,
        "m-table-col":TableCol
    },
    methods: {

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
