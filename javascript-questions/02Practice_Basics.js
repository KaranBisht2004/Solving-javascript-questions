// Q1
const checkVotingEligibility = (age) => {

    if (typeof age !== 'number' || isNaN(age) || age <= 0 || age > 120) {
        return 'Error: Invalid age input';
    }

    if (age >= 18) {
        return 'Success: You are eligible to vote.';
    }

    return 'Status: You are not eligible to vote yet.';
};

console.log(checkVotingEligibility(15));
console.log(checkVotingEligibility(21));



// Q2
const discountSystem = (amount) => {

    if (typeof amount !== 'number' || amount <= 0) {
        console.error('Error: Invalid amount entered.');
        return;
    }

    let discountPercentage = 0;

    if (amount <= 5000) {
        discountPercentage = 0;
    } else if (amount <= 7000) {
        discountPercentage = 5;
    } else if (amount <= 9000) {
        discountPercentage = 10;
    } else {
        discountPercentage = 20;
    }

    const discountAmount = Math.floor((discountPercentage * amount) / 100);
    const finalAmount = amount - discountAmount;

    if (discountPercentage > 0) {
        console.log(`Your Total Amount with ${discountPercentage}% Discount = ${finalAmount}`);
    } else {
        console.log(`Your final Amount is ${finalAmount} (NO Discount)`);
    }
};

discountSystem(10000);



// Q3
const calculateElectricityBill = (unit) => {

    if (typeof unit !== "number" || unit < 0 || isNaN(unit)) {
        return "Error: Invalid unit input";
    }

    let amount = 0;
    let remainingUnits = unit;


    if (remainingUnits > 400) {
        amount += (remainingUnits - 400) * 10;
        remainingUnits = 400;
    }

    if (remainingUnits > 200) {
        amount += (remainingUnits - 200) * 8;
        remainingUnits = 200;
    }

    if (remainingUnits > 100) {
        amount += (remainingUnits - 100) * 6;
        remainingUnits = 100;
    }

    amount += remainingUnits * 4;

    return amount;
};
console.log(`Total Bill: ₹${calculateElectricityBill(700)}`);



// Q4
const inrDenominator = (amount) => {

    if (typeof amount !== "number" || amount < 0 || isNaN(amount)) {
        return "Error: Invalid amount input";
    }

    const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];

    const result = {};
    let remainingAmount = amount;

    for (const note of denominations) {
        if (remainingAmount >= note) {
            const count = Math.floor(remainingAmount / note);
            result[`₹${note}`] = count;
            remainingAmount = remainingAmount % note;
        }
    }

    if (remainingAmount > 0) {
        result["Change Left"] = remainingAmount;
    }

    return result;
};

console.log(inrDenominator(8780));




// Q5
const calculateCabFare = (distance, isNightShift = false) => {

    if (typeof distance !== "number" || distance <= 0 || isNaN(distance)) {
        return "Error: Invalid distance";
    }

    let fare = 50;
    let remainingDistance = distance;


    if (remainingDistance > 10) {

        fare += (remainingDistance - 10) * 15;
        remainingDistance = 10;
    }

    if (remainingDistance > 2) {
        fare += (remainingDistance - 2) * 12;
    }

    if (isNightShift) {
        const nightSurcharge = Math.floor((fare * 25) / 100);
        fare += nightSurcharge;
    }

    return fare;
};
console.log(`Total Fare (15km, Day): ₹${calculateCabFare(15, false)}`);
console.log(`Total Fare (15km, Night): ₹${calculateCabFare(15, true)}`);



// Q6

const checkPasswordStrength = (password) => {

    if (typeof password !== "string") {
        return "Error: Password must be a text/string";
    }

    const passwordLength = password.length;

    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "/"];

    const hasNumber = password.split("").some(char => numbers.includes(char));
    const hasSpecialChar = password.split("").some(char => specialChars.includes(char));

    if (passwordLength <= 6) {
        return "Weak Password";
    }


    if (passwordLength >= 8 && hasNumber && hasSpecialChar) {
        return "Strong Password";
    }


    if (passwordLength >= 8 && hasNumber) {
        return "Medium Password";
    }

    return "Weak Password";
};

console.log(checkPasswordStrength("abc1"));
console.log(checkPasswordStrength("iueadsadasd2"));
console.log(checkPasswordStrength("iueadsadasd2@"));



// Q7

const ticketFineCalculator = (speed) => {
    if (speed <= 60) return 'No Fine, Safe Driving!'
    else if (speed > 60 && speed <= 80) return 'Fine: ₹500 for Speeding'
    else if (speed > 80) return 'Fine: ₹2000 for Reckless Driving!'
    else {
        return 'Error: Invalid Speed'
    }
}
console.log(ticketFineCalculator(60));
console.log(ticketFineCalculator(75));
console.log(ticketFineCalculator(85));
console.log(ticketFineCalculator(-5));



// Q8
const movieTicketDiscount = (age, isWednesday) => {

    let ticketsPrice = 200

    if (typeof age !== 'number' || age < 0) {
        return 'Age is not valid';
    }

    if (age >= 60) {
        return ticketsPrice - Math.floor((ticketsPrice * 50) / 100)
    }
    else if (age < 12) {
        return ticketsPrice - Math.floor((ticketsPrice * 30) / 100)
    }

    if (isWednesday) {
        if (age > 12 && age <= 59) {
            return ticketsPrice - 20
        }
    }
    return ticketsPrice
}


console.log(movieTicketDiscount(10, false));
console.log(movieTicketDiscount(40, false));
console.log(movieTicketDiscount(90, false));

console.log(movieTicketDiscount(40, true));
console.log(movieTicketDiscount(90, true));
console.log(movieTicketDiscount(10, true));



// Q9

const StudentGrade = (marks) => {
    if (marks < 0 || marks > 100) return 'Error'

    if (marks >= 90) return 'Grade A'
    else if (marks >= 75) return 'Grade B'
    else if (marks > 50) return 'Grade C'
    else return 'Fail'
}

console.log(StudentGrade(74));
console.log(StudentGrade(75));
console.log(StudentGrade(50));



// Q10

const suggestGymPlan = (budget) => {

    if (typeof budget !== 'number' || budget < 0) {
        return 'Invalid budget';
    }


    if (budget >= 2000) return 'VIP Plan';
    if (budget >= 1000) return 'Premium Plan';
    if (budget >= 500) return 'Basic Plan';

    return 'Sorry, no plan available in this budget';
}

console.log(suggestGymPlan(2000));
console.log(suggestGymPlan(1000));
console.log(suggestGymPlan(750));
console.log(suggestGymPlan(500));
console.log(suggestGymPlan(250));
console.log(suggestGymPlan(-50));



// Q11 
const separateNumbers = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Error: Array is empty';
    }

    let empty = {
        even: [],
        odd: []
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            empty.even.push(arr[i]);
        }
        else {
            empty.odd.push(arr[i]);
        }
    }

    return empty;
}

console.log(separateNumbers([1, 2, 3, 4, 5, 6]));
console.log(separateNumbers([]));




// Q12

const findMax = (arr) => {

    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Error: Array is empty'
    }
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([12, 45, 2, 89, 230]));



// Q13

const searchElement = (arr, target) => {

    if (!Array.isArray(arr) || arr.length === 0 || target === undefined) {
        return 'ERROR';
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            let index = arr.indexOf(arr[i])
            return index
        }
    }
    return 'Element not Found'
}
console.log(searchElement(['apple', 'banana', 'mango'], 'mango'));



// Q14

const calculateTotalBill = (prices, budget) => {

    let total = 0;

    if (!Array.isArray(prices) || prices.length === 0 || budget === undefined || budget < 0) {
        return 'ERROR: Invalid inputs';
    }

    for (let i = 0; i < prices.length; i++) {
        total += prices[i]
    }
    console.log(`Total cart price = ${total}`);

    if (total > budget) {
        return `Out of budget! You need ₹${total - budget} more`
    }
    else {
        return `Order placed successfully! ₹${budget - total} remaining`
    }

}
console.log(calculateTotalBill([200, 500, 50, 1200], 5000));



// Q15

const stringReverser = (str) => {

    let reverseStr = '';

    for (let i = 0; i < str.length; i++) {
        reverseStr = str[i] + reverseStr
    }
    return reverseStr
}
console.log(stringReverser("hello"));



// Q16

const duplicationRemover = (arr) => {

    let uniqueElements = []
    const seen = {}

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (!seen[value]) {
            seen[value] = true
            uniqueElements.push(value);
        }
    }
    return uniqueElements
}
console.log(duplicationRemover([1, 2, 2, 3, 4, 4, 5]));



// Q17

const wordCounter = (sentence) => {

    if (!sentence || sentence.trim() === "") {
        return 0;
    }

    let splitWords = sentence.trim().split(" ");
    let count = 0;

    for (let i = 0; i < splitWords.length; i++){
      
        if (splitWords[i] !== "") {
            count += 1;
        }
    }
        
    return count;
}

console.log(wordCounter("Coding is absolute fun"));



// Q 18

const students = [
    { id: 101, name: "Rahul", grade: "A" },
    { id: 102, name: "Amit",  grade: "B" },
    { id: 103, name: "Sonia", grade: "A" }
];

const findStudentById = (studentsList, searchId) => {
    
    if (!Array.isArray(studentsList) || studentsList.length === 0 || searchId === undefined) {
        return "ERROR";
    }
    
    for (const student of studentsList) {
        
        if (student.id === searchId) {
            return student;
        }
    }

    return "Student not Found";
}

console.log(findStudentById(students, 101)); 
console.log(findStudentById(students, 105)); 
console.log(findStudentById("not-an-array", 101)); 



// Q19

const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt",  category: "Clothing" },
    { name: "Mobile", category: "Electronics" },
    { name: "Jeans",  category: "Clothing" }
];

const groupProducts = (productsList) => {
    
    if (!Array.isArray(productsList) || productsList.length === 0) {
        return 'ERROR';
    }

    let newG = {};
    
    for (const product of productsList) {
        let category = product.category; 

        if (!newG[category]) {
            newG[category] = []; 
        }
                
        newG[category].push(product.name);
    }

    return newG;
}

console.log(groupProducts(products));



// Q20 

const findMostFrequent = (arr) => {
    
    let countRegister = {}; 

    
    for (const item of arr) {
        if (countRegister[item]) {
            countRegister[item] += 1; 
        } else {
            countRegister[item] = 1;  
        }
    }

    let mostFrequentElement = '';
    let maxCount = 0;

    for (const key in countRegister) {
        if (countRegister[key] > maxCount) {
            maxCount = countRegister[key]; 
            mostFrequentElement = key;     
        }
    }

    return mostFrequentElement;
}

console.log(findMostFrequent(['apple', 'banana', 'apple', 'mango', 'apple', 'banana']));

