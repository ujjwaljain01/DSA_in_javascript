// class Node{
//     constructor(key){
//         this.key=key
//         this.left=null
//         this.right=null
//     }
// }

//*~*~*~*~*~*~*~* DEPTH FIRST TRAVERSAL *~*~*~*~*~*~*~*
//getting into depth(leaf node) of one side and traversing all nodes 
//Approache:- ITERATIVE

const depthFirstTraversal=(root)=>{
    //list for storing values
    let values=[]
    //stack for tracking nodes
    let stack=[root]
    //checking if a tree exits or not
    if(!root){
        return values // return empy array or messsage ask the interviewer
    }
    //entering the loop only if stack has values in it
    while(stack.length>0){
        //first poping an element
        const node=stack.pop()
        //pushing node to the list
        values.push(node)
        //checking if the node have elements in right and left side and if yes then pushing them in stack
        if(root.right!==null){
            stack.push(node.right)
        }
        if(root.left!==null){
            stack.push(node.left)
        }
    }
    return values
}

//Approache:- RECURSIVE

const recursiveDFT=(root)=>{
    //lsit for storing values
    let values=[]
    //checking if a tree exits or not
    if(root===null){
        return values
    }
    //calling recursivly to get left and right side of tree
    const leftvalues=recursiveDFT(root.left)
    const rightvalues=recursiveDFT(root.right)
    //return [root.key,leftvalues,rightvalues]
    // [a,[d, c, d][e, f, g]]

    return [root.key, ...leftvalues, ...rightvalues]
    // [a, b, c, d, e, f, g]
}