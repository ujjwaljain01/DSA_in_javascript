//Problem Statement:- we have to return sum of all keys present in a binary tree

//Approaches:-
//*~*~*~*~*~*~*~* DEPTH FIRST TRAVERSAL *~*~*~*~*~*~*~*

const treeSumProblem=(root)=>{
    let stack=[root]
    let sum=0
    //checking if a tree exits or not
    if(root===null){
        return 0
    }
    //entering the loop only if stack has values in it
    while(stack.length>0){
        //first poping an element 
        const node=stack.pop()
        //adding keys to the sum
        sum+=node.key
        //checking if the node have elements in right and left side and if yes then pushing them in stack 
        if(node.right!==null){
            stack.push(node.right)
        }
        if(node.left!==null){
            stack.push(node.left)
        }
    }
    //returning the sum in the end 
    return sum
}

//*~*~*~*~*~*~*~* BREATH FIRST TRAVERSAL *~*~*~*~*~*~*~*

const treesumproblem=(root)=>{
    let queue=[root]
    let sum=0
    //checking if a tree exits or not
    if(root===null){
        return 0
    }
    //entering the loop only if stack has values in it
    while(queue.length>0){
        //shifting the element as we are uding queues
        const node= queue.shift()
        //adding keys to the sum
        sum+=node.key
        //checking if the node have elements in right and left side and if yes then pushing them in stack
        if(node.left!==null){
            stack.push(node.left)
        }
        if(node.right!==null){
            stack.push(node.right)
        }
    }
    //returning the sum in the end
    return sum
}