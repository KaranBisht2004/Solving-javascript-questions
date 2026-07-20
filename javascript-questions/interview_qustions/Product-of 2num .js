let arr = [1, 2, 3, 4, 5, 6];

const maxProductOfTwo = (num) => {

    let max1 = -Infinity;
    let max2 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = 0; i < num.length; i++) {
        const current = num[i];

        if (current > max1) {
            max2 = max1;
            max1 = current;
        } else if (current > max2) {
            max2 = current;
        }

        if (current < min1) {
            min2 = min1;
            min1 = current;
        } else if (current < min2) {
            min2 = current;
        }
    }

    const positiveProduct = max1 * max2;
    const negativeProduct = min1 * min2;

    if (positiveProduct > negativeProduct) {
        return { num1: max1, num2: max2, product: positiveProduct };
    } else {
        return { num1: min1, num2: min2, product: negativeProduct };
    }
}



console.log(maxProductOfTwo(arr));







