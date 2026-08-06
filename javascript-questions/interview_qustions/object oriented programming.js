//OOPS

// this Constructor Function
function Shop(name, brand, price, qty ) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.qty = qty;
}

Shop.prototype.category = 'Laptop';

const shop1 = new Shop('Mac Pro-4', 'Apple', 500000, 2);
const shop2 = new Shop('HP Victus', 'HP', 50000, 6);

console.log(shop1);
console.log(shop2);




//ES6 OOPS
class Shop {    
    constructor(name, brand, price, qty) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.qty = qty;
    }

    get category() {
        return 'Laptop';
    }
}

const shop1 = new Shop('Mac Pro-4', 'Apple', 500000, 2);
console.log(shop1); 