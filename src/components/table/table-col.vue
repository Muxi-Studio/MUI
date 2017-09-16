<script>
import { bus } from "../../emitter/bus"
export default {
    name: "m-table-col",
    props: ["width", "prop", "label"],
    mounted() {
        var conf = {
            width: this.width,
            prop: this.prop,
            label: this.label,
            content: null
        }
        // console.log(this.$slots.default)
        if(this.$slots.default !== undefined){
            conf.content = this.$slots.default
        }
        bus.$emit("initCol", conf)
    },
    render() {
    //     try {
    //         return this.$slots.default[0];
    //     } catch (e) {
    //         throw new Error('IntersectionObserver.vue can only render one, and exactly one child component.');
    //     }

        return null;
    }
}
</script>
