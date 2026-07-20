const str1 = "karan"
const str2 = "bisht"

const merge = (a, b) => {
    let newstr = "";

    let maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {
        let charA = a[i] ? a[i] : ""
        let charB = b[i] ? b[i] : ""

        newstr += charA + charB
    }
    return newstr
}
console.log(merge(str1, str2));



