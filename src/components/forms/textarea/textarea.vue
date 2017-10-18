<template>
<div>
    <textarea :class="'m-textarea'" :placeholder="placeholder" v-bind:value="value" v-on:input="updateValue($event.target.value)">     
    </textarea>
    <p v-if="message!==null " :class="'m-message'">{{ message }}</p> 
</div>
</template>
<script>
export default {
    name: "m-textarea",
    props: {
        value: String,
        message: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: "请输入文本",
        },
    },
    methods: {
        updateValue(value) {
            this.$emit("input", value)
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-textarea{
    width: 430px;
    height: 80px;
    font-size: 16px;
    border: 1px solid $secondary-color;
    outline: none;
    padding:10px;
    border-radius: 4px;
    color:$text-darker;
    &:focus{
        color:$text;
        border-color: $primary-darker;
        & + .m-message{
            color:$primary-darker;
        }
    }
    &::placeholder{
        color:$secondary-color;
    }
}
.m-message{
    margin:2px 0px 0px 0px;
    text-indent: 2px;
    color:$secondary-color;
}
</style>