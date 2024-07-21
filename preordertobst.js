
var bstFromPreorder = function(preorder) {
    class TreeNode {
        constructor(val, left = null, right = null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        isEmpty() {
            return this.root === null;
        }

        insert(value) {
            const newNode = new TreeNode(value);
            if (this.isEmpty()) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }

        insertNode(root, newNode) {
            if (newNode.val < root.val) {
                if (root.left === null) {
                    root.left = newNode;
                } else {
                    this.insertNode(root.left, newNode);
                }
            } else {
                if (root.right === null) {
                    root.right = newNode;
                } else {
                    this.insertNode(root.right, newNode);
                }
            }
        }
    }

    const bst = new BinarySearchTree();
    for (const value of preorder) {
        bst.insert(value);
    }
    return bst.root;
};

