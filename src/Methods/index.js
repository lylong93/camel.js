function Plug() {
  Vue: 'null'
}
Plug.prototype.install = function(Vue, options) {

  Vue.prototype.$myName = this.co.bind(plug);
  this.Vue = Vue
  // this.a = Vue
}
Plug.prototype.co = function(Vue, options) {
  const o = document.querySelector('.world')
  const p = this.Vue.component('nt', {
    template: '<div>A custom component!</div>'
  })
  // o.appendChild('nt')
  new this.Vue({
    el: '.world'
  })
}
const plug = new Plug()
// const plug = {
//   ok: 'p',
//   install(Vue, options) {
//     Vue.prototype.$myName = this.co;
//     console.log(this)
//   },
//   co() {
//     console.log(ok)
//     // const o = document.querySelector('.world')
//     // this.vue.component('my-component', {
//     //   template: '<div>A custom component!</div>'
//     // })
//     // var messageNode = document.createTextNode('message');
//     // o.appendChild(messageNode)
//   }
// }

export default plug
