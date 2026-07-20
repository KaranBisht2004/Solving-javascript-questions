const sum = (...a) => {

    if (a.length >= 2) {
        return a[0] + a[1];
    }

    return (b) => {
        return a[0] + b
    }
}

console.log(sum(5)(6))
console.log(sum(5, 6)) 