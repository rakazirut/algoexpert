/*
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1,3,4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].
  Note that a single number in an array and the array itself are both valid
  subsequences of the array.

*/

/* 
While Loop
o(n) time | o(1) space
*/

// function isValidSubsequence(array, sequence) {
//     arrId = 0
//     seqId = 0

//     while (arrId < array.length && seqId < sequence.length){
//         if(array[arrId] === sequence[seqId]){
//             seqId++
//         }
//         arrId++
//     }
//     return seqId === sequence.length
// }



/*
For Loop
o(n) time | o(1) space
*/

function isValidSubsequence(array, sequence) {
    let seqId = 0
    for (const value of array) {
        if (seqId === sequence.length) {
            break
        }
        if (sequence[seqId] === value) {
            seqId++
        }
    }
    return seqId === sequence.length
}

let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]

console.log(isValidSubsequence(array, sequence))
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;