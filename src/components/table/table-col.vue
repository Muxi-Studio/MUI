<script>
import { bus } from "../../emitter/bus"

export default {
    name: "m-table-col",
    props: ["width", "prop", "label"],
    mounted() {
        console.log(this.$parent.data[0])
    },
    render(createElement){
        return createElement('td', this.prop)
    }
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-table-head-item{
	display: inline-block;
	font-size: 16px;
	text-align: left;
	text-indent: 8px;
}
</style>
