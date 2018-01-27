import color from '../components/color/color.vue'
import pallet from './pallet.vue'
import './index.scss'

function Plug() {
  this.Vue = null
  this.world = null
}
Plug.prototype.install = function(Vue, options) {

  Vue.prototype.$myName = this.co.bind(plug);
  this.Vue = Vue
  this.save = 1

}
Plug.prototype.co = function(Vue, options) {
  var MyComponent1 = this.Vue.extend({
    template: '<div class="kk" ><div @click="k">添加</div><div @click="d">加</div><div v-for="item in go"><pallet :name="name"/></div></div>',
    data() {
      return {
        go: [],
        name: 2
      }
    },
    methods: {
      k() {
        this.go.push('4')
        plug.add()
      },
      d() {
        this.name = 3;
        console.log(document)
      }
    },
    components: {
      'pallet': pallet
    }

  })

  const o = document.querySelector('.world')
  o.style.position = 'relative'
  var component1 = new MyComponent1().$mount()

  o.appendChild(component1.$el)


}
Plug.prototype.remove = function() {}
Plug.prototype.add = function() {
  // var MyComponent1 = this.Vue.component('d', pallet)
  var MyComponent2 = this.Vue.extend({
    template: '<div class="test" :style="{background: `hsla(${h}, ${s}%, ${l}%,${a/10})`}"></div>',
    data() {}

  })

  const o = document.querySelector('.world')
  o.style.position = 'relative'
  // var component1 = new MyComponent1().$mount()
  var component2 = new MyComponent2().$mount()
  // o.appendChild(component1.$el)
  o.appendChild(component2.$el)

}
Plug.prototype.open = function() {
  this.locked = fasle
}
Plug.prototype.lock = function() {
  this.locked = true
}
const plug = new Plug()

export default plug
