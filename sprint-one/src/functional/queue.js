var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
 
    if (count > 0 ) {
      var first = storage[0];  
      delete storage[0];
      
      count = count > 0 ? count - 1 : 0; 
      
      var dequeued = {};

      for (var index in storage) {
        dequeued[index - 1] = storage[index];      
      }
      
      storage = dequeued;
    }
    return first;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
