// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
    let phoneNumber = "("

    for (let i=0; i<3; i+=1) {
        phoneNumber += numbers[i]
    }

    phoneNumber += ") "

    for (let i=3; i<6; i+=1) {
        phoneNumber += numbers[i]
    }

    phoneNumber += "-"
    
    for (let i=6; i<10; i+=1) {
        phoneNumber += numbers[i]
    }

    return phoneNumber
}

console.log(createPhoneNumber(numbers))

// shorter solution

const createPhoneNumber2 = (numbers) => {
    let format = "(xxx) xxx-xxxx"

    for (number of numbers) {
        format = format.replace("x", number)
    }

    return format
}

console.log(createPhoneNumber2(numbers))