"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var foo = 42;
var bar = 55;
function sumUp(input1, input2) {
    return input1 + input2 + 5;
}
console.log(sumUp(foo, bar));
var c = new customer_1.Customer(2);
c.fooBar();
//# sourceMappingURL=app.js.map