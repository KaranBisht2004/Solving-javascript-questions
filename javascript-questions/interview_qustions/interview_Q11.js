// 1. CALLBACK FUNCTION
// Ek aisa function jise hum kisi DOOSRE function ke andar as a parameter
// pass karte hain, taaki kaam khatam hone par use baad me execute (call back) kiya ja sake.



// 2. HIGHER-ORDER FUNCTION (HOF)
// Aisa bada "Boss Function" jo:
// -> Kisi doosre function ko as a parameter ACCEPT karta hai, YA...
// -> Apne andar se ek naye function ko RETURN karta hai.


const add = ( a , b ,cb)=>{// add function is high order function becoz ye ek function ko as argument accrpt kar rha hai
    let result = a + b ;// cb perameter is callback function
    cb(result)
}
add(2 , 5 ,function valu (valu){
console.log(valu);
})

