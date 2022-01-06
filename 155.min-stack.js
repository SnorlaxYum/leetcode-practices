/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function() {
    this.stack = []
    this.minStack = []
    this.minNum = null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(typeof this.minNum === "object" || typeof this.minNum === "number" && val <= this.minNum) {
        this.minNum = val
        this.minStack.push(val)
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let result = this.stack.pop()
    if(this.minNum === result) {
        this.minStack.pop()
        this.minNum = typeof this.minStack[this.minStack.length-1] === "number" ? this.minStack[this.minStack.length-1] : null
    }
    return result
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minNum
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

