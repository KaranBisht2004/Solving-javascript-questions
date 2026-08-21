//make custom map 

let arr = [1, 2, 3, 4, 5, 6];

function mymap(arr, callback) {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    newarr.push(callback(arr[i]))
  }
  return newarr;
}

let result = mymap(arr, (value) => {
  return value * 5;
})
console.log(result);


//filter
const filter = [50, 40, 10, 80, 12, 8, 70];

function myfilter(arr, callback) {
  let newfilter = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newfilter.push(arr[i]);
    }
  }
  return newfilter;
}

let filterResult = myfilter(filter, (age) => {
  return age > 18;
})
console.log(filterResult);

//reduce
