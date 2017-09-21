<script>
export default {
    name: "m-col",
    functional: true,
    render(createElement, context) {
        return createElement(
            "div", {
                "class": {
                    "m-col": true,
                },
                style: {
                    "flex-grow": context.props.span,
                },
            },
            context.slots().default,
        )
    },
    props: {
        span: {
            type: Number,
            required: true,
        },
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-col {
    
}
</style>
