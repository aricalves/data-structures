var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  
  newTree.children = [];
  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  
  // if node exists 
  //   set node to equal node
  // else node equals this
  // if this value equals target
  //   return true
  // else if current node has children
  //   for each child
  //     return contains on each child
  // else return false
  node = node || this;
  if ( this.value === target ) {
    return true;
  } else if ( node.children ) {
    _.each(node.children, function(child) {
      return this.contains(target, child);
    });
  } else {
    return false;
  }
  /*
  return this.value === target || this.children.some(function(child) {
    return child.contains(target);
  });
  */
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
