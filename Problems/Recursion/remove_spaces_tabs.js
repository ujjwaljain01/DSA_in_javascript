// this task is to remove all tabs and spaces from a string this includes /t and " " from a string

//ITERATIVE APPROACH
function removeTAS(string) {
    let result=""
    for (let i = 0; i <string.length; i++) {
        let char=string[i]
        if(char!==" " && char!=="\t"){
            result+=char
        }
    }
    return result
}
console.log(removeTAS("Hello \t world"));

//RECURSIVE APPROACH
function recursiveRTAS(string){
    if(string.length===0){
        return ""
    }
    const firstChar = string[0]
    const restOfString=string.slice(1)
    if(firstChar===" " || firstChar==="\t"){
        return recursiveRTAS(restOfString)
    }
    return firstChar + recursiveRTAS(restOfString)
}
console.log(recursiveRTAS("Hello \t world"));