<template>
  <div>
    <div class="world">here</div>
    <color ref='o' @input="ok"></color>
    <div>ok</div>
  </div>
</template>
<script>
import test from './test.vue'
import color from './color/color.vue'
import one from './one.vue'
export default {
  data() {
    return {
      dd: null
    }
  },
  created() {
    console.log('c')
  },
  mounted() {
    console.log('m')
  },
  components: {
    'test': test,
    'color': color,
    'one': one
  },
  methods: {
    ok(d) {
      this.$myName();
      this.dd = d;
    }
  },
}

</script>
<style lang="scss">
.test1 {
  height: 10px;
  width: 500px;
  background: yellow;
}

</style>
