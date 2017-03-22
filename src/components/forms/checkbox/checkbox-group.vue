<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name: "m-checkbox-group",
    props: {
        value: {},
    },
    watch: {
        value(value) {
            this.$emit("change", value)
        },
    },
}
</script>
