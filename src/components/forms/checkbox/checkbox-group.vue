<template>
  <div class="m-checkbox-group">
    <slot @input="test" :checkarr ="checkArr"></slot>
  </div>
</template>
<script>
export default {
    name: "m-checkbox-group",
    props: {
        value: {},
    },
    data() {
        return {
            checkarr: [],
        }
    },
    created() {
        console.log(this.value)
        this.checkarr = this.value
        this.$on("input", this.test)
    },
    watch: {
        value(value) {
            this.$emit("change", value)
        },
    },
    methods: {
        test(val) {
            alert(val)
        },
    },
}
</script>
