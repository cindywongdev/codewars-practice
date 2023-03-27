// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 

// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

const min = 1
const max = 3999

const number = 1666

function solution(number) {
    // convert the number to a roman numeral
    // define constants
    const M = 1000
    const D = 500
    const C = 100
    const L = 50
    const X = 10
    const V = 5
    const I = 1

    // initialize empty array and remainder var
    const result = []
    let remainder = number


    function findNumberOfLetter(remainder, letterVal) {
        const numOfLetter = Math.floor(remainder / letterVal)
        return numOfLetter
    }

    function addToResult(numOfLetter, letterStr) {
        for (let i = 0; i < numOfLetter; i += 1) {
            result.push(letterStr)
        }
    }

    function getRemainder(remainder, numOfLetter, letterVal) {
        remainder = remainder - (numOfLetter * letterVal)
        return remainder
    }

    // function to find # of one letter in a number
    function determineNumLetter(remainder, letterVal, letterStr) {
        const numOfLetter = findNumberOfLetter(remainder, letterVal)
        addToResult(numOfLetter, letterStr)
        remainder = getRemainder(remainder, numOfLetter,
            letterVal)
        console.log("remainder in function", remainder)
        return remainder
    }

    while (remainder > 0) {
        remainder = determineNumLetter(number, M, "M")
        remainder = determineNumLetter(remainder, D, "D")
        remainder = determineNumLetter(remainder, C, "C")
        remainder = determineNumLetter(remainder, L, "L")
        remainder = determineNumLetter(remainder, X, "X")
        remainder = determineNumLetter(remainder, V, "V")
        remainder = determineNumLetter(remainder, I, "I")
        
    }

    // turn result array into str
    return result.join("")
}

console.log(solution(number))

// Initial Attempts

// // find number of M's
        // const numM = findNumberOfLetter(number, M)
        // // push letters into array
        // addToResult(numM, "M")
        // // get remainder
        // remainder = getRemainder(number, numM, M)
        // console.log(remainder)


        // // same for D
        // const numD = findNumberOfLetter(remainder, D)
        // // push letters into array
        // addToResult(numD, "D")
        // // get remainder
        // remainder = getRemainder(remainder, numD, D)

        // // same for C
        // const numC = findNumberOfLetter(remainder, C)
        // // push letters into array
        // addToResult(numC, "C")
        // // get remainder
        // remainder = getRemainder(remainder, numC, C)