/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 */
// 1. Iterative (aka BFS)
var zigzagLevelOrder = function(root) {
    const result = []
    if(!root) {
        return result
    }
    let level = 0
    const queue = [root]
    while(queue.length) {
        const currentLevelNodes = []
        const nextQueue = []
        const push = level % 2 ? 'unshift' : 'push'
        while(queue.length) {
            const curNode = queue.shift()
            currentLevelNodes[push](curNode.val)
            if(curNode.left) {
                nextQueue.push(curNode.left)
            }
            if(curNode.right) {
                nextQueue.push(curNode.right)
            }
        }
        queue.push(...nextQueue)
        result.push(currentLevelNodes)
        level++
    }
    return result
};
// 2. recursive (aka DFS)
var zigzagLevelOrder = function(root) {
    const result = []
    if(!root) {
        return result
    }
    function helper(level, root) {
        if(!result[level]) {
            result[level] = []
        }
        const push = level % 2 ? 'unshift' : 'push'
        result[level][push](root.val)
        if(root.left) {
            helper(level+1, root.left)
        }
        if(root.right) {
            helper(level+1, root.right)
        }
    }
    helper(0, root)
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const result = []
    if(!root) {
        return result
    }
    let level = 0
    const queue = [root]
    while(queue.length) {
        const currentLevelNodes = []
        const nextQueue = []
        const push = level % 2 ? 'unshift' : 'push'
        while(queue.length) {
            const curNode = queue.shift()
            currentLevelNodes[push](curNode.val)
            if(curNode.left) {
                nextQueue.push(curNode.left)
            }
            if(curNode.right) {
                nextQueue.push(curNode.right)
            }
        }
        queue.push(...nextQueue)
        result.push(currentLevelNodes)
        level++
    }
    return result
};
// @lc code=end

