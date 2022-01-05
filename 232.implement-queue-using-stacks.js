/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
    this.stack = []
    this.backStack = []
    this.reversed = false
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    console.log('push', this.reversed)
    if(this.reversed) {
        // this.stack.unshift(x)
        while(this.stack.length > 0) {
            this.backStack.push(this.stack.pop())
        }
        this.backStack.push(x);
        [this.stack, this.backStack] = [this.backStack, this.stack];
        this.reversed = !this.reversed;
    } else {
        this.stack.push(x)
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    console.log('pop', this.reversed)
    if(this.reversed) {
        return this.stack.pop()
    }
    while(this.stack.length > 1) {
        this.backStack.push(this.stack.pop())
    }
    let result = this.stack.pop();
    [this.stack, this.backStack] = [this.backStack, this.stack];
    this.reversed = !this.reversed;
    return result
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.reversed) {
        return this.stack[this.stack.length-1]
    }
    while(this.stack.length > 0) {
        this.backStack.push(this.stack.pop())
    }
    let result = this.backStack[this.backStack.length-1];
    [this.stack, this.backStack] = [this.backStack, this.stack];
    this.reversed = !this.reversed
    console.log(this.reversed, this.stack)
    return result
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

