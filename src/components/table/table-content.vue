<script>
// import deepClone from '../../util/deepClone.js'
import Button from '../button/index'
export default {
    name: "m-table-content",
    props: ['id', 'content'],
    data() {
        return {}
    },
    render(createElement) {
        // todo: prop is all the prop info a cell could assess, including data and row 
        const prop = {
            index: this.id
        }
        return createElement('div', [
            this.content.call(this, prop)
        ])
    }
}
</script>