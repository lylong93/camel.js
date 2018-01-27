 template: '
<div class="kk" :style="{height:`${h}px`,left:`${l}px`}" @mousedown="down" @mousemove="move($event)" @mouseup="up"></div>' template data() { return { h: 50, l: 10, can: true, save: plug } }, methods: { down() { this.can = false // console.log(plug) }, move(e) { if (this.can) return this.l = e.clientX; console.log(this.save) }, up() { this.can = true }, },
