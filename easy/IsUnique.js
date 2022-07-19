/*
Implement an algorithm to determine if a string has all unique characters
*/

// use hashmap
//time o(n) | space o(1)
function isUnique(value) {
    let map = {}

    for (let i = 0; i < value.length; i++) {
        if (value[i] in map) {
            return false
        } else {
            map[value[i]] = true
        }
    }
    return true
}

let test = 'eraser'

console.log(isUnique(test))