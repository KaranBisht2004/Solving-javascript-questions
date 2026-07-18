const arr = [10, 20, 30, "C", 80, "karan", 7, "bisht", "j", "L"];

// 1
const separate = () => {

    let num = [];
    let char = [];
    let word = [];

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "number") {
            num.push(arr[i])
        }
        else if (typeof arr[i] === "string" && arr[i].length <= 1) {
            char.push(arr[i])
        }
        else {
            word.push(arr[i])
        }
    }
    console.log(num);
    console.log(char);
    console.log(word);
}

separate(arr)

// 2
const separateData = (list) => {
    let num = [];
    let char = [];
    let word = [];

    if (!Array.isArray(list) || list.length === 0) {
        return { num, char, word }
    }

    for (const data of list) {
        if (typeof data === "number") {
            num.push(data)
        }
        else if (typeof data === "string" && data.length <= 1) {
            char.push(data)
        }
        else {
            word.push(data)
        }
    }
    return { num, char, word }
}
console.log(separateData(arr));



//3
const threeseparateData = (data) =>{
   
    let num = [];
    let char = [];
    let word = [];


if(!Array.isArray(data) || data.length === 0){
    return { num , char ,word}
}

data.forEach(item =>{
    if(typeof item === "number"){
        num.push(item);
    }
    else if( typeof item === "string" && item.length <= 1){
        char.push(item)
    }
    else{
        word.push(item)
    }
})
return {num , char ,word}
}

console.log(threeseparateData(arr));
