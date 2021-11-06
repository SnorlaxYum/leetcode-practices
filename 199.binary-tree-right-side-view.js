/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */
// 1. recursive (dfs)
var rightSideView = function(root) {
    const result = []
    function helper(node, level) {
        if(!node) {
            return
        }
        result[level] = node.val
        helper(node.left, level+1)
        helper(node.right, level+1)
    }
    helper(root, 0)
    return result
};
// 2. iterative (bfs)
var rightSideView = function(root) {
    const result = []
    if(root) {
        const queue = [root]
        let level = 0
        while(queue.length) {
            const nextQueue = []
            while(queue.length) {
                const cur = queue.shift()
                result[level] = cur.val
                if(cur.left) {
                    nextQueue.push(cur.left)
                }
                if(cur.right) {
                    nextQueue.push(cur.right)
                }
            }
            queue.push(...nextQueue)
            level++
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
var rightSideView = function(root) {
    const result = []
    if(root) {
        const queue = [root]
        let level = 0
        while(queue.length) {
            const nextQueue = []
            while(queue.length) {
                const cur = queue.shift()
                result[level] = cur.val
                if(cur.left) {
                    nextQueue.push(cur.left)
                }
                if(cur.right) {
                    nextQueue.push(cur.right)
                }
            }
            queue.push(...nextQueue)
            level++
        }
    }
    return result
};
// @lc code=end

