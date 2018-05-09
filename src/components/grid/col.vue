<script>
export default {
    name: "m-col",
    // functional: true,
    computed:{
        gutter(){
            let parent = this.$parent
            return parent.gutter?parent.gutter:0
        }
    },
    render(h) {
        let style = {}
        console.log("from this component" + this.gutter)
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
        style.width = `${this.span/24*100}%`
        style.flexGrow = `${this.flexGrow}` 
        return h(
            "div", {
                "class": {
                    "m-col": true,
                },
                style
            },
            this.$slots.default,
        )
    },
    props: {
        span: {
            type: Number,
            required: true,
        },
        flexGrow:{
            type: Number,
            default:0
        }
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-col {
    box-sizing: border-box;
}
</style>
