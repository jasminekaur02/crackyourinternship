//serialization - conversion of one data structure into another like conversion of tree into a string and deserialization - conversion of 
// strings back to tree or retrieve a tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree // Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const arr = [];
    
    function traverse(node) {
        if (node === null) {
            arr.push('#');
            return;
        }
        arr.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    return arr.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const values = data.split(',');
    let index = 0;
    
    function buildTree() {
        if (values[index] === '#') {
            index++;
            return null;
        }
        
        const node = new TreeNode(parseInt(values[index]));
        index++;
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    
    return buildTree();
};

 
var serialize = function(root) {
    class TreeNode {
        constructor(value , left = null , right = null){
            this.value = value ; 
            this.left = left ; 
            this.right = right ; 
        }
    }
    let arr = []
    function traverse(node){
    if(node === 0 ){
         arr.push('#');
         return ;
    }
    arr.push(node.value);
    traverse(node.left);
    traverse(node.right);
}
traverse(root);
    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const MARKER = '#';
    if (value === undefined || value === MARKER) {
        return null;
    }
    data = newNode(value);
    data.left = deSerialize(data.left);
    data.right = deSerialize(data.right);
    return data;
}
function inorder(root) {
    if (root) {
        inorder(root.left);
        console.log(root.key);
        inorder(root.right);
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */