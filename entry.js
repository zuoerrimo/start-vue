document.getElementById('app').innerHTML = 'first webpack code'
require('./first.js');
require("./style.css");
var Vue = require('vue/dist/vue.min.js');
new Vue({
  el: '#container',
  data: {
    message: 'hello'
  }
})
