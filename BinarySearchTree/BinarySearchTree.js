//*~*~*~*~*~*~*~* Creating Node *~*~*~*~*~*~*~*
class BSTNode{
    constructor(key){
        this.key=key
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    //*~*~*~*~*~*~*~* INSERTION *~*~*~*~*~*~*~*

    Insertion(key){
        let newNode=new BSTNode(key)
        //checking if tree already have nodes or not 
        if(!this.root){
            this.root=newNode
        }
        //if not then calling a recursive function for insertion
        else{
            insertNode(this.root,newNode)
        }
    }
    //recursive function for insertion
    insertNode(node,newNode){ //node -> root Node

        //checking if newnode.key has less value than node.key 
        if(newNode.key<node.key){
            //checking if node.left is null or not
            if(!node.left){
                node.left=newNode
            }
            //if node.left is not null then move to next node in left side of tree
            else{
                this.insertNode(node.left,newNode)
            }
        }
        //if newNode.key is more than node.key
        else{
            //checking if node.right is null or not
            if(!node.right){
                node.right=newNode
            }
            //if node.right is not null then move to next node in right side of tree
            else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    //*~*~*~*~*~*~*~* DELETION *~*~*~*~*~*~*~*

    Deletion(key){
        //calling recursive method 
        this.root=this.deleteNode(this.root,key)
    }
    //recursive method
    deleteNode(node,key){
        //if tree does not have nodes then return null
        if(node===null){
            return null
        }
        //checking if deletion node key value is less or more than node key value
        if(key<node.key){
            //calling the function and passing the left side of the tree
            this.deleteNode(node.left,key)
        }
        else if(key>node.key){
            //calling the function and passing the right side of the tree
            this.deleteNode(node.right,key)
        }
        //if key value matches performing deletion
        else{
            //Case1: if node has no child
            if(node.left===null && node.right===null){
                return null
            }
            //Case2: if node has one child. The child can on right or left side
            else if(node.left===null){
                return node.right
            }
            else if(node.right===null){
            return node.left
            }
            //case3: if node have both child
            else{
                //finding replacement for node by inorder successor or inorder predecessor methods
                let tempNode=minFind(node.right) //inorder successor
                //let tempNode=maxFind(node.left)  inorder predecessor
                node.key=tempNode.key
                //deleting the node which is replacing the node value
                this.deleteNode(node.right,tempNode.key)
            }
        }
        return node
    }

    //finding inorder successor
    minFind(node){
        while(node.left!==null){
            node=node.left
        }
        return node
    }

    //finding inorder predecessor
    maxFind(node){
        while(node.right!==null){
            node=node.right
        }
        return node
    }

    //*~*~*~*~*~*~*~* TRAVERSAL *~*~*~*~*~*~*~*

    //preorder:- root,left,right
    preOrderTraversal(){
        let result=[]
        preorder(this.root,result)
        return result
    }
    //recursive function for preorder
    preOrder(root,result){
        while(node!==null){
            result.push(root.key)
            this.preOrder(root.left,result)
            this.preOrder(root.right,result)
        }
    }

    //inorder:- left,root,right
    inOrderTraversal(){
        let result=[]
        inOrder(this.root,result)
        return result
    }
    //recursive function for inorder
    inOrder(node,result){
        this.inOrder(node.left,result)
        result.push(root.key)
        this.inOrder(node.right,result)
    }

    //postorder:- left,right,root
    postOrderTraversal(){
        let result=[]
        postOrder(this.root,result)
        return result
    }

    //recursive function for postorder
    postOrder(node,result){
        this.postOrder(node.left,result)
        this.postOrder(node.right,result)
        result.push(root.key)
    }
}
