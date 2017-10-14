var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // append a new node to the node list  
    // condition for empty list
    if ( list.head === null && list.tail === null ) {
      var first = Node(value);
      list.head = first;
      list.tail = first;
    // condition for head is equal to tail
    } else if ( list.head.next === null ) {
      //assign head.next to head.tail
      var next = Node(value);
      list.tail = next;
      list.head.next = next;
    } else {
      // condition for list with > 0 values
      list.tail = Node(value);
    }
    
  };

  list.removeHead = function() {
    // store the value of the obj to be removed
    var removed = list.head.value;
    // remove the list head
    list.head = list.head.next;
    // return the value of the removed obj
    return removed;
  };

  list.contains = function(target, currentNode) {
    // if nodes exist
    if (list.head) {
      currentNode = currentNode || list.head;
      // does head.value === target?
      if (currentNode.value === target) {
        // if yes, return true
        return true;
      } else if (currentNode.next) {
        //return list.contains(node.next);
        return list.contains(target, currentNode.next);
      } else {
        return false;
      }
    }
  };

  return list;
};


var Node = function(value) {
  var node = Object.create(bstMethods);

  node.value = value;
  node.next = null;
  node.left = null;
  node.right = null;
  

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 addToTail: O(1)
 
 removeHead: O(1)
 
 contains: O(n)
 
 Node & LinkedList: O(1)
 
 */

