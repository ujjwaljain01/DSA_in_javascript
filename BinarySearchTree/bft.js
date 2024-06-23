// class Node{
//     constructor(key){
//         this.key=key
//         this.left=null
//         this.right=null
//     }
// }

//*~*~*~*~*~*~*~* DEPTH FIRST TRAVERSAL *~*~*~*~*~*~*~*
//visiting every node on each level and then moving to next level in a tree 
const breadthFirstTraversal=(root)=>{
    //list for storing values
    let values=[]
    //queue for tracking nodes 
    let queue=[root]
    //checking if a tree exits or not
    if(root===null){
        return values // return empy array or messsage ask the interviewer
    }
    //entering the loop only if stack has values in it
    while(root.length>0){
        //first shifting an element because working of a queue
        const node=queue.shift()
        //pushing node to the list
        values.push(node.key)
        //checking if the node have elements in right and left side and if yes then pushing them in queue
        if(node.left!==null){
            queue.push(node.left)
        }
        if(node.right!==null){
            queue.push(node.right)
        }
    }
    return values
}