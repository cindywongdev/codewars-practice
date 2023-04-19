// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

let arr = [1, 2, 3, 0, 0, "a"]

let strArr = ["a", "z", 0, "g", "h"]

console.log(strArr.indexOf(0))

function moveZeros(arr) {
    let zeroIndexes = []
    // start off i at -1 so that it'll start at index 0 on the first run of while loop
    let i = -1
    // after the first iteration, i is reassigned to whatever value 0 is found at
    // and then 1 is added to it so that indexOf() can start AFTER the first instance and find the next instance
    // and so on and so forth for all instances, until it can't find anymore
    while ((i = arr.indexOf(0, i+1)) != -1 && i != (arr.length - 1)) {
        zeroIndexes.push(i)
    }
    
    console.log("zeroIndexes array:", zeroIndexes)

    // now slice 0s out at their indexes
    for (index of zeroIndexes) {
        // const removed = arr.splice(index, 1)
        // arr.push(removed)
        arr.splice(index, 1)
        arr.push(0)
    }

    return arr.flat()
}

console.log("My test case:", moveZeros(strArr))

// console.log("Codewars test case:", moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

// function testPop() {
//     let testArr = [0, 1, 2, 3]
//     testArr.pop(0)
//     console.log("result:", testArr)
// }

// testPop()