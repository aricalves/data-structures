var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++; 
  };

  someInstance.pop = function() {
    delete storage[count];
    count = count > 0 ? count - 1 : 0;
    return storage[count];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
