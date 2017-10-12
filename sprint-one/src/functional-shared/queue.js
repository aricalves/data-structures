var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};
  _.extend(newStack, queueMethods);
  return newStack;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.count;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    var temp = {};
    var dequeued = this.storage[0];
    delete this.storage[0];
    this.count--;
    for (var key in this.storage) {
      temp[key - 1] = this.storage[key];
    }
    this.storage = temp;
  } else {
    this.count = 0;
  }
  return dequeued;
};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
