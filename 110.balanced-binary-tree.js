/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */
// 1. recursive - myself
var isBalanced = function(root) {
    function helper(node, level) {
        if(!node) {
            return [level, true]
        }
        let [leftLevel, leftBalanced] = helper(node.left, level+1)
        let [rightLevel, rightBalanced] = helper(node.right, level+1)
        return [Math.max(leftLevel, rightLevel), leftBalanced && rightBalanced && Math.abs(leftLevel-rightLevel) <=1]
    }
    return helper(root, 1)[1]
};

// 1. recursive - improved ver
// https://leetcode.com/problems/balanced-binary-tree/discuss/35708/VERY-SIMPLE-Python-solutions-(iterative-and-recursive)-both-beat-90
var isBalanced = function(root) {
    function helper(node) {
        if(!node) {
            return 0
        }
        let leftLevel = helper(node.left)
        let rightLevel = helper(node.right)

        if(leftLevel === -1 || rightLevel === -1 || Math.abs(leftLevel - rightLevel) > 1) {
            return -1
        }

        return Math.max(leftLevel, rightLevel)+1
    }
    return helper(root) !== -1
};

// 2. iterative
// https://leetcode.com/problems/balanced-binary-tree/discuss/35708/VERY-SIMPLE-Python-solutions-(iterative-and-recursive)-both-beat-90
var isBalanced = function(root) {
    let stack = [], last = null, depths = new Map()
    while(stack.length || root) {
        if(root) {
            stack.push(root)
            last = root
            root = root.left
        } else {
            root = stack[stack.length-1]
            if(!root.right || last === root.right) {
                root = stack.pop()
                let [leftD, rightD] = [depths.get(root.left)||0, depths.get(root.right)||0]
                if(Math.abs(leftD-rightD) > 1) {
                    return false
                }
                depths.set(root, Math.max(leftD, rightD)+1)
                last = root
                root = null
            } else {
                root = root.right
            }
        }
    }
    return true
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function helper(node) {
        if(!node) {
            return 0
        }
        let leftLevel = helper(node.left)
        let rightLevel = helper(node.right)

        if(leftLevel === -1 || rightLevel === -1 || Math.abs(leftLevel - rightLevel) > 1) {
            return -1
        }

        return Math.max(leftLevel, rightLevel)+1
    }
    return helper(root) !== -1
};
// @lc code=end

