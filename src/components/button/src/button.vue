<template>
    <button :class="'m-button ' + 'm-button--' + this.type">
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
    z-index:1;
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
        transtion:all 1s;
        border-radius:3px;
        transform:translateY(-2px);
    }
    &--primary {
        background-color: $primary-darkest;
    }
    &--primary::before {
        background-color: $primary-darker;
    }
    &--primary:hover::before {
      transform:translateY(0px);
    }
    &--warning {
        background-color: $warning-color;
    }
    &--error {
        background-color: $error-color;
    }
    &--ghost {
        background-color: $error-color;
    }
}
</style>
