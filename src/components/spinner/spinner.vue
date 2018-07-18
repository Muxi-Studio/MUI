<template functional>
  <div :class="m-spinner">
      <img src="http://static.muxixyz.com/spinner.gif" alt="spinner">
  </div>
</template>
<script>
export default {
  name: "m-spinner",
  functional: true
}
</script>
<style lang="scss">
.m-spinner {
  width: 100px;
  height: 100px;
}
</style>
