// How to merge two arrays?

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


// 1
console.log(arr1.concat(arr2));


// 2
function mergeArr(arr1, arr2) {
    let mergeArr = [];
    for (const num1 of arr1) {
        mergeArr.push(num1)
    }
    for (const num2 of arr2) {
        mergeArr.push(num2)
    }
return mergeArr
}
console.log(mergeArr(arr1,arr2))


// 3
console.log([...arr1, ...arr2]);


// 4
arr1.push(...arr2)
console.log(arr1);


// 5
function mergeArr(arr1, arr2) {
    let merged = [];
    for (const item of [...arr1, ...arr2]) {
        merged.push(item);
    }
    return merged;
}

console.log(mergeArr(arr1, arr2));