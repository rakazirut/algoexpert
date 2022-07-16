/*

  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

*/

/*
Brute Force
o(nlog(n)) time | o(n) space
nlog(n) because we sort
*/

// function sortedSquaredArray(array) {
//     let sqArray = []
//     array.forEach(element => {
//         sqVal = element * element
//         sqArray.push(sqVal)
//     });
//     return sqArray.sort(function (a, b) {
//         return a - b
//     });
// }

/*
2 Pointers
o(n) time | o(n) space
*/
function sortedSquaredArray(array) {
    let sqArray = new Array(array.length).fill(0)
    let smId = 0
    let lgId = array.length - 1

    // we build the array starting at the end, with largest values going in first
    for (let i = array.length - 1; i >= 0; i--) {
        let smallerValue = array[smId]
        let largerValue = array[lgId]
        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sqArray[i] = smallerValue * smallerValue
            smId++
        } else {
            sqArray[i] = largerValue * largerValue
            lgId--
        }
    }
    return sqArray
}

let array = [-4, 1, 2, 3, 5, 6, 8, 9]

console.log(sortedSquaredArray(array))

exports.sortedSquaredArray = sortedSquaredArray;