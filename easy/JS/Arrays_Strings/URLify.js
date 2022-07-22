/*
Write a function to replace all spaces in a string with '%20'
*/
//time o(n) | space o(1)
function urlify(str) {
    let nStr = [...str]
    for(let i = 0; i < nStr.length; i++){
        if(nStr[i] == ' '){
            nStr[i] = '%20'
        }
    }
    return nStr.join('')
}

let str = 'easter is good'


console.log(urlify(str))