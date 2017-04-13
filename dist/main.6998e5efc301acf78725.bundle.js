webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = __webpack_require__(1);
var marked = __webpack_require__(2);

// import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

var c = _vue2.default.component('mdinput', {
  template: '#md',
  data: function data() {
    return {
      source: ''
    };
  },
  methods: {
    translate: function translate() {
      console.log(this.source);
    }
  },
  computed: {
    output: function output() {
      return marked(this.source);
    }
  }

});

new _vue2.default({
  el: '#app'

});

/***/ })

},[4]);
//# sourceMappingURL=main.6998e5efc301acf78725.bundle.js.map