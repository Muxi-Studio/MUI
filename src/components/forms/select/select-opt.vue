<template>
    <option :label="label" class="m-option">{{value}}</option>
</template>
<script>
export default {
  name: "m-option",
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  mounted() {
    this.$parent.$emit("initOption", {
      label: this.label,
      value: this.value
    })
  }
}
</script>
<style lang="scss">
@import "../../../scss/common/color.scss";
@import "../../../scss/common/font.scss";
.m-option {
  display: block;
  color: red;
}
</style>
