<template>
  <ul class="m-menu">
    <slot></slot>
  </ul>
</template>
<script>
export default {
    name: "m-menu",
    mounted() {
        this.state = new Array(this.$children.length)
        this.state.fill(false)
        console.log(this.state)
    },
    data() {
        return {
            state: [],
        }
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
.m-menu{
	padding: 0;
	background-color: $text-darker;
	display: inline-block;
}
</style>
