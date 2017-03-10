document.getElementById('app').innerHTML = 'first webpack code'
require('./first.js');
require("./style.css");
var Vue = require('vue/dist/vue.min.js');
new Vue({
  el: '#container',
  data: {
    message: 'hello' + new Date(),
    seen: false,
    items:[
      {text: 'one'},
      {text: 'two'},
      {text: 'three'},
      {text: 'four'},
      {text: 'five'},
    ],
    content: '12345',
  },
  methods: {
    reverseContent: function(){
      this.content = this.content.split('').reverse().join('');
    }
  },
})
