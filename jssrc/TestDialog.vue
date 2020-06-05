<template lang='pug'>
.dlgMain
  p Hello world!
  button(@click='closeDialog') Close
</template>

<script>
export default {
  methods: {
    closeDialog () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.dlgMain {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  padding: 1em;
}
</style>
