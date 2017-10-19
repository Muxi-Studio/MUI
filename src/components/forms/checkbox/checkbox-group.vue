<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
var index = -1;
export default {
    name: "m-checkbox-group",
    props: ["value"],
    data() {
        return {
            checkarr: [],
        }
    },
    created() {
        this.checkarr = this.value       
    },
    methods: {
        modify(val) {
            index = this.checkarr.indexOf(val)
            if(index == -1){
                this.checkarr.push(val)
            }else{
                this.checkarr.splice(index,1)
            }
            this.$emit("input", this.checkarr)
        },
    },
}
</script>
