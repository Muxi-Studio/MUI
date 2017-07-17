<template>
  <ul class="m-menu">
    <slot></slot>
  </ul>
</template>
<script>
import { bus } from "../../../emitter/bus"

var num = ''
var store = []

export default {
    name: "m-menu",
    props: ["trigger"],
    created() {
        // bus.$on("addTag", this.add)
    },
    mounted() {
        this.initOpen("1-2-2")
    },
    data() {
        return {
            // state: {},
        }
    },
    methods: {
        add(e) {
            this.state[e] = false
        },
        modify(index) {
            if (index.length > 1) {
                this.subOpen(index)
            } else {
                bus.$emit("update", index)
            }
        },
        initOpen(index) {
            if (index.length > 1) {
                this.subOpen(index)
            } else {
                bus.$emit("update", index)
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
            // Object.keys(this.state).forEach(this.checkIndexArray)
            bus.$emit("updateArray", store)
            store = []
        },
        // checkIndexArray(e) {
        //     if (store.indexOf(e) !== -1) {
        //         this.state[e] = true
        //     } else {
        //         this.state[e] = false
        //     }
        // },
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
