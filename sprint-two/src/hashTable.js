

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var targetFound = false;

  if (bucket === undefined) {
    var _bucket = [];
    _bucket.push([k, v]);
    this._storage.set(index, _bucket);
  }

  // thank you, Fred
  bucket = bucket || _bucket;

  // walk through the bucket
  for (var i = 0; i < bucket.length; i++) { 
    var tuple = bucket[i];

    // checks if the given key is present in bucket
    if ( tuple[0] === k ) {
      // if so, reassign the key to the new value
      tuple[1] = v;
      targetFound = true;
    }
  }
  // if no key found
  if (!targetFound) {
    // set a new tuple in bucket
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      return tuple[1];
    }
  }
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      bucket.splice(i, 1);
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 remove: O(1)
 retrieve: O(1)
 
 */


