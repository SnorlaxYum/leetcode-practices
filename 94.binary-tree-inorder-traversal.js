/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */
// 1 recursive (aka dfs)
// 1.1 normal
var inorderTraversal = function(root) {
    const result = []
    if(!root) {
        return result
    }
    function helper(node) {
        if(!node) {
            return
        }
        helper(node.left)
        result.push(node.val)
        helper(node.right)
    }
    helper(root)
    return result
};
// 1.2 spread
// https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/1259828/2-line-JavaScript-solution-faster-than-81
var inorderTraversal = function(root) {
    if(!root) {
        return []
    }
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
// 2. iterative (aka bfs)
var inorderTraversal = function(root) {
    // https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/31394/JavaScript-solution-with-iteration
    const result = []
    const stack = []
    while(root || stack.length) {
        if(root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }
    return result
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = []
    if(!root) {
        return result
    }
    function helper(node) {
        if(!node) {
            return
        }
        helper(node.left)
        result.push(node.val)
        helper(node.right)
    }
    helper(root)
    return result
};
// @lc code=end

