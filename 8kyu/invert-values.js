// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

const array = [1, 2, 3, 4, 5]

console.log(array)

function invert(array){
    return array.map((element, index) => {
    //   const elementCopy = {...element}
      return element - element*2
    })
}

const invertedArray = invert(array)

console.log(invertedArray)

console.log(array)