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
// 2. iterative
// original: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/336250/O(N)-Iterative-Python-Solution-using-Dictionary-and-Stack
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) {
        return null
    }
    let stack = [], inOrderMap = new Map()
    for(let [index, node] of inorder.entries()) {
        inOrderMap.set(node, index)
    }
    let root = new TreeNode(0)
    stack.push([root, 0, preorder.length-1])
    for(let i = 0; i < preorder.length; i++) {
        let [cur, low, high] = stack.pop()
        cur.val = preorder[i]
        let inOrderIndex = inOrderMap.get(preorder[i])
        if(inOrderIndex < high) {
            let rightMid = new TreeNode(0)
            cur.right = rightMid
            stack.push([rightMid, inOrderIndex+1, high])
        }
        if(low < inOrderIndex) {
            let leftMid = new TreeNode(0)
            cur.left = leftMid
            stack.push([leftMid, low, inOrderIndex-1])
        }
    }
    return root
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
    let stack = [], inOrderMap = new Map()
    for(let [index, node] of inorder.entries()) {
        inOrderMap.set(node, index)
    }
    let root = new TreeNode(0)
    stack.push([root, 0, preorder.length-1])
    for(let i = 0; i < preorder.length; i++) {
        let [cur, low, high] = stack.pop()
        cur.val = preorder[i]
        let inOrderIndex = inOrderMap.get(preorder[i])
        if(inOrderIndex < high) {
            let rightMid = new TreeNode(0)
            cur.right = rightMid
            stack.push([rightMid, inOrderIndex+1, high])
        }
        if(low < inOrderIndex) {
            let leftMid = new TreeNode(0)
            cur.left = leftMid
            stack.push([leftMid, low, inOrderIndex-1])
        }
    }
    return root
};
// @lc code=end

