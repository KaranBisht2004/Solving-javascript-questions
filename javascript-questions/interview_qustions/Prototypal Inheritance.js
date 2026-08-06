let coffee = {
    color: "dark",
    drink: function(){
        console.log("gut gut gut");
    }
}
let cappuccino = Object.create(coffee);
cappuccino.taste = 'bitter'


