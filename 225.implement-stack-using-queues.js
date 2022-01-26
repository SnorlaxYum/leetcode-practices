/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

var MyStack = function() {
    this.stack = []
    this.length = this.stack.length
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack[this.length++] = x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack[this.length-- - 1]
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

