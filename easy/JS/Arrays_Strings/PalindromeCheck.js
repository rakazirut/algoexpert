/*
Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
*/


/* My first try (most optimal)
utilize two pointers
o(n) time | o(1) space
*/

function isPalindrome(string) {
    let left = 0
    let right = string.length - 1

    while (left < right) {
        if (string[left] == string[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
}

let testData = [
    {
        "string": "abcdcba"
    },
    {
        "string": "a"
    },
    {
        "string": "ab"
    },
    {
        "string": "aba"
    },
    {
        "string": "abb"
    },
    {
        "string": "abba"
    },
    {
        "string": "abcdefghhgfedcba"
    },
    {
        "string": "abcdefghihgfedcba"
    },
    {
        "string": "abcdefghihgfeddcba"
    },
    {
        "string": "racecar"
    }
]

testData.forEach(ele=>{
    let ans = isPalindrome(ele.string)
    console.log(ans)
})

// Do not edit the line below.
exports.isPalindrome = isPalindrome;