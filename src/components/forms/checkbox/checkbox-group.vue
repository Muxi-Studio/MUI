<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name: "m-checkbox-group",
    props: ["value"],
    data() {
        return {
            checkarr: [],
            storeObj: {},
        }
    },
    created() {
        this.checkarr = this.value       
    },
    methods: {
        modify(val) {
            const valKey = Object.keys(val)[0]
            this.storeObj[valKey] = val[valKey]
            if (this.storeObj) {
                this.checkarr = Object.keys(this.storeObj).filter(
                    (e) => this.storeObj[e])
            }
            this.$emit("input", this.checkarr)
        },
    },
}
</script>
