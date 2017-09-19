<template>
<div>
    <slot></slot>
</div>
</template>
<script>
import deepClone from '../../util/deepClone.js'
import Button from '../button/index'
export default {
    name: "m-table-content",
    props: ['content'],
    data() {
        return {}
    },
    mounted() {
        console.log(this.content)
    },
    // render(createElement) {
    //     return createElement('div', [
    //         ...deepClone(this.content, createElement)
    //     ])
    // }
}
</script>