<template>
<div>
    <select v-model="model" class="m-select" @change="change">
        <slot></slot>
    </select>
</div>
</template>
<script>
export default {
    name: "m-select",
    props: {
        value: String,
    },
    data() {
        return {
            focus: false,
        }
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit("input", val)
            },
        },
    },
    methods:{
        change(){
            this.$emit("onchange",this.model)
        }
        
    }
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-select {
    border: 1px solid #ccc;
    width: 120px;
    border-radius: 3px;
    overflow: hidden;
    select {
        padding: 5px 8px;
        width: 130%;
        border: none;
        box-shadow: none;
        background: transparent;
        background-image: none;
        -webkit-appearance: none;
        &:focus{
            outline: none;
        }
    }
}
</style>
