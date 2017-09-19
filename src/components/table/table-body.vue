<template>
<tbody>
    <tr v-for = "item in data">
        <td v-for="col in columns">
            <template v-if="item[col.prop]">{{item[col.prop]}}</template>
            <m-table-content v-else>{{col.content}}</m-table-content>       
        </td>
    </tr>
</tbody>
</template>
<script>
import TableContent from './table-content.vue'
export default {
    name: "m-table-body",
    props: ['columns','data'],
    data() {
        return {}
    },
    mounted() {

    },
    methods: {

    },
    components: {
        'm-table-content':TableContent
    },
    computed:{

    }
}
</script>
