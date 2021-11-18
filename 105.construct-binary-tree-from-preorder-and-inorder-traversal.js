/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */
// 1. recursive
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) {
        return null
    }
    let rootInOrderIndex = inorder.indexOf(preorder[0])
    let left = buildTree(preorder.slice(1, 1+rootInOrderIndex), inorder.slice(0, rootInOrderIndex))
    let right = buildTree(preorder.slice(1+rootInOrderIndex), inorder.slice(rootInOrderIndex+1))
    return new TreeNode(preorder[0], left, right)
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) {
        return null
    }
    let rootInOrderIndex = inorder.indexOf(preorder[0])
    let left = buildTree(preorder.slice(1, 1+rootInOrderIndex), inorder.slice(0, rootInOrderIndex))
    let right = buildTree(preorder.slice(1+rootInOrderIndex), inorder.slice(rootInOrderIndex+1))
    return new TreeNode(preorder[0], left, right)
};
// @lc code=end

