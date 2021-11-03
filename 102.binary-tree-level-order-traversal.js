/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */
// Iterative
var levelOrder = function(root) {
    const result = []
    let queue = [root]
    if(!root) {
        return result
    }
    while(queue.length) {
        const resNow = []
        const {length} = queue
        for(let i = 0; i < length; i++) {
            const {val, left, right} = queue[i]
            resNow.push(val)
            if(left) {
                queue.push(left)
            }
            if(right) {
                queue.push(right)
            }
        }
        queue = queue.slice(length)
        result.push(resNow)
    }
    return result
};
// Recursive
function helper(result, {val, left, right}, level) {
    if(!result[level]) {
        result[level] = []
    }
    result[level].push(val)
    if(left) {
        helper(result, left, level+1)
    }
    if(right) {
        helper(result, right, level+1)
    }
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    if(!root) {
        return result
    }
    helper(result, root, 0)
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
function helper(result, {val, left, right}, level) {
    if(!result[level]) {
        result[level] = []
    }
    result[level].push(val)
    if(left) {
        helper(result, left, level+1)
    }
    if(right) {
        helper(result, right, level+1)
    }
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    if(!root) {
        return result
    }
    helper(result, root, 0)
    return result
};
// @lc code=end

