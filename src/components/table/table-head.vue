<template>
<thead>
    <th v-for="col in columns" :key="col.id">{{col.label}}</th>
</thead>
</template>
<script>

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
@import '../../scss/common/font.scss';
th{
    box-sizing: border-box;
    border-bottom: 1px solid $secondary-color;
    padding: 10px;
    background-color: $secondary-color;
    font-size: $fontsize-header-small;
}

</style>

