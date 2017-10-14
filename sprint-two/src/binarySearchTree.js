var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

// create an empty object bst methods
var bstMethods = {};

// insert , takes  a val arg
//  if val is less than node val
//    assign left
//  else if val is greater than node value
//    assign right

bstMethods.insert = function (value) {
  if ( value < this.value ) {
    if ( this.left === null ) {
      this.left = new Node(value);
    } else {
      // recursive call to insert method for left child
      this.left.insert(value); 
    }
  } else if ( value > this.value ) {
    if ( this.right === null ) {
      this.right = new Node(value);      
    } else {
      // recursive call to insert mtheod for right child
      this.right.insert(value);
    }
  }
};



bstMethods.contains = function (target, node) {
  // is the current value the target?
    // yes: return true
    // no: is the target less than the current value?
      // yes: does the left node exist? 
        // yes: start over at left node
        // no: return false
      // no: does the right node exist? 
        // yes: start over at right node
        // no: return false
  
  node = node || this;
  if ( target === node.value ) {
    return true;
  }
  
  
  if ( target < node.value ) {
    if ( node.left ) {
      return node.left.contains(target, node.left);
    }
    return false;
  } 
  
  if ( target > node.value ) {
    if ( node.right ) {
      return node.right.contains(target, node.right);
    }
    return false;
  }
  
};

bstMethods.depthFirstLog = function (fn, node) {  
  // does left exist (not null)
  //    yes: call depth first log on left node 
  //    no: ignore it
  // does right exist (not null)
  //   yes : call depth first log on ride node,
  //   no :  ignore it
  // call cb function on node.value
  
  node = node || this;
    
  fn(node.value);
  
  if ( node.left ) {
    
    node.left.depthFirstLog(fn, node.left);
  }
  if ( node.right ) {
    node.right.depthFirstLog(fn, node.right);
  }
  
};
  


/*
 * Complexity: What is the time complexity of the above functions?
  depthFirstLog: O(log n);
  contains: O(log n)
  insert: O(log n)
 
 */
