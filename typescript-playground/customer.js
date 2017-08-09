"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.calculateNumber = function () {
        return this.id * 10;
    };
    Customer.prototype.fooBar = function () {
        var _this = this;
        console.log('This is customer with ID', this.id);
        console.log(this.calculateNumber());
        var self = this;
        function callback() {
            return self.calculateNumber() + 10;
        }
        var callback1 = function (param, param2) { return _this.calculateNumber() + param; };
        console.log("Number is\n        " + callback1(20, 2) + "\n        and is a great number!");
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map