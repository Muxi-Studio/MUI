<template>
<thead>
    <th v-for="col in columns" v-bind:width=col.width>{{col.label}}</th>
</thead>
</template>
<script>
import { bus } from "../../emitter/bus"

export default {
    name: "m-table-head",
    props: ["columns"],
    data() {
        return {
        }
    },
}
</script>

<style lang='scss'>
@import '../../scss/common/color.scss';
th{
    box-sizing: border-box;
    border-bottom: 1px solid $secondary-color;
    padding: 10px;
    background-color: $secondary-color;
}

</style>

