//*~*~*~*~**~*~*~* Stack *~*~*~*~*~*~*~*
class Stack{
    constructor(){
        this.stack=[]
    }

    //add elements to the stack
    push(data){
        this.stack.push(data)
    }

    //remove elements from the stack
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        this.stack.pop()
    }

    //gives element at top of the stack
    peek(){
        return this.stack[this.stack.length-1]
    }

    //checks whether the stack is empty or not
    isEmpty(){
        return this.stack.length==0   
    }

    //empties the stack
    clear(){
        this.stack=[]
    }

    //give the length of the stack
    size(){
        return this.stack.length
    }

    //searchs elements in the stack
    contain(element){
        return this.stack.includes(element)
    }

    //reverse the stack
    reverse(){
        return this.stack.reverse()
    }

    //prints the elements of the stack
    printStack(){
        let str =""
        for(let i=0;i<this.stack.length;i++){
            str+=this.stack[i]+ "\n"
        }
        return str
    }
}

let myStack =new Stack()
myStack.push(2)
console.log(myStack.peek());