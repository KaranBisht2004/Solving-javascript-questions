let factorNum = 100;

const facotoriaclFUCtion = (num) =>{

    let factors = [];

for(let i = 1; i <= Math.floor(num/2); i++){
    if(num % i === 0){
        factors.push(i)
    }
}
return factors
}
console.log(facotoriaclFUCtion(factorNum));



