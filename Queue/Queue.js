//*~*~*~*~*~*~*~* Queue *~*~*~*~*~*~*~*
class Queue{
    //intilization of queue
    constructor(){
        this.queue=[]
    }
    
    //add elements to the queue
    enqueue(data){
        this.queue.push(data)
    }

    //delete elements from the queue
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.queue.shift()
    }

    //gives the first element present in the queue
    front(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.queue[0]
    }

    //gives last element present in the queue
    back(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.queue[this.queue.length-1]
    }

    //checks whether the queue is empty or not
    isEmpty(){
        return this.queue.length===0
    }

    //searchs elements in the stack
    contain(element){
        return this.queue.includes(element)
    }

    //gives length of the queue
    size(){
        return this.queue.length
    }

    //convert queue into string
    toString() {
        return this.queue.toString();
    }

    //empties the queue
    clear(){
        this.queue=[]
    }

    //prints the queue
    printQueue(){
        let str=""
        for(let i=0;i<this.queue.length;i++){
            str+=this.queue[i]+"\n"
        }
        return str
    }
}

//*~*~*~*~**~*~*~* Usage *~*~*~*~*~*~*~*
let q1=new Queue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
console.log(q1.printQueue())
q1.dequeue()
console.log(q1.printQueue())
console.log(q1.front());
