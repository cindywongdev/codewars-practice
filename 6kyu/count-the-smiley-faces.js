// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

arr = [':)', ';(', ';}', ':-D']
arr2 = [';D', ':-(', ':-)', ';~)']

function countSmileys(arr) {
    // 12 possible smiley cases
    // if includes nose, total of 3 characters, and then 2 possible choices per char --> 2*2*2 = 8
    // if no nose, total of 2 characters, and then 2 possible choices per char --> 2*2 = 4
    // 8 + 4 = 12 possible smileys
    const validSmileys = [":)", ":-)", ":~)", ":D", ":-D", ":~D", ";)", ";-)", ";~)", ";D", ";-D", ";~D"]
    let numValidSmileys = 0

    // iterate through each emoji
    for (smiley of arr) {
        // check if smiley is a valid smiley
        if (validSmileys.includes(smiley)) {
            console.log(smiley)
            // increment numValidSmileys
            numValidSmileys +=1
        }
    }

    return numValidSmileys;
}

console.log(countSmileys(arr))
console.log(countSmileys(arr2))