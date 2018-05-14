<template>
    <button :class="'m-button ' + 'm-button--' + this.type" @click="this.onClick">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "m-button",
    props: {
        type: {
            type: String,
            default: "primary",
        },
        onClick: {
            type: Function,
            default: function() {},
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-button {
    display: inline-block;
    line-height: 40px;
    border-radius: 3px;
    color: #fff;
    padding-left: 26px;
    padding-right: 26px;
    font-size: $fontsize-button;
    position: relative;
    z-index: 1;
    overflow: hidden;
    &::before {
        content: "";
        width: 100%;
        display: block;
        height: 38px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        transtion: all 1s;
        border-radius: 3px;
        transform: translateY(-2px);
    }
    &--primary {
        background-color: mix(rgba(0, 0, 0, 0.8), $primary-darker);
    }
    &--primary::before {
        background-color: $primary-darker;
    }
    &--warning {
        background-color: mix(rgba(0, 0, 0, 0.8), $warning-color);
    }
    &--warning::before {
        background-color: $warning-color;
    }
    &--error {
        background-color: mix(rgba(0, 0, 0, 0.8), $error-color);
    }
    &--error::before {
        background-color: $error-color;
    }
    &--ghost {
        color: $secondary-color;
        background-color: $secondary-color;
        border:1px solid $secondary-color;
    }
    &--ghost:hover{
        color: $primary-middium;
        border:1px solid $primary-middium;
        background-color: $primary-middium;
    }
    &--ghost::before {
        background-color: #fff
    }
    &--primary:hover::before,
    &--error:hover::before,
    &--warning:hover::before,
    &--ghost:hover::before{
        transform: translateY(0px);
    }
}
</style>
