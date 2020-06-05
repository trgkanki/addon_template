<template lang='pug'>
.modal-background
  component(v-if='dlgClass', :is='dlgClass', v-bind='$props', @close='$emit("close")')
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  props: {
    dlgClass: {
      type: Object,
      default: null
    }
  }
})

</script>

<style lang='scss' scoped>
.modal-background {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 50vh;
  background: #ecececc0;
}

.nightMode .modal-background {
  background: #2f2f31c0;
}

.modal-background > * {
  margin: auto;
  transform: translateY(-50%);
  background: white;
}

.nightMode .modal-background > * {
  background: #222;
}
</style>
