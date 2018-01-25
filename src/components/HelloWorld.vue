<template>
  <div>
    <div class="world">
    </div>
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
  created() {},
  mounted() {
    // this.$myName();
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
    }
  },
}

</script>
<style lang="scss">
.world {
  height: 30px;
  width: 500px;
  background: yellow;
}

.te {
  height: 100%;
  width: 100%;
}

</style>
