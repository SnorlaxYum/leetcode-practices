/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 */
// 1. recursive
var sumNumbers = function(root) {
    let total = 0
    function helper(root, number) {
        if(!root) {
            return
        } else if(!root.left && !root.right) {
            total += Number(number+root.val)
        } else {
            helper(root.left, number+root.val)
            helper(root.right, number+root.val)
        }
    }
    helper(root, '')
    return total
};
// 2. iterative
var sumNumbers = function(root) {
    let total = 0
    let stack = [], last = null, current = ''
    while(stack.length || root) {
        if(root) {
            stack.push(root)
            current += root.val
            root = root.left
        } else {
            root = stack[stack.length-1]
            if(!root.right || last === root.right) {
                if(!root.left && !root.right) {
                    total += Number(current)
                }
                stack.pop()
                current = current.slice(0, current.length-1)
                last = root
                root = null
            } else {
                root = root.right
            }
        }
    }
    return total
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
var sumNumbers = function(root) {
    let total = 0
    let stack = [], last = null, current = ''
    while(stack.length || root) {
        if(root) {
            stack.push(root)
            current += root.val
            root = root.left
        } else {
            root = stack[stack.length-1]
            if(!root.right || last === root.right) {
                if(!root.left && !root.right) {
                    total += Number(current)
                }
                stack.pop()
                current = current.slice(0, current.length-1)
                last = root
                root = null
            } else {
                root = root.right
            }
        }
    }
    return total
};
// @lc code=end

