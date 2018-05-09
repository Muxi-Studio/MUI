<script>
export default {
    name: "m-row",
    render(createElement){
        return createElement(
            "div", {
                "class": {
                    "m-row": true,
                },
                style:{
                    marginLeft:`-${this.gutter / 2}px`,
                    marginRight:`-${this.gutter / 2}px`,
                    justifyContent:this.justify,
                }
            },
            this.$slots.default,
        )
    },
    props: {
        gutter: {
            type: Number,
            default: 0,
        },
        justify: {
            type: String,
            default:"flex-start"
        }
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-row {
    display: flex;
    box-sizing: border-box;
}
</style>
