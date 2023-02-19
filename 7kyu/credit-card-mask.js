// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//             "0227" -->             "0227"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

const cc = "4556364607935616"
const cc2 = "0227"
const cc3 = "1"
const cc4 = ""

function maskify(cc) {
    const lastFourStart = cc.length - 4
    return cc.slice(0, lastFourStart).split("").map(letter => "#").join("") + cc.slice(lastFourStart)
}

console.log(maskify(cc))
console.log(maskify(cc2))
console.log(maskify(cc3))
console.log(maskify(cc4))