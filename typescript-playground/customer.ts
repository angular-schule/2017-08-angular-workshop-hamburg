export class Customer {
    id: number;
    
    constructor(id: number) {
        this.id = id;
    }


    private calculateNumber() {
        return this.id * 10;
    }


    fooBar() {
        console.log('This is customer with ID', this.id);
        console.log(this.calculateNumber());

        var self = this;
        function callback() {
            return self.calculateNumber() + 10;
        }

        let callback1 = (param: number, param2: number) => this.calculateNumber() + param;

        console.log(`Number is
        ${callback1(20, 2)}
        and is a great number!`);
    }
}