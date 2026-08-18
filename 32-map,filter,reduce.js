// Explain map(), filter(), and reduce().

let numbers = [50, 20, 12, 15, 80, 60, 50, 72, 14];

// MAP = Array ke har single element par operation perform karke ek naya array return karta hai. 
let doubleNumber2 = numbers.map((nums) => nums * 2);
console.log(doubleNumber2)

//FILTER = Array ke unhi elements ko select karta hai jo di gayi condition ko satisfies (true) karte hain.
let filterUser = numbers.filter((nums)=> nums < 30);
console.log(filterUser);

//REDUCE = Poore array ko combine/process karke ek single final value return karta hai (e.g., total sum, highest number, ya object).
let totalNumber = numbers.reduce((acc , curr)=> acc + curr ,0) 
console.log(totalNumber);
