// create a Queue constructor 
// create a property 'count' that accesses the focal obj 
// create a property 'storage' that accesses the focal obj, an empty obj

var Queue = function() {
  this.count = 0;
  this.storage = {};
};

// create a method on the Queue prototype 'size' 
// 'size' returns the focal objects count property
Queue.prototype.size = function() {
  return this.count;
};
// create a method 'enqueue' on the Queue prototype
// 'enqueue' takes a 'value' argument
//    prepend the value to the focal object's storage property
//    increment the focal object count
Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

// create a method 'dequeue' on the Queue prototype
// 'dequeue' takes no args
//   if the focal object's 'count' > 0
//     assign 'dequeued' var to storage[0] of focal object
//     create a temp object
//     delete the value at the focal obj's 'storage' porperty's first index
//     decrement the focal obj 'count'
//     iterate over focal obj's storage
//       append to temp at index - 1, the value of focal object's 'storage' property at index
//     assign focal object's storage prop to the temp object
//     return 'dequeued'
//   else 
//     set focal object's count to zero

Queue.prototype.dequeue = function () {
  if ( this.count > 0 ) {
    var first = this.storage[0];
    var temp = {};
    delete this.storage[0];
    this.count--;
    for (var i in this.storage) {
      temp[i - 1] = this.storage[i];
    }
    this.storage = temp;
    return first;
  } else {
    this.count = 0;
  }
};