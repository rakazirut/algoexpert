/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.
*/


/*
Two For loops
o(n^2) time | o(1) space
*/

// function twoNumberSum(array, targetSum) {
//     for (let i = 0; i < array.length; i++) {
//         let firstNum = array[i]
//         for (let j = i + 1; j < array.length; j++) {
//             let secNum = array[j]
//             if (firstNum + secNum == targetSum) {
//                 return [firstNum, secNum]
//             }
//         }
//     }
//     return []
// }

/*
Hash table
o(n) time | o(n) space
*/

// function twoNumberSum(array, targetSum) {
//     let seen = {}
//     for (let num of array) {
//         let diff = targetSum - num
//         if (diff in seen) {
//             return [diff, num]
//         } else {
//             seen[num] = true
//         }
//     }
//     return []
// }

/*
Two pointers
o(nlog(n)) time | o(n) space
*/

function twoNumberSum(array, targetSum) {
    /*
        By default, the sort() function sorts values as strings.
        This works well for strings ("Apple" comes before "Banana").
        However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
        Because of this, the sort() method will produce incorrect result when sorting numbers.
        You can fix this by providing a compare function

        If the result is negative a is sorted before b.
        If the result is positive b is sorted before a.
        If the result is 0 no changes are done with the sort order of the two values.
    */
    let sortedArray = array.sort(function (a, b) {
        return a - b
    })
    let left = 0
    let right = sortedArray.length - 1

    while (left < right) {
        currentSum = sortedArray[left] + sortedArray[right]
        if (currentSum == targetSum) {
            return [sortedArray[left], sortedArray[right]]
        } else if (currentSum < targetSum) {
            left++
        } else {
            right--
        }
    }
    return []

}

let testData = [
    {
        "array": [3, 5, -4, 8, 11, 1, -1, 6],
        "targetSum": 10
    },
    {
        "array": [4, 6],
        "targetSum": 10
    },
    {
        "array": [4, 6, 1],
        "targetSum": 5
    },
    {
        "array": [4, 6, 1, -3],
        "targetSum": 3
    },
    {
        "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "targetSum": 17
    },
    {
        "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
        "targetSum": 18
    },
    {
        "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
        "targetSum": -5
    },
    {
        "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
        "targetSum": 163
    },
    {
        "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
        "targetSum": 164
    },
    {
        "array": [3, 5, -4, 8, 11, 1, -1, 6],
        "targetSum": 15
    },
    {
        "array": [14],
        "targetSum": 15
    },
    {
        "array": [15],
        "targetSum": 15
    }
]

testData.forEach(ele=>{
    let ans = twoNumberSum(ele.array, ele.targetSum)
    console.log(ans)
})

exports.twoNumberSum = twoNumberSum;