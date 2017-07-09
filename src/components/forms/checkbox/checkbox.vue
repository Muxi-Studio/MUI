<template>
  <label class="m-checkbox">
<!--     <span class="m-checkbox-input"
      :class="{
        'is-focus': focus
      }"
    > -->
      <span class="m-checkbox-inner"></span>
      <input
        class="m-checkbox-original"
        type="checkbox"
        :id="label"
        :value="label"
        v-model="focus">
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
    props: ["label"],
    data() {
        return {
            focus: false,
            state: {},
            checkarr: [],
        }
    },
    mounted() {
        this.checkarr = this.$parent.checkarr
        var flabel = this.checkarr.find((e) => {
            return e == this.label
        })
        if (flabel) {
            this.focus = true
            console.log(this.focus)
        }
    },
    computed: {
        focus: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit("input", val)
                this.state[this.label] = val
                this.$parent.modify(this.state)
                return !this.focus
            },
        },
    },

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
