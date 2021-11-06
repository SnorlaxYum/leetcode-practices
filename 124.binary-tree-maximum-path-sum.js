/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 */
// 1. recursive (dfs)
// https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/603423/Python-Recursion-stack-thinking-process-diagram
var maxPathSum = function(root) {
    let result = root.val

    helper(root)

    function helper(node) {
        if(!node) {
            return 0
        }
        const {left, right, val} = node
        let leftSum = 0, rightSum = 0
        leftSum = Math.max(helper(left, 0), 0)
        rightSum = Math.max(helper(right, 0), 0)

        const curSum = val + leftSum + rightSum

        if(curSum > result) {
            result = curSum
        }
        return val + Math.max(leftSum, rightSum)
    }

    return result
};
// 2. iterative (bfs)
// https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/278525/Python-iterative-solution
var maxPathSum = function(root) {
    let result = root.val
    let stack = [], last, sums = new Map()
    
    function getNum(node) {
        return sums.get(node) || 0
    }

    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        let node = stack[stack.length-1]
        if(node.right && last !== node.right) {
            root = node.right
        } else {
            node = stack.pop()
            last = node
            let curSum = Math.max(getNum(node.left), getNum(node.right))+node.val
            sums.set(node, Math.max(curSum, 0))
            result = Math.max(result, getNum(node.left)+getNum(node.right)+node.val)
            root = null
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let result = root.val
    let stack = [], last, sums = new Map()
    
    function getNum(node) {
        return sums.get(node) || 0
    }

    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        let node = stack[stack.length-1]
        if(node.right && last !== node.right) {
            root = node.right
        } else {
            node = stack.pop()
            last = node
            let curSum = Math.max(getNum(node.left), getNum(node.right))+node.val
            sums.set(node, Math.max(curSum, 0))
            result = Math.max(result, getNum(node.left)+getNum(node.right)+node.val)
            root = null
        }
    }

    return result
};
// @lc code=end

