/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
// 1. recursive
var reverseList = function(head) {
    if(!head) {
        return
    }
    function helper(head) {
        if(!head) {
            return
        }
        let res = reverseList(head.next) || head
        if(head.next) {
            head.next.next = head
        }
        return res
    }
    let final = helper(head)
    head.next = null
    return final
};
// 1. recursive (improved, 2 pointer)
// thanks to https://leetcode.com/problems/reverse-linked-list/discuss/58127/Python-Iterative-and-Recursive-Solution
var reverseList = function(head) {
    function helper(cur, prev=null) {
        if(!cur) {
            return prev
        }
        let next = cur.next
        cur.next = prev
        return helper(next, cur)
    }
    return helper(head)
};
// 2. iteration
var reverseList = function(head) {
    if(!head) {
        return head
    }
    let prev = head
    let cur = head.next

    while(prev && cur) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    head.next = null

    return prev
};
// 2. iteration (improved)
// thanks to https://leetcode.com/problems/reverse-linked-list/discuss/58127/Python-Iterative-and-Recursive-Solution
var reverseList = function(head) {
    let prev = null

    while(head) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
};
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null

    while(head) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
};
// @lc code=end

