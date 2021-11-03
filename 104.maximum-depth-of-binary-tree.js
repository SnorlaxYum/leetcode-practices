/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */
// recursive one (easier to think about)
// Space: O(n)
// Time: O(n)
var maxDepth = function(root) {
    if(!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1
};
// iterative one
// Space: O(n)
// Time: O(n)
var maxDepth = function(root) {
    let depth = 0
    if(!root) {
        return depth
    }
    let queue = [root]
    while(queue.length) {
        depth++
        const {length} = queue
        for(let i = 0; i < length; i++) {
            const node = queue[i]
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        queue = queue.slice(length)
    }
    return depth
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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0
    if(!root) {
        return depth
    }
    let queue = [root]
    while(queue.length) {
        depth++
        const {length} = queue
        for(let i = 0; i < length; i++) {
            const node = queue[i]
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        queue = queue.slice(length)
    }
    return depth
};
// @lc code=end

