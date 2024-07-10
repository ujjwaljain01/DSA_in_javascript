//returning power of a given number with base exponent

//RECURSIVE APPROACH
function powerNum(base,exponent){
    if(exponent===0){
        return 1
    }
    return base*powerNum(base,exponent-1)
}
console.log(powerNum(2,2));