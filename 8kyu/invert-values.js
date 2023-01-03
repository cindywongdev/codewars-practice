// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

const array = [1, 2, 3, 4, 5]

// this solution yields "expected [+0] to deeply equal [-0] error"
// function invert(array){
//     return array.map((element, index) => element - element*2)
// }

// omg it was THIS simple...?!
// TO INVERT ELEMENT: just slap a - sign in front of the element
function invert(array){
    return array.map((element, index) => -element)
}

console.log(invert(array))