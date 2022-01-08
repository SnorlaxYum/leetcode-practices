/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */
// 1. recursive
var copyRandomList = function(head) {
    const copies = new Map()
    function helper(head) {
        if(!head) {
            return null
        }
        let res
        if(copies.has(head)) {
            res = copies.get(head)
        } else {
            res = new Node(head.val)
            copies.set(head, res)
            res.next = copies.get(head.next) || helper(head.next)
            res.random = copies.get(head.random) || helper(head.random)
        }
        return res
    }
    return helper(head)
};
// 2. iterative
var copyRandomList = function(head) {
    if(!head) {
        return head
    }
    const copies = new Map()
    let m = head
    while(m) {
        copies.set(m, new Node(m.val))
        m = m.next
    }
    m = head
    while(m) {
        let copied = copies.get(m)
        copied.next = copies.get(m.next) || null
        copied.random = copies.get(m.random) || null
        m = m.next
    }
    return copies.get(head)
};
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) {
        return head
    }
    const copies = new Map()
    let m = head
    while(m) {
        copies.set(m, new Node(m.val))
        m = m.next
    }
    m = head
    while(m) {
        let copied = copies.get(m)
        copied.next = copies.get(m.next) || null
        copied.random = copies.get(m.random) || null
        m = m.next
    }
    return copies.get(head)
};
// @lc code=end

