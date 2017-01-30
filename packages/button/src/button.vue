<template>
  <button class="mui-button"
    @click="handleClick"
    :class="[
      type ? 'mui-button--' + type : '',
      size ? 'mui-button--' + size : ''
    ]"
  >
  </button>
</template>
<script>
  export default {
    name: 'MButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>