// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.


function parse(data){
    let value = 0
    let returnArr = []

    for (command of data) {
        console.log(command)
        switch(command){
            case 'i':
                value += 1
                break
            case 'd':
                value -= 1
                break
            case 's':
                value = value **2
                break
            case 'o':
                returnArr.push(value)
                break
        }
    }
    return returnArr
}

console.log(parse("iiisdo")) // => 8
console.log(parse("iiisdoso")) // => [ 8, 64 ]