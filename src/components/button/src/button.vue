<template>
    <button class="mui-button" v-on:click="handleClick">
    </button>
</template>
<script>
export default {
    name: "m-button",

    data() {
        return {
            button: 1,
        }
    },

    // props: {
    //   type: {
    //     type: String,
    //     default: 'default'
    //   }
    // },

    // methods: {
    //   handleClick(evt) {
    //     this.$emit('click', evt);
    //   }
    // }
}
</script>
