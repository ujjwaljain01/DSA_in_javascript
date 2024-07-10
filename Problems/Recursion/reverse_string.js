//reverse a string 

//iterative approach
//My approach
function reverseString(string){
    let revString=""
    let length=string.length-1
    for(let i=0;i<string.length;i++){
        revString+=string.charAt(length-i)
    }
    return revString
}
result=reverseString("hello")
console.log(result);

//sir's approach
function reverse(string){
    let reverse=""
    let length=string.length-1
    while(length>=0){
        reverse+=string[length]
        length=length-1
    }
    return reverse
}


//recursive approach(sir's appoach)
function recurreverseString(string){
    //base case
    if(string===""){
        return string
    }
    //getting last char from string and attaching it first inthe new string
    return string[string.length-1]+recurreverseString(string.substring(0,string.length-1))
    
  //let reversePart =  recurreverseString(string.substring(0, string.length - 1))
  //let result = string[string.length - 1] + reversePart
  
  //console.log(`Reversing: Last char: ${string[string.length- 1]} added in front of ${reversePart} to form a result: ${result}`)
}
console.log(recurreverseString("hello"));

//recursive approach (comment section that i understand)
function revString(string,length=1){
    //base case
    if(string.length<length){
        return ""
    }
    //creating the binary tree helped me to understand this recursion 1) 5-1=4(4th element in the string) 2)5-2=3 so on.. 
    return str[str.length-length]+revString(string,length+1)
}
