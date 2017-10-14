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
  // if node value equals target
  //   return true
  // else if node current property has children
  //   for each child
  //     return contains on each child
  // else return false
  
  return this.value === target || this.children.some(function(child) {
    return child.contains(target);
  });
 
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
