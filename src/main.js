
var _ = require('lodash');
var marked = require('marked');
import Vue from "vue";
// import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

var c = Vue.component('mdinput',{
    template: '#md',
    data: function(){
      return {
        source: ''
      }
    },
    methods: {
      translate: function(){
        console.log(this.source);
      }
    },
    computed: {
      output: function(){
        return marked(this.source);
      }
    }

})

new Vue({
  el: '#app'

})