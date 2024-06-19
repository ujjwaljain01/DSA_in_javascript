// *~*~*~*~*~*~*~* Creating Node *~*~*~*~*~*~*~*

class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
}

// *********** INSERTION ***********
  
// Insert at the start
LinkedList.prototype.insertAtBeginning=function(data){
    let newNode=new Node(data)
    newNode.next=this.head
    this.head=newNode
}
// Insert at the end
LinkedList.prototype.insertAtEnd=function(data){
    let newNode=new Node(data)

     //   this move head to end if the head is null
    if(!this.head){
        this.head=newNode
    }

    //   move to end
    else{
        let last=this.head
        while(last.next){
            last=last.next
        }
        last.next=newNode
    }
}

// Insert at the given node
LinkedList.prototype.insertAfter=function(prevnode,data){
    if(!prevnode){
        console.log("give prevnode");
        return
    }

    let newNode=new Node(data,prevnode.next)
    prevnode.next=newNode
}

 // *********** Deletion ***********

// Delete at the Start or Delete Head
LinkedList.prototype.deleteFirst=function(){
    if(!this.head){
        console.log("Nothing to delete");
        return 
    }

    this.head=this.head.next
}

  // Delete at the End or Delete Tail
LinkedList.prototype.deleteLast=function(){

    // Case 1 -> If the head is null    
    if(!this.head){
        console.log("Nothing to delete");
        return
    }

    // Case 2 -> if there is only one node
    else if(!this.head.next==null){
        this.head=null
        return
    }

    // Case 3 -> if there are more then one nodes
    let secondLast=this.head
    while(secondLast.next.next){
        secondLast=secondLast.next
    }
    secondLast.next=null
}

  // Delete by given key/node
LinkedList.prototype.deleteAtGivenIndex=function(key){
    // Case 1 -> If the list is empty
    if(!key){
        console.log("Give key");
        return
    }

    // Case 2 -> If there is only one node
    if(!this.head){
        console.log("the list is empty");
        return
    }

    // Case 3 -> If there are more than one nodes
    if(this.head.data===key){
        this.head=this.head.next
        return
    }

    let current=this.head
    while(current.next!==null){
        if(current.next.data===key){
            current.next=current.next.next
            return
        }
        current=current.next
    }
    console.log("No node found with key: ",key)  

}

  // *********** Searching ***********
LinkedList.prototype.search=function(data){
    let current=this.head
    while(current){
        if(current.data===data){
            return true
        }
        current=current.next
    }
    return false
}

  // *********** Traverse/Printing ************
LinkedList.prototype.traversal=function(){
    let current=this.head
    let list=[]
    while(current){
        list.push(current.data)
        current=current.next
    }
    console.log(list.join(" -> "));
}

  // *********** Reverse ***********
LinkedList.prototype.reverse=function(){
    let prev=null
    let current=this.head
    let next=null
    while(current){
        next=current.next
        current.next=prev
        prev=current
        current=next
        next=next.next
    }
    
}

let myList=new LinkedList
myList.insertAtBeginning(1)
myList.insertAtEnd(2)
myList.insertAtEnd(3)
myList.insertAtEnd(4)
myList.reverse()
myList.traversal()

