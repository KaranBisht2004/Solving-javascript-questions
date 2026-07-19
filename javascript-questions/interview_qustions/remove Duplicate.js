// Remove Duplicate Element 


const arr = [100, 20, 50, 40, 50, 40, 100, 70, 90, 80];

const duplicationRemover = (num) => {

    if (!Array.isArray(num) || num.length === 0) {
        return "Error"
    }

    let uniqueElements = [];
    let obj = {};

    for (let i = 0; i < num.length; i++) {
        let keyElement = num[i];

        if (!obj[keyElement]) {
            obj[keyElement] = true
            uniqueElements.push(keyElement)
        }
    }
    return uniqueElements;
}

console.log(duplicationRemover(arr));