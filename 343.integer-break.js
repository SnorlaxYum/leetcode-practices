/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */
// 1. dp
// https://leetcode.com/problems/integer-break/discuss/370573/4-different-solutions-with-thorough-explanations-in-C%2B%2B-100!
var integerBreak = function(n) {
    const dp = Array(n+1).fill(1)
    if(n <= 3) {
        return n-1
    }
    for(let i = 3; i <= n; i++) {
      for(let j = 1; j < i; j++) {
          dp[i] = Math.max(dp[i], Math.max(dp[j]*dp[i-j], dp[j]*(i-j), j*(i-j)))
          
      }
    }
    return dp[n]
  };
// 2. math
// https://leetcode.com/problems/integer-break/discuss/370573/4-different-solutions-with-thorough-explanations-in-C%2B%2B-100!
var integerBreak = function(n) {
    if(n <= 3) {
      return n-1
    } else if(n % 3 === 2) {
      return 3 ** Math.floor(n/3) * 2
    } else if(n % 3 === 1) {
      return 3 ** Math.floor(n/3 - 1) * 4
    }
    return 3 ** (n/3)
    
  };
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if(n <= 3) {
    return n-1
  } else if(n % 3 === 2) {
    return 3 ** Math.floor(n/3) * 2
  } else if(n % 3 === 1) {
    return 3 ** Math.floor(n/3 - 1) * 4
  }
  return 3 ** (n/3)
  
};
// @lc code=end

