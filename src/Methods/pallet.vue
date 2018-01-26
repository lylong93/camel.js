<template>
  <div class="color-wrapper">
    <div class="test" :style="{background: `hsla(${h}, ${s}%, ${l}%,${a/10})`}"></div>
    <div class="color1">
      <div class="color">
        <input type="range" value="0" min="1" max="360" v-model="h" class="ii">
      </div>
    </div>
    <div class="color1">
      <div class="color" :style="{background:`linear-gradient(to right,hsl(${h}, ${1}%, ${l}%),hsl(${h}, ${100}%, ${l}%))`}">
        <input type="range" value="0" min="1" max="100" v-model="s" class="ii">
      </div>
    </div>
    <div class="color1">
      <div class="color" :style="{background:`linear-gradient(to right,hsl(${h}, ${s}%, ${1}%),hsl(${h}, ${s}%, ${100}%))`}">
        <input type="range" value="0" min="1" max="100" v-model="l" class="ii">
      </div>
    </div>
    <div class="color1">
      <div class="color" :style="{background:`linear-gradient(to right,hsla(${h}, ${s}%, ${l}%,0),hsla(${h}, ${s}%, ${l}%,1)`}">
        <input type="range" value="0" min="1" max="10" v-model="a" class="ii">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      h: 180,
      s: 100,
      l: 50,
      a: 10
    }
  },
}

</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.test {
  height: 200px;
  width: 200px;
}

.color-wrapper {
  .color1 {
    height: 15px;
    .color {
      position: relative;
      width: 360px;
      height: 10px;
      background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%));
      .ii {
        width: 360px;
        position: absolute;
        top: 0;
        left: 0;
        opacity: .5;
      }
    }
  }
}

</style>
