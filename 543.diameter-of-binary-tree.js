/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */
// 1.1 recursive
var diameterOfBinaryTree = function(root) {
    if(!root) {
        return 0
    }
    function helper(root) {
        if(!root) {
            return -1
        }
        return Math.max(helper(root.left), helper(root.right))+1
    }
    let left = helper(root.left)
    let right = helper(root.right)
    let leftTree = diameterOfBinaryTree(root.left)
    let rightTree = diameterOfBinaryTree(root.right)
    return Math.max(leftTree, rightTree, left+right+2)
};
// 1.2 recursive (better one)
var diameterOfBinaryTree = function(root) {
    let ans = 0
    if(!root) {
        return ans
    }
    function helper(root) {
        if(!root) {
            return -1
        }
        let lh = helper(root.left)
        let rh = helper(root.right)
        ans = Math.max(ans, lh+rh+2)
        return Math.max(lh, rh)+1
    }
    let left = helper(root.left)
    let right = helper(root.right)
    return Math.max(ans, left+right+2)
};
// 2. iterative 
// https://leetcode.com/problems/diameter-of-binary-tree/discuss/1351854/Python-Iterative-solution-40-ms-faster-than-90.06-15.2-MB-less-than-99.95
var diameterOfBinaryTree = function(root) {
    if(!root) {
        return 0
    }
    let stack = [[root, false]]
    let hd = new Map()
    let ans = 0
    while(stack.length) {
        let [node, visited] = stack.pop()
        if(node) {
            if(visited) {
                let lh = 0, rh = 0
                if(node.left) {
                    lh = hd.get(node.left)
                }
                if(node.right) {
                    rh = hd.get(node.right)
                }
                ans = Math.max(ans, lh+rh)
                hd.set(node, Math.max(lh, rh)+1)
            } else {
                stack.push([node, true], [node.left, false], [node.right, false])
            }
        }
    }
    return ans
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
var diameterOfBinaryTree = function(root) {
    if(!root) {
        return 0
    }
    let stack = [[root, false]]
    let hd = new Map()
    let ans = 0
    while(stack.length) {
        let [node, visited] = stack.pop()
        if(node) {
            if(visited) {
                let lh = 0, rh = 0
                if(node.left) {
                    lh = hd.get(node.left)
                }
                if(node.right) {
                    rh = hd.get(node.right)
                }
                ans = Math.max(ans, lh+rh)
                hd.set(node, Math.max(lh, rh)+1)
            } else {
                stack.push([node, true], [node.left, false], [node.right, false])
            }
        }
    }
    return ans
};
// @lc code=end

