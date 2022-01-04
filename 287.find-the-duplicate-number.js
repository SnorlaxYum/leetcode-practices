/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
// 1. Hashmap
var findDuplicate = function(nums) {
    const hashMap = new Map()
    let res
    for(let i = 0; i < nums.length; i++) {
        if(hashMap.has(nums[i])) {
            res = nums[i]
            break
        }
        hashMap.set(nums[i], 1)
    }
    return res
};
// 2. Pigeonhole Principle And Binary Search
// https://leetcode.com/problems/find-the-duplicate-number/discuss/72844/Two-Solutions-(with-explanation)%3A-O(nlog(n))-and-O(n)-time-O(1)-space-without-changing-the-input-array
var findDuplicate = function(nums) {
    let low = 1
    let high = nums.length-1

    while(low < high) {
        let mid = low + Math.floor((high-low)/2)
        let count = 0

        for(let num of nums) {
            if(num <= mid) {
                count++
            }
        }

        if(count > mid) {
            high = mid
        } else {
            low = mid+1
        }
    }

    return low
};
// 3. Tortoise and cycle
// https://leetcode.com/problems/find-the-duplicate-number/discuss/72846/My-easy-understood-solution-with-O(n)-time-and-O(1)-space-without-modifying-the-array.-With-clear-explanation.
var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[slow]

    // nums is an array with all its member index except 0, so a pair of duplicate indexes exists 

    while(slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    // found the cycle (same or 2-value cycle)
    fast = 0

    while(slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[slow]

    // nums is an array with all its member index except 0, so a pair of duplicate indexes exists 

    while(slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    // found the cycle (same or 2-value cycle)
    fast = 0

    while(slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};
// @lc code=end

