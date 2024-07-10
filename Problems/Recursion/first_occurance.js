//find first occurance in a array
// arr = [3, 4, 1, 8, 1, 7];
// findMe = 1;
// currIndex = 0;
// -> Output = 2
// if not found = -1

//Short/Direct Approach
function first_Occurence(arr,findMe){ 
    arr.indexOf(findMe)
}
console.log(first_Occurence([1,2,3,4,5],5));

//ITERATIVE Approach
function first_Occur(arr,findMe,currIndex=0){
    while (currIndex<arr.length) {
        if(arr[currIndex]===findMe){
            return currIndex
        }
        currIndex++
    }
    return -1
}
console.log(first_Occur([1,2,3,4,5],5));

//RECURSIVE Approach
function recurFirstOccur(arr,findMe,currIndex=0) {
    if(arr[currIndex]===findMe){
        return currIndex
    }
    else if(currIndex>arr.length){
        return -1
    }
    return recurFirstOccur(arr,findMe,currIndex+1)
}
console.log(recurFirstOccur([1,2,3,4,3],3));
