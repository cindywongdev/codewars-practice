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

// ^ to resolve above: maybe treat the 9's differently?
// or make it so if numLetter >3, special treatment?

const min = 1
const max = 3999

// const number = 1666
const number = 3999

// ALT SOLUTION IDEA!!!
// initialize result array
// split number into array and deal with each # one by one
// for loop based on index (aka tens (?) place)
// check if # is a 9
// if not, do the math (ex. 3 in 0 index aka thousand's place => push 3 Ms into array)
// if yes, special treatment (ex. 9 in 1 index aka hundred's place => push CM into array)
// if # is a 0, skip it
// if end of array is reached, return the result!

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

    // find any and all 9's first (special treatment)
    let indicesOf9 = []
    const numToStrArr = number.toString().split("")
    let indexOf9 = numToStrArr.indexOf("9")
    while (indexOf9 !== -1) {
        indicesOf9.push(indexOf9)
        indexOf9 = numToStrArr.indexOf("9", indexOf9 + 1)
    }
    console.log(indicesOf9)

    // function to check value of 9 based on index (only needa search indexes 1,2,3 since max val is 3999)
    function convert9(index){
        // if 9 is in the hundreds place (900)
        if (index === 1) {
            return "CM"
        }
        // if 9 is in the tens place (90)
        if (index === 2) {
            return "XC"
        }
        // if 9 is in the ones place (9)
        if (index === 3) {
            return "IX"
        }
    }

    let LetterArray9 = []

    for (index of indicesOf9) {
        LetterArray9.push(convert9(index))
    }

    console.log(LetterArray9)

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