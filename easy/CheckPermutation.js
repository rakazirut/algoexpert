/*
Given two strings, write a method to decide if one is a permutation of the other
*/

//time o(nlogn) | space o(n)
function checkPermuation(str1, str2) {
    let nStr1 = [...str1].sort().join('')
    let nStr2 = [...str2].sort().join('')
    for (let i = 0; i < nStr1.length; i++) {
        if(nStr1[i]==nStr2[i]){
            continue
        } else {
            return false
        }
    }
    return true
}

let str1 = 'easter'
let str2 = 'retsae'

console.log(checkPermuation(str1, str2))