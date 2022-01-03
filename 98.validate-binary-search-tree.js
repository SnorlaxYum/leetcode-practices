/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */
// 1. recursion
var isValidBST = function(root) {
    function helper(root, minNode, maxNode) {
        if(!root) {
            return true
        }
        if(minNode && root.val <= minNode.val || maxNode && root.val >= maxNode.val) {
            return false
        }
        return helper(root.left, minNode, root) && helper(root.right, root, maxNode)
    }
    return helper(root, null, null)
};
// 2. iteration
var isValidBST = function(root) {
    const stack = [{node: root}]
    while(stack.length) {
        const {node, minNode, maxNode} = stack.pop()
        if(node) {
            if(minNode && node.val <= minNode.val || maxNode && node.val >= maxNode.val) {
                return false
            }
            stack.push({node: node.left, minNode, maxNode: node})
            stack.push({node: node.right, minNode: node, maxNode})
        }
    }
    return true
};
// 3. iteration - first left, then recording the last, then right
// https://leetcode.com/problems/validate-binary-search-tree/discuss/32112/Learn-one-iterative-inorder-traversal-apply-it-to-multiple-tree-questions-(Java-Solution)
var isValidBST = function(root) {
    const stack = []
    let pre
    while(stack.length || root) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(pre && root.val <= pre.val) {
            return false
        }
        pre = root
        root = root.right
    }
    return true
};
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const stack = []
    let pre
    while(stack.length || root) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(pre && root.val <= pre.val) {
            return false
        }
        pre = root
        root = root.right
    }
    return true
};
// @lc code=end

