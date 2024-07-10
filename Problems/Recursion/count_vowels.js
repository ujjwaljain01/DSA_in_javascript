//count vowels in a string

//My solutions
//iterative Approach:-

function isvowel(character){
    let vowels="aeiou"
    let lower=character.toLowerCase()
    if(vowels.indexOf(lower)!=-1){
        return 1
    }
    else{
        return 0
    }
}
console.log(countVowels("hello"))

function countVowels(string){
    let count=0
    for(let i=0;i<string.length;i++){
        count+=isvowel(string[i])
    }
    return count
}

//recursive approach
function recurCountVowels(string,index=0,vowels="aeiou",count=0){
    if(string.length<index){
        return count
    }
    let lower=string.toLowerCase()
    if(vowels.indexOf(lower[index])!=-1){
        count+=1
    }
    return recurCountVowels(string,index+1,vowels,count)
}
console.log(recurCountVowels("aeiou"))



//sir's solutions:-

//count vowels in a string

function isVowel(character){
  let lowerChar = character.toLowerCase()
  let vowels = "aeiou"

  if (vowels.indexOf(lowerChar) != -1) {
    return true
  } else {
    return false
  }
}

function countVowels(string){
  let count = 0

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count += 1
    }
  }
  return count
}
// console.log(countVowels("Hello"))


function recursiveCountVowels(string, stringLength){
  console.log(`Length: ${stringLength}, Current String ${string.substring(0, stringLength)}`)
  
  if (stringLength == 1) {
    console.log("Base case got hit here")
    console.log("Base case: ", Number(isVowel(string[0])))
	  return Number(isVowel(string[0])); 
  }


  // return recursiveCountVowels(string, stringLength - 1) + isVowel(string[stringLength - 1]); 

  let result = recursiveCountVowels(string, stringLength - 1) + isVowel(string[stringLength - 1]); 
  console.log(`count after checking ${string[stringLength - 1]}: ${result}`)
  return result

}

let myString = "Hello"
console.log(recursiveCountVowels(myString, myString.length))

