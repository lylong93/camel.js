function Plug() {
  Vue: 'null'
  options: null
}
Plug.prototype.install = function(Vue, options) {

  Vue.prototype.$myName = this.co.bind(plug);
  this.Vue = Vue
  this.options = options

}
Plug.prototype.co = function(Vue, options) {
  const a = this.Vue.component('anchored-heading', {
    template: '<div>A custom component!<pl></pl>{{k}}</div>',
    data() {
      return {
        k: 'o'
      }
    },
    components: {
      'pl': this.options
    }
  })

  var MyComponent1 = this.Vue.extend({
    template: '<div>Hello World</div>'
  })

  const o = document.querySelector('.world')

  var component1 = new a().$mount()
  // console.log(component1)
  o.appendChild(component1.$el)
  console.log(this.options)

  // console.log(this.options.render().bind(this))
  // console.log(res)
}
const plug = new Plug()

export default plug
