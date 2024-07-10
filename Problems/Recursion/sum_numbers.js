//returns the sum of numbers till N
//RECURSIVE APPROACH
//my appraoch
function sumofn(value,i=1){
    if(value===i){
        return i
    }
    return i+sumofn(value,i+1)
}

console.log(sumofn(5));

//sir's approach
function getASum(value){
    if(value===1){
        return 1
    }
    return value+getASum(value-1)
}
console.log(getASum(5));