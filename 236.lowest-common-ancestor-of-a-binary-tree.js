/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */
// 1.recursion 
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/65225/4-lines-C%2B%2BJavaPythonRuby
var lowestCommonAncestor = function(root, p, q) {
    if([null, p, q].findIndex(m => m === root)+1) {
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    return left ? right ? root : left : right ? right : null
};
// 2. iteration
// recording parents
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/65236/JavaPython-iterative-solution
var lowestCommonAncestor = function(root, p, q) {
    const stack = [root]
    const parent = new WeakMap()
    parent.set(root, null)
    while(stack.length) {
        let node = stack.pop()
        if(node.left) {
            stack.push(node.left)
            parent.set(node.left, node)
        }
        if(node.right) {
            stack.push(node.right)
            parent.set(node.right, node)
        }
    }
    const ans = []
    while(p) {
        ans.push(p)
        p = parent.get(p)
    }
    while(!(ans.findIndex(m => m === q)+1)) {
        q = parent.get(q)
    }
    return q
};
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const stack = [root]
    const parent = new WeakMap()
    parent.set(root, null)
    while(stack.length) {
        let node = stack.pop()
        if(node.left) {
            stack.push(node.left)
            parent.set(node.left, node)
        }
        if(node.right) {
            stack.push(node.right)
            parent.set(node.right, node)
        }
    }
    const ans = []
    while(p) {
        ans.push(p)
        p = parent.get(p)
    }
    while(!(ans.findIndex(m => m === q)+1)) {
        q = parent.get(q)
    }
    return q
};
// @lc code=end

