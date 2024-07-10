//fibonacci series

//Problem Statement:- fib(2)=fib(1)+fib(0) give fibonacci series value is nth value

//ITERATIVE APPROACH 
function fibonacci(value){
    let n0=0;let n1=1;let n2=0
    for(let i=0;i<value;i++){
        n2=n0+n1
        n0=n1
        n1=n2
    }
    return n0
}
console.log(fibonacci(6));

//RECURSIVE APPROACH
function recurFibo(value){
    if(value<=1){
        return value
    }
    return (recurFibo(value-1)+recurFibo(value-2))
}
console.log(recurFibo(6));