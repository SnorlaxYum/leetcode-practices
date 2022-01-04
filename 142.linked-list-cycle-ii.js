/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */
// 1. slower and faster
// https://leetcode.com/problems/linked-list-cycle-ii/discuss/44781/Concise-O(n)-solution-by-using-C%2B%2B-with-Detailed-Alogrithm-Description
// l - the cycle
// k - the distance between entry of the cycle and the meeting point
// m - the distance between meeting point and the entry of the linked list
// Dist_p = m + P * l + k
// Dist_q = m + q * l + k
// Dist_p = 2 * Dist_q => m = (p-2q)l-k
// 12:00 at https://www.youtube.com/watch?v=LUm2ABqAs1w
var detectCycle = function(head) {
    let slow = head
    let fast = head

    while(slow?.next && fast?.next?.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            break
        }
    }

    if(!slow?.next || !fast?.next?.next) {
        return null
    }

    fast = head

    while(slow && fast && slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
};
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head

    while(slow?.next && fast?.next?.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            break
        }
    }

    if(!slow?.next || !fast?.next?.next) {
        return null
    }

    fast = head

    while(slow && fast && slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
};
// @lc code=end

