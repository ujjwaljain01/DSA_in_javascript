// Input = ["(", "(", ")", ")", "(", ")"]

//ITERATIVE APPROACH
function balancePar(array,count=0) {
    for (let i = 0; i < array.length; i++) {
        if(array[i]=="("){
            count++
        }
        if(array[i]==")"){
            count--
        }
    }
    if(count===0){
        return true
    }
    return false
}

//RECURSIVE APPROACH
function reucsiveBP(array,startIndex=0,count=0){
    if(startIndex===array.length){
        return count==0
    }
    if(count<0){
        return false
    }
    if(array[startIndex]=="("){
        recursiveBP(array,startIndex+1,count+1)
    }
    else if(array[startIndex]==")"){
        recursiveBP(array,startIndex+1,count-1)
    }
    else{
        return false
    }
}