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
//3. no hashmap (insert copy behind)
// https://leetcode.com/problems/copy-list-with-random-pointer/discuss/43497/2-clean-C%2B%2B-algorithms-without-using-extra-arrayhash-table.-Algorithms-are-explained-step-by-step.
var copyRandomList = function(head) {
    if(!head) {
        return head
    }
    let l1 = head
    let l2
    while(l1) {
        l2 = l1.next
        l1.next = new Node(l1.val)
        l1.next.next = l2
        l1 = l2
    }
    let final_head = head.next

    for(l1 = head; l1; l1 = l1.next.next) {
        if(l1.random) {
            l1.next.random = l1.random.next
        }
    }
    
    for(l1 = head; l1; l1 = l1.next) {
        l2 = l1.next
        if(l2) {
            l1.next = l2.next
        }
        
        if(l2?.next) {
            l2.next = l2.next.next
        }
    }

    return final_head
};
// 4. no hashmap (random and next exchanged)
// https://leetcode.com/problems/copy-list-with-random-pointer/discuss/43497/2-clean-C%2B%2B-algorithms-without-using-extra-arrayhash-table.-Algorithms-are-explained-step-by-step.
var copyRandomList = function(head) {
    if(!head) {
        return head
    }
    let l1, l2
    for(l1 = head; l1; l1 = l1.next) {
        l2 = new Node(l1.val)
        l2.next = l1.random
        l1.random = l2
    }
    for(l1 = head; l1; l1 = l1.next) {
        l2 = l1.random
        l2.random = l2.next?.random || null
    }
    let res = head.random
    for(l1 = head; l1; l1 = l1.next) {
        l2 = l1.random
        l1.random = l2.next
        l2.next = l1.next?.random || null
    }
    return res
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
    let l1, l2
    for(l1 = head; l1; l1 = l1.next) {
        l2 = new Node(l1.val)
        l2.next = l1.random
        l1.random = l2
    }
    for(l1 = head; l1; l1 = l1.next) {
        l2 = l1.random
        l2.random = l2.next?.random || null
    }
    let res = head.random
    for(l1 = head; l1; l1 = l1.next) {
        l2 = l1.random
        l1.random = l2.next
        l2.next = l1.next?.random || null
    }
    return res
};
// @lc code=end

