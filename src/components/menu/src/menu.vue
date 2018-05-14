<template>
  <ul class="m-menu">
    <slot></slot>
  </ul>
</template>
<script>
var num = ''
var store = []

export default {
    name: "m-menu",
    props: {
        trigger: {
            type: String,
            default: "hover",
        },
    },
    data(){
        return{
            current:""
        }
    },
    mounted() {
        this.initOpen("1-2-2"),
        this.$on("select",this.change)
    }, 
    methods: {
        add(e) {
            this.state[e] = false
        },
        modify(index) {
            this.current = index
            if (index.length > 1) {
                this.subOpen(index)
            } else {
                this.$emit("update", index)
            }
        },
        initOpen(index) {
            this.current = index
            if (index.length > 1) {
                this.subOpen(index)
            } else {                
                this.$emit("update", index)
            }
        },
        subOpen(index) {
            let temp = index
            while (temp.length > 0) {
                store.push(temp)
                temp = temp.slice(0, -2)               
            }
            this.handleArray()
        },
        handleArray() {
            this.$emit("updateArray", store)
            store = []
        },
        change(index){
            console.log(index)
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
    position: relative;
}
</style>
