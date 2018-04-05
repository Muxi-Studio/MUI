<template>
  <col :width="width">
</template>

<script>
export default {
    name: "m-table-col",
    props: ["width", "prop", "label"],
    mounted() {
        var conf = {
            width: this.width,
            prop: this.prop,
            label: this.label,
            content: null
        }
        
        if(this.$scopedSlots.default !== undefined){
            conf.content = this.$scopedSlots.default
            console.log(conf.content)
        }
        this.$parent.$emit("initCol", conf)
    }
}
</script>
