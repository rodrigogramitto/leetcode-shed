// implement a stack that has constant time push, pop, top, and min methods;


// The idea for the solution is that instead of pushing a value in the stack
// we will push a tuple that contains the value and the current minimum.
// When the stack is empty the minimum value is the first value we push.
// After the first element before pushing we will get the last element and
// push in the new value as [value, min between current min and value], guaranteing that
// if we push in a new value or pop a value we can always access the latest min via the second
// position in the tuple [value of element, current minimum value]

var MinStack = function() {
  this.stack = [];
  // this.minStack = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  if (!this.stack.length) {
      this.stack.push([val, val]);
  } else {
      let currMin = this.stack[this.stack.length - 1][1];
      this.stack.push([val, Math.min(val, currMin)]);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1][0]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1][1];
};