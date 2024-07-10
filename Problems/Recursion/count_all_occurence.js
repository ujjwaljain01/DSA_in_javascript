//count occurences of a key in a array

//ITERATIVE APPROACH
function countkeyIA(arr,key){
    let count=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===key){
            count++
        }        
    }
    return count
}
console.log(countkeyIA([1,1,2,3],1));

//RECURSIVE APPPROACH
//My Approach
function recursiveO(arr,key,index=0){
    if(arr.length===index){
        return 0
    }
    if(arr[index]===key){
        return 1 + recursiveO(arr,key,index+1)
    }
    return recursiveO(arr,key,index+1)
}
console.log(recursiveO([1,1,2,3],1));

//Sir's Approach
function recurCountKey(array,key,index=0) {
    if(index>=array.length){
        return 0
    }
    return (array[index]===key? 1:0) + recurCountKey(array,key,index+1)
}
console.log(recurCountKey([1,1,2,3],1));
