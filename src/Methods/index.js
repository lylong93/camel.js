import color from '../components/color/color.vue'
import './index.scss'

function Plug() {
  Vue: null
  world: null
  options: null
  locked: false
}
Plug.prototype.install = function(Vue, options) {

  Vue.prototype.$myName = this.co.bind(plug);
  this.Vue = Vue

}
Plug.prototype.co = function(Vue, options) {

  var MyComponent1 = this.Vue.extend({
    template: '<div class="kk" :style="{height:`${h}px`,left:`${l}px`}" @mousedown="down" @mousemove="move($event)" @mouseup="up"></div>',
    data() {
      return {
        h: 50,
        l: 10,
        can: true
      }
    },
    methods: {
      down() {
        this.can = false
        console.log(plug)
      },
      move(e) {
        if (this.can) return
        this.l = e.clientX;
      },
      up() {
        this.can = true
      },
    },
  })
  const o = document.querySelector('.world')
  o.style.position = 'relative'
  var component1 = new MyComponent1().$mount()
  o.appendChild(component1.$el)
}
Plug.prototype.remove = function() {}
Plug.prototype.add = function() {
  const world = document.querySelector('.world')
}
Plug.prototype.open = function() {
  this.locked = fasle
}
Plug.prototype.lock = function() {
  this.locked = true
}
const plug = new Plug()

export default plug
