/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 */
// 1. recursive
var pathSum = function(root, targetSum) {
    const result = []
    function helper(root, targetSum, path) {
        if(!root) {
            return
        }
        path = [...path, root.val]
        if(!root.left && !root.right) {
            if(root.val === targetSum) {
                result.push(path)
            }
            return
        }
        if(root.left) {
            helper(root.left, targetSum-root.val, path)
        }
        if(root.right) {
            helper(root.right, targetSum-root.val, path)
        }
    }
    helper(root, targetSum, [])
    return result
};
// 2. iterative
var pathSum = function(root, targetSum) {
    const result = []
    let stack = [], last = null, sumNow = 0
    while(root || stack.length) {
        if(root) {
            stack.push(root)
            sumNow += root.val
            root = root.left
        } else {
            root = stack[stack.length-1]
            if(!root.right || last === root.right) {
                if(!root.left && !root.right && sumNow === targetSum) {
                    result.push(stack.map(({val}) => val))
                }
                stack.pop()
                sumNow -= root.val
                last = root
                root = null
            } else {
                root = root.right
            }
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = []
    let stack = [], last = null, sumNow = 0
    while(root || stack.length) {
        if(root) {
            stack.push(root)
            sumNow += root.val
            root = root.left
        } else {
            root = stack[stack.length-1]
            if(!root.right || last === root.right) {
                if(!root.left && !root.right && sumNow === targetSum) {
                    result.push(stack.map(({val}) => val))
                }
                stack.pop()
                sumNow -= root.val
                last = root
                root = null
            } else {
                root = root.right
            }
        }
    }
    return result
};
// @lc code=end

