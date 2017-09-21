<script>
export default {
    name: "m-row",
    functional: true,
    render(createElement, context) {
        console.log(context)
        return createElement(
            "div", {
                "class": {
                    "m-row": true,
                },
            },
            context.slots().default,
        )
    },
    props: {
        gutter: {
            type: Number,
            default: 0,
        },
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-row {
    width: 100%;
    display: flex;
}
</style>
