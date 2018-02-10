<template>
    <option :label="label">{{value}}</option>
</template>
<script>
export default {
    name: "m-option",
    props: {
        value: String,
        label:String,
    }
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';

</style>

