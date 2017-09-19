<template>
<tbody>
    <tr v-for = "item in data">
        <td v-for="col in columns">
            <template v-if="item[col.prop]">{{item[col.prop]}}</template>
            <m-table-content v-else :id="item.id" :content="col.content"></m-table-content>       
        </td>
    </tr>
</tbody>
</template>
<script>
import TableContent from './table-content.vue'
import { bus } from "../../emitter/bus"

export default {
    name: "m-table-body",
    props: ['data', "columns"],
    data() {
        return {
        }
    },
    components: {
        'm-table-content':TableContent
    }
}
</script>
