/**
 * Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
* @param {TreeNode} root
* @return {number[][]}
*/
var verticalTraversal = function(root) {
  if(!root) return[];
  let nodes = [];
  let queue = [[root ,0 ,0 ]];
  while (queue.length){
      let[node, row,col] = queue.shift();
      nodes.push([col , row , node.val]);
      if(node.left){
          queue.push([node.left , row+1 , col-1]);
      }
      if(node.right){
           queue.push([node.right , row+1 , col+1]);
      }
  }
  nodes.sort((a,b) => {
      if(a[0] !== b[0]){
          return a[0] - b[0];
      }
      else if(a[1] !== b[1]){
          return a[1] - b[1];
      }
      else {
          return a[2] - b[2];
      }
  });
  let result = [];
  let currentCol = nodes[0][0];
  let currentColNodes = [] ; 
  for(let[col , row , val] of nodes ){
      if (col !== currentCol){
          result.push(currentColNodes);
          currentColNodes = [];
          currentCol = col ;
      }
      currentColNodes.push(val);
  }
  result.push(currentColNodes);
  return result ;
  };