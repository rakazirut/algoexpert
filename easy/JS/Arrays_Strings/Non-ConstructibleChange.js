/*
Given an array of positive integers representing the values of coins in your possession, write a 
function that returns the minimum amount of change (the minimum sum of money) that you cannot create. 
The given coins can have any positive integer value and aren't necessarily unique 
(i.e., you can have multiple coins of the same value).

For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4.
If you're given no coins, the minimum amount of change that you can't create is 1
*/

/*
o(nlogn) time | o(n) space
*/

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b)
    let currentChange = 0
    for (const coin of coins) {
        if (coin > currentChange + 1) {
            return currentChange + 1
        }
        currentChange += coin
    }
    return currentChange + 1
}

let coins = [1, 1, 2, 3, 5, 7, 22]
console.log(nonConstructibleChange(coins))

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;