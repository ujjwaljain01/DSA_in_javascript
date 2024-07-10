//checks if a inputString is a palindrome or not
//Ex:- nitin,madam
// IETRATIVE APPROACH 
function palindrome(inputString) {
    let lowerString=inputString.toLowerCase()
    let i=0
    let j=lowerString.length-1
    while(i!==j){
        if(lowerString[i]===lowerString[j]){
            i++
            j--
        }
        else{
            return false
        }
    }
    return true
}
console.log(palindrome("madam"));

//RECURSIVE APPROACH
//MY Approach
function recursiveP(inputString) {
    if(inputString.length===1){
        return true
    }
    let last=inputString.length-1
    if(inputString[0]===inputString[last]){
        return recursiveP(inputString.substring(1,last))
    }
    return false
}
console.log(recursiveP("madam"));

//Sir's Approach
function recurPalindrome(string){
    if(string.length<=1){
        return true
    }
    if(string[0]===string[string.length-1]){
        return palindrome(string.substring(1,string.length-1))
    }
    else{
        return false
    }
}