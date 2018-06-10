<template>
    <option :label="label" class="m-option">{{value}}</option>
</template>
<script>
export default {
    name: "m-option",
    props: {
        value: [String,Number],
        label:String,
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-option{
    display: block;
    color:red;
}
</style>

