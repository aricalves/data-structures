var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create new instance of queue
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  // create storage obj
  newQueue.storage = {};
  //return that new instance of queue
  return newQueue;
};

var queueMethods = {};


// create stack method, no args
//i- a queue object
//o- the value of size property in an instance of queue obj

// instantiate a count property within an instance of queue obj
// return the count

queueMethods.size = function () {
  return this.count;
};


// create push method, enqueue 
// i- a value (to be appended) 
// o- no outputs, 
// se- append a value to queue

// declare a method enqueue 
// assign it to a function
// within function
// append value to focal object, storage queue
// increment this.count

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};


// create dequeue method
// i- none
// o- none
// se- remove first value in obj and decrement count

// declare a pop method on the queueMethods object
// assign it to a function
// if the count is greater than zero
//   assign first value of storage obj to a variable
//   delete first value in storage
//   decrement the count
//   create a new obj called temp
//   loop through storage obj   
//     append to temp index - 1 the value at storage index
//   assign to storage the value of temp obj
//   return the deleted value
// else
//   assign count to zero

queueMethods.dequeue = function () {
  if ( this.count > 0 ) {
    var firstValue = this.storage[0];
    delete this.storage[0];
    this.count--;
    var temp = {};
    for (var i in this.storage) {
      temp[this.count - 1] = this.storage[this.count];
    }
    this.storage = temp;
    return firstValue;
  } else {
    this.count = 0;
  }
};


