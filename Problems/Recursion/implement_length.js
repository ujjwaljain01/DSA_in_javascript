//implementation of length function without using length
//ITERATIVE APPROACH
function iterativeLength(inputString) {
    let i=0
    while(inputString[i]){
        i++
    }
    return i
}
console.log(iterativeLength("hello"));

//RECURSIVE APPROACH
function recursiveLength(inputString) {
    if(inputString===""){
        return 0
    }
    return 1+ recursiveLength(inputString.substring(1))
}
console.log(recursiveLength("hello"));