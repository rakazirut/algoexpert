/*
Write a function that takes in an array of at least three integers and,
without sorting the input array, returns a sorted array of 
the three largest integers in the input array.

The function should return duplicate integers if necessary; 
for example, it should return [10, 10, 12] for an input array of 
[10, 5, 9, 10, 12].
*/

/*
my solution
o(nlogn) time | o(1) space
*/

function findThreeLargestNumbers(array) {
    let lgArray = []
    for (let i = 0; i < 3; i++) {
        let largest = array.indexOf(Math.max(...array))
        lgArray[i] = array[largest]
        array.splice(largest, 1)
    }

    return lgArray.sort((a, b) => a - b)
}
let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
console.log(findThreeLargestNumbers(array))
// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;