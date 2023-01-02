// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const array = [5, 9, 3, 4]

function grow(array){
    const multipliedValue = array.reduce((acc, element, index) => {
        return acc * element
    }, 1)

    return multipliedValue
}

console.log(grow(array))