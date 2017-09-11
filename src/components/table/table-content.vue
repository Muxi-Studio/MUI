<template>
<div>
    {{content.tag}}
</div>
</template>
<script>
export default {
    name: "m-table-content",
    props: ['content'],
    data() {
        return {}
    },
    mounted() {
        console.log(this.content)

    },
    methods: {

    },
    components: {
    },
    computed:{

    }
}
</script>