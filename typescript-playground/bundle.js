!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);console.log(function(e,t){return e+t+5}(42,55)),new n.Customer(2).fooBar()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.id=e}return e.prototype.calculateNumber=function(){return 10*this.id},e.prototype.fooBar=function(){var e=this;console.log("This is customer with ID",this.id),console.log(this.calculateNumber());console.log("Number is\n        "+function(t,r){return e.calculateNumber()+t}(20)+"\n        and is a great number!")},e}();t.Customer=n}]);