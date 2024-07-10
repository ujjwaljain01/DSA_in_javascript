//remove adjacent dublicates in a inputString
//input:- "aabcc" output:-abc

//*~*~*~*~*~*~*~*~ITERATIVE APPROACH~*~*~*~*~*~*~*~*~*
//My Approach
function removeAdjDup(inputString) {
    let result=""
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i]===inputString[i+1]){
            result+=inputString[i]
            i=i+1
        }
        else{
            result+=inputString[i]
        }
    }
    return result
}
console.log(removeAdjDup("aabbcc"));

//Sir's Approach
function removeADjDup(inputString){
    let result = ""
    for (let i = 0; i < inputString.length; i++) {
      if (i === inputString.length - 1 || inputString[i] !== inputString[i+1]) {
        result += inputString[i]
      }
    }
    return result
  }
console.log(removeADjDup("aabbcc"));

//*~*~*~*~*~*~*~*~*RECURSIVE APPROACH*~*~*~*~*~*~*~**~*~*
//My Appraoach
function recursiveRAD(inputString){
    let result=""
    if(inputString===""){
        return ""
    }
    if(inputString[0]!==inputString[1])[
        result+=inputString[0]
    ]
    return result + recursiveRAD(inputString.substring(1))
}
console.log(recursiveRAD("aabbcc"));

//Sir's Appraoch
function recursivERAD(inputString){
    if (inputString.length <= 1) {
        return inputString
    }

    if (inputString[0] === inputString[1]){
        return recursivERAD(inputString.substring(1))
    }
    else {
      return inputString[0] + recursivERAD(inputString.substring(1))
    }
}
console.log(recursivERAD("aabbcc"));

//Extra Question :-removing both adjacent elements
//ITERATIVE APPROACH
function removeBothAdj(inputString) {
    let result=""
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i]===inputString[i+1]){
            i++
        }
        else{
            result+=inputString[i]
        }
    }
    return result
}
console.log(removeBothAdj("helloo"));

//RECURSIVE APPROACH
function recursiveRBA(inputString) {
    if(inputString===""){
        return ""
    }
    if(inputString[0]===inputString[1]){
        if(inputString[2]){
            recursiveRBA(inputString.substring(2))            
        }
        return ""
    }
    else{
        return inputString[0]+recursiveRBA(inputString.substring(1))
    }
}
console.log(recursiveRBA("helloo"));