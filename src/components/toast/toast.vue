<template>
    <transition name="fade">
        <div :class="'m-toast ' + 'm-toast--' + this.type">
            {{ content }}
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
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-toast {
    position:fixed;
    left: 50%;
    top:20px;
    transform:translateX(-50%);
    height:52px;
    padding-left:128px;
    padding-right:128px;
    &:before{

    }
    &--primary{
        border:1px solid $primary-darker;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
</style>