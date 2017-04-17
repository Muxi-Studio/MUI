<template>
  <label class="m-checkbox">
    <span class="m-checkbox-input"
      :class="{
        'is-focus': focus
      }"
    >
      <span class="m-checkbox-inner"></span>
      <input
        class="m-checkbox-original"
        type="checkbox"
        v-model="model">
    </span>
    <span class="m-checkbox-label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
    name: "m-checkbox",
    props: {
        value: {},
        label: {},
        checkarr: {},
    },
    data() {
        return {
            focus: false,
        }
    },
    mounted() {
        console.log(this.checkarr)
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$parent.$emit("input", val)
            },
        },
    },
    // methods: {
    //     changeState() {
    //         this.model = !this.model
    //         console.log("ha")
    //     },
    // },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-checkbox{
  width:100px;
  height:100px;
}
</style>
