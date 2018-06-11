<template>
<div class="m-select-wrap" v-bind:style="bgColor">
    <label v-bind:style="txtColor">{{text}}</label>
    <select v-model="model" class="m-select" :name="name" @change="change($event.target.options)" @focus="focus=true" @blur="focus=false">
        <slot></slot>
    </select>
</div>
</template>
<script>
export default {
    name: "m-select",
    props: {
        value: {
            type: [String, Number, Boolean]
        },
        name: String,
        defaultvalue:String
    },
    data() {
        return {
            focus: false,
            text:""
        }
    },
    mounted(){
        this.text = this.defaultvalue||"选择内容"
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
        bgColor(){           
            return{
                borderColor: this.focus?'#1bbc9b':'#c3dbd8' 
            }                    
        },
        txtColor(){
            return{
                color: this.text=='选择内容'?'#354949':'#0c1f1f'
            }
        }
    },
    methods:{
        change(opts){
            this.$emit("onchange",this.model)
            this.text = opts[opts.selectedIndex].label
        }
    }
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-select-wrap {
    height: 40px;
    width:200px;
    background: #fff no-repeat right -24px;
    font-size: 16px;
    border: 1px solid $secondary-color;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    _filter: alpha(opacity=0);
    label {
        padding-left: 10px;
        font-size: 16px;
        z-index: 2;
        color: #a1a1a1;
        line-height: 40px;
        display: block;
    }
    .m-select {
        width: 100%;
        height: 100%;
        z-index: 4;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        opacity: 0;
        *margin-top: 12px;
        filter: alpha(opacity=0);
        cursor: pointer;
        font-size: 16px;
    }
}


</style>
