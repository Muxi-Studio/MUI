<template>
<div :class="'m-input'">
        <label v-if="label!==null " for="text" :class="'m-label'">{{ label }}</label>
        <input id="text" type="text" :class="'m-text'" :placeholder="placeholder" v-bind:value="value" v-on:input="updateValue($event.target.value)" @blur="onBlur" @focus="onFocus">
        <p v-if="message!==null " :class="'m-message'">{{ message }}</p>
</div>
</template>
<script>
export default {
    name: "m-input",
    props: {
        value: String,
        message: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: "请输入",
        },
        label: {
            type: String,
            default: null,
        },
    },
    methods: {
        onBlur() {
            this.$emit("onBlur")
        },
        onFocus() {
            this.$emit("onfocus")
        },
        updateValue(value) {
            this.$emit("input", value)
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-input{
    width: 230px;
}
.m-text{
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    border-radius: 4px;
    font-size: 16px;
    box-sizing:border-box;
    border: 1px solid $secondary-color;
    color:$text-darker;
    outline: none;
    &:focus{
        color:$text;
        border-color: $primary-darker;
        & + .m-message{
            color:$primary-darker;
        }
    }
}
.m-label{
    display: block;
    font-weight: bold;
    width: 100%;
    height: 30px;
    text-indent: 2px;
}
.m-message{
    margin:2px 0px 0px 0px;
    text-indent: 2px;
    color:$secondary-color;
}
</style>