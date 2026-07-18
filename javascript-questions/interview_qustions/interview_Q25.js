const arr = "qwertyuiopasdfghjklqwsdfghiuytrewasdfghoiuytr"

const charCounter = (char) => {

    let charcolletor = {};

    for (let i = 0; i < char.length; i++) {
        const key = char[i];
        if (!charcolletor[key]) {
            charcolletor[key] = 1
        }
        else {
            charcolletor[key]++
        }
    }
    return charcolletor
}
console.log(charCounter(arr));
