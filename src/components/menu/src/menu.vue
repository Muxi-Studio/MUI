<template>
  <ul class="m-menu">
    <slot></slot>
  </ul>
</template>
<script>
import { bus } from "../../../emitter/bus"

export default {
    name: "m-menu",
    created() {
        bus.$on("addTag", this.add)
    },
    data() {
        return {
            state: {},
        }
    },
    methods: {
        add(e) {
            this.state[e] = false
        },
        modify(label) {
            Object.keys(this.state).forEach((e) => this.state[e] = false)   
            this.state[label] = true
            bus.$emit("update", label)
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
.m-menu{
	padding: 0;
	background-color: $text-darker;
	display: inline-block;
    position: relative;
}
</style>
