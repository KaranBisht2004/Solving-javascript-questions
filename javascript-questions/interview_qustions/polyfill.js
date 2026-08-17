// Map

// Array.map((num,i,arr)=> {})
Array.prototype.mymap = function(cd){
    let temp = [];
    for(let i = 0; i<this.length; i++){
        temp.push(cd(this[i],i,this))
    }
    return temp
} 

const nums = [1, 2, 3, 4, 5, 6, 7];

const multiplyTWO = nums.mymap((num , i , arr)=> {
return num*2
})
console.log(multiplyTWO);
