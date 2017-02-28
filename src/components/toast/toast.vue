<template>
    <div :class="m-toast">
        {{ content }}
    </div>
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
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-toast {
    
}
</style>