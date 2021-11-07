/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 */
// 1. recursive (dfs)
var postorderTraversal = function(root) {
    const result = []
    helper(root)
    return result
    function helper(node) {
        if(!node) {
            return
        }
        helper(node.left)
        helper(node.right)
        result.push(node.val)
    }
};
// 2. iterative (bfs)
// 2.1 state management
// https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/1003772/Simple-One-Stack
var postorderTraversal = function(root) {
    const result = []
    const stack = [[root, false]]
    if(root) {
        while(stack.length) {
            const [node, done] = stack.pop()
            if(done) {
                result.push(node.val)
            } else {
                stack.push([node, true])
                if(node.right) {
                    stack.push([node.right, false])
                }
                if(node.left) {
                    stack.push([node.left, false])
                }
            }
        }
    }  
    return result
};
// 2.2 reverse order
// https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/1038517/Javascript-2-solutions-(Stack-%2B-Recursive)-Easy-to-understand
var postorderTraversal = function(root) {
    const result = []
    const stack = [root]

    if(root) {
        while(stack.length) {
            const node = stack.pop()
            result.push(node.val)
            if(node.left) {
                stack.push(node.left)
            }
            if(node.right) {
                stack.push(node.right)
            }
        }
    }
    
    return result.reverse()
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
var postorderTraversal = function(root) {
    const result = []
    const stack = [root]

    if(root) {
        while(stack.length) {
            const node = stack.pop()
            result.push(node.val)
            if(node.left) {
                stack.push(node.left)
            }
            if(node.right) {
                stack.push(node.right)
            }
        }
    }
    
    return result.reverse()
};
// @lc code=end

