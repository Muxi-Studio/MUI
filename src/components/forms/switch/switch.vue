<template>
<span class="m-switch" @click="change">
    <span class="circle">{{value}}</span>
</span>
</template>
<script>
export default {
    name: "m-switch",
    props: {
        value:  [String, Number, Boolean],
        inactive: {
            type:[String, Number, Boolean],
            default:false
        },
        active: {
            type:[String, Number, Boolean],
            default:true
        }
    },
    data() {
        return {
            status: false,
        }
    },
    mounted(){
        if(this.value == this.active){
            this.status = true
        }else if(this.value == this.inactive){
            this.status = false
        }else{
            console.error("[m-switch]:default value doesn't match with the options")
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
        }
    },
    methods:{
        change(){
            this.status = !this.status
            if(!(this.active && this.inactive) && typeof this.model == Boolean){
                this.model = !this.model
            }else{
                if(this.status){
                    this.model = this.active
                }else{
                    this.model = this.inactive
                }
            }
        }
    }
}
</script>
<style lang="scss">

</style>
