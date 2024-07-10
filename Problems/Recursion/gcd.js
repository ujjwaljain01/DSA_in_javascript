//  find gcd of two numbers
//  input: 42 and 18
//  output: 6
//  42 divisors are: 1, 2, 3, 6, 7, 14, 21, 42
//  18 divisors are: 1, 2, 3, 6, 9, 18 
function gcd(num1,num2){
    if(num2>num1){
        return gcd(num1,num2-num1)
    }
    else if(num1>num2){
        return gcd(num1-num2,num2)
    }
    else{
        return num1
    }
}
console.log(gcd(42,56));

function iterativegcd(num1,num2) {
    let arr1=[]
    let arr2=[]
    let small=num2
    if(num1<num2){
        small=num1
    }
    for (let i = 1; i <small; i++) {
        if(num1%i===0){
            arr1.push(i)
        }
        if(num2%i===0){
            arr2.push(i)
        }
    }
    arr1.sort(function(a, b){return b - a})
    arr2.sort(function(a,b){return b - a})
    let length=arr2.length
    if(arr1.length<arr2.length){
        length=arr1.length
    }
    for (let i = 0; i<length; i++) {
        if(arr1[i]===arr2[i]){
            return arr1[i]
        }
    }
}
console.log(iterativegcd(42,56));