<template>
    <transition name="fade">
        <div :class="'m-toast ' + 'm-toast--' + this.type" @click="close">
            {{content}}
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name: "m-toast",
    props: {
        type: {
            type: String,
            default: "primary",
        },
        content: {
            type: String,
            default: "",
        },
        onClose: {
            type: Function,
            default: () => {},
        },
    },
    methods: {
        close() {
            this.$emit("close")
        },
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-toast {
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    height: 50px;
    line-height: 50px;
    padding-left: 128px;
    padding-right: 128px;
    border-radius: 3px;
    z-index: 1;
    overflow: hidden;
    &:before {
        background-color: #fff;
        content: "";
        width: 100%;
        display: block;
        height: 50px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        transtion: all 1s;
        border-radius: 3px;
        transform: translateY(-3px);
    }
    &--primary {
        background-color: $primary-darker;
        border: 1px solid $primary-darker;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>
