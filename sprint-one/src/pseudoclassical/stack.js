// create an instance of Stack (constructor function)
//i- none
//o- output is an object of the stack class
//se- append a stack object to memory

// intatiate a count property
// instatiate a 

var Stack = function() {
  this.count = 0;
  this.storage = {};
};

// create a method on the stack prototype that references count property
// return value at count property

Stack.prototype.size = function () {
  return this.count;
};

// create a method on stack proto called push that appends data to storage of the focal object
// assign focal object storage at index of count, the value
// increment focal object count


Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};


// create method on stack proto called pop that removes data from focal object
// take no params
//
// if count is greater than zero
//   
//   remove storage value located at count index
//   decrement count
// else
//   assign count of focal object to zero
// return deleted item


Stack.prototype.pop = function () {
  if ( this.count > 0 ) {
    delete this.storage[this.count];
    this.count--;
  } else {
    this.count = 0;
  }
  return this.storage[this.count];
};
