

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var target = this._storage.get(index);
  var targetFound = false;
  // if target is not undefined
  if ( target !== undefined ) {
    for (var i = 0; i < target.length; i++) {
      // if target equals key - update key
      if ( target[i][0] === k ) {
        target[i][1] = v;
        targetFound = true;
      }       
    }
    // if no key found - push value
    if ( targetFound === false ) {
      var bucket = [];
      bucket.push([k, v]);
      this._storage.set(index, bucket);
    }
  // will handle target when undefined
  } else {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // access bucket at index
  // for loop inside the bucket
  //   look for k
  //   if k is found
  //   return v
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if ( bucket[i][0] === k ) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, undefined);
  //  access the bucket
  //  loop through the bucket keys
  //    if key  equals k
  //      splice method on bucket to remove the key 
  //   (leave the bucket)
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if ( bucket[i][0] === k ) {
      bucket.splice(i, 1);
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


