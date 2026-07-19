const arr = [100, -200, 300, -400, -800];

const negtiveNUM = (num) =>{
    if(!Array.isArray(num) || num.length === 0){
        return 'Error'
    }
    let onlyNegtive = [];

    for(const i of num){
        if(i < 0){
            onlyNegtive.push(i)
        }
    }
    return onlyNegtive;
}
console.log(negtiveNUM(arr));
