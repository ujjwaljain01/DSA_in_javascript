//*~*~*~*~*~*~*~* Creating Node *~*~*~*~*~*~*~*
class Node{
    constructor(data,next=null,prev=null){
        this.data=data
        this.next=next
        this.prev=prev
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
}

//*~*~*~*~*~*~* INSERTION *~*~*~*~*~*~*


//adding/inserting node at start(even before head)
DoublyLinkedList.prototype.insertAtStart=function(data){
    const newNode=new Node(data,this.head,null)

    //case1: if linked list is already have nodes
    if(this.head){
        this.head.prev=newNode
    }

    this.head=newNode

    //case2: if linked list does not have any node
    if(!this.tail){
        this.tail=newNode;
    }
}

//adding node at the end of linked list
DoublyLinkedList.prototype.insertAtEnd=function(data){
    const newNode=new Node(data,null,this.tail)
    
    //case1: if linked list is already have nodes
    if(this.tail){
        this.tail.next=newNode
    }
    this.tail=newNode

    //case2: if linked list does not have any node   
    if(!this.head){
        this.head=newNode
    }
}

//inserting node after a given node
DoublyLinkedList.prototype.insertAfter=function(data,prevNode){
    // Check if the previous node is null
    if (prevNode === null) {
        console.log("Invalid Previous Node");
        return;
    }

    //creating a Node in which next points to prevNode.next
    //and prevous points to prevNode
    const newNode=new Node(data,prevNode.next,prevNode)

    //pointing previous node next's previous to newNode
    if(prevNode.next){
        prevNode.next.prev=newNode
    }
    prevNode.next=newNode
    
    //if previous node was the last node then new Node will become the last node. hence the "tail"
    if(!newNode.next){
        this.tail=newNode
    }
}

//*~*~*~*~*~*~*~* DELETION *~*~*~*~*~*~*~*


//delete the first node of linked list
DoublyLinkedList.prototype.deleteFirst=function(){
    //checking if linked list exits or not
    if(!this.head){
        console.log("Nothing to delete")
        return
    }

    //checking if the there is only one node or not
    if(this.head===this.tail){
        this.head=null
        this.tail=null
    }
    else{
    //moving head to the next node and making previous of the new next node null
    this.head=this.head.next
    this.head.prev=null
    }
}

//delete the last node of the linked list
DoublyLinkedList.prototype.deleteLast=function(){
    //checking if linked list exits or not
    if(!this.tail){
        console.log("Nothing to delete")
        return
    }

    //checking if the there is only one node or not
    if(this.head===this.tail){
        this.head=null
        this.tail=null
    }
    else{
    //moving tail to its previous and pointing next of new tail null
    this.tail=this.tail.prev
    this.tail.next=null
    }
}

//reverse the linked list
DoublyLinkedList.prototype.reverse=function(){
    //checks if linked list exits or not
    if(!this.head){
        console.log("there is not a linked list to be reversed")
        return
    }
    
    let current=this.head
    let temp=null
    
    //swapping the previous and next of every node and while current have value
    while(current){
        //swapping previous to next and next to previous
        temp=current.prev
        current.prev=current.next
        current.next=temp
        
        //moving to next node (because the next of the node is now previous)
        current=current.prev //*!*!*!*!*!*! IMPORTANT *!*!*!*!*!*!*!
    }
    if(temp){
    this.tail=this.head
    this.head=temp.prev
    }
    //OR this code will also work
    /*
    if(temp){
        this.tail=temp
        this.tail=this.head
        this.head=temp
    }
    */
}

//*~*~*~*~*~*~*~* traversal/printing *~*~*~*~*~*~*~*


//printing the linked list
DoublyLinkedList.prototype.printList=function(){
    let current=this.head
    let listvalues=[]
    while(current){
        listvalues.push(current.data)
        current=current.next
    }
    console.log(listvalues.join("->"))
}

//*~*~*~*~*~*~*~* Usage *~*~*~*~*~*~

let myList=new DoublyLinkedList()
myList.insertAtStart(1)
myList.insertAtEnd(2)
myList.insertAtEnd(3)
myList.insertAtEnd(4)
myList.printList()
myList.deleteFirst()
myList.deleteLast()
myList.printList()



