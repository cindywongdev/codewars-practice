// DESCRIPTION:
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

const array = [4,6,2,1,9,63,-134,566]

// My Solution
// option 1: sort array in asc or desc order, return first value of array which will be max or min
// ASCENDING: a - b
// DESCENDING: b - a

const findMax = (array) => {
    // sort array in descending order
    const sortedDescendingArr = array.sort((a, b) => b - a)
    return sortedDescendingArr[0]
}

const findMin = (array) => {
    // sort array in ascending order
    const sortedAscendingArr = array.sort((a, b) => a - b)
    // return first elem of array, which is the min
    return sortedAscendingArr[0]
}

console.log("Max is:", findMax(array))
console.log("Min is:", findMin(array))