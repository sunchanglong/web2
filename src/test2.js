import * as test1 from './test1.js';
const _ = require('underscore');
console.log('test2');
function a(){
  console.log('test2.js a');
}

function b(){

}
export {a};
export {b};
export default a;