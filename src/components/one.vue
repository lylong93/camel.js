<template>
  <div v-on:click="one($event)" class="one">
    hao
  </div>
</template>
<script>
export default {
  methods: {
    one(e) {
      e.preventDefault()
      e.stopPropagation()
      console.log('one')
    },
  }
}

</script>
<style lang="scss">
.one {
  background: blue;
}

</style>
