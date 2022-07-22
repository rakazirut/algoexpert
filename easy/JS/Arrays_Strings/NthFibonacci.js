/*
The Fibonacci sequence is defined as follows: the first number of
the sequence is 0, the second number is 1, and the nth number is
the sum of the (n - 1)th and (n - 2)th numbers. 
Write a function that takes in an integer n and returns the nth 
Fibonacci number.

Important note: the Fibonacci sequence is often defined with
its first two numbers as F0 = 0 and F1 = 1. 
For the purpose of this question, the first Fibonacci number is F0; 
therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, 
etc..
*/

function getNthFib(n) {
    let fibArray = [0,1]
    for(i=2;i<=n;i++){
      fibArray.push(fibArray[i-1]+fibArray[i-2])
    }
    return fibArray[n-1]
  }
  
  let n = 4
  console.log(getNthFib(n))
  // Do not edit the line below.
  exports.getNthFib = getNthFib;