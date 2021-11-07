/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 */
// 1. recursive (dfs)
var preorderTraversal = function(root) {
    const result = []
    helper(root)
    return result
    function helper(node) {
        if(!node) {
            return
        }
        result.push(node.val)
        helper(node.left)
        helper(node.right)
    }
};
// 2. iterative (bfs)
var preorderTraversal = function(root) {
    const result = []
    const stack = []
    while(root || stack.length) {
        if(root) {
            result.push(root.val)
            stack.push(root.right)
            root = root.left
        } else {
            root = stack.pop()
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
var preorderTraversal = function(root) {
    const result = []
    const stack = []
    while(root || stack.length) {
        if(root) {
            result.push(root.val)
            stack.push(root.right)
            root = root.left
        } else {
            root = stack.pop()
        }
    }
    return result
};
// @lc code=end

