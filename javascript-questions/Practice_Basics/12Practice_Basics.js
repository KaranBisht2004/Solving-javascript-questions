// 1. Two Sum
let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};
console.log(twoSum([2, 7, 11, 15], 9))


const moveZeros = (nums) => {
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
        i++
    }

}
console.log(moveZeros([0, 1, 0, 3, 12]))


var reverseString = function(s) {
    let j = s.length-1;
    for(let i = 0; i < s.length; i++){
        [ s[i] , s[j] ] = [ s[j] , s[i] ]
        j--
    }
    return s
};
console.log(reverseString(["h","e","l","l","o"]))