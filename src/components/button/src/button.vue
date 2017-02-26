<template>
<div>
  <button class="mui-button"
    v-on:click="handleClick">
  </button>
</div>
</template>
<script>
  export default {
    name: 'MButton',

    data(){
      return{
        button:1
      }
    }

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
  };
</script>