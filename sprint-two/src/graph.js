// Instantiate a new graph
var Graph = function(value) {
};
// Add a node to the graph
Graph.prototype.addNode = function(value) {
  this[value] = [];
  // console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  target = JSON.stringify(target);
  var result = false;
  this.forEachNode(function(node) {
    if ( node === target ) {
      result = true;
    }
  });
  return result;  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var valueEdges = this[value];

  //  remove value references from edges
  for (let i = 0; i < valueEdges.length; i++) {
    var edge = valueEdges[i];
    var indexOfRemoveNode = this[edge].indexOf(value);
    this[edge].splice(indexOfRemoveNode, 1);  
  }    
  delete this[value];  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this[fromNode];
  return edges.indexOf( toNode) >= 0;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // for edges in fromNode
  //  if edges hasIndexOf toNode
  //    remove toNode (splice edges at index)
  var fromIndex = this[fromNode].indexOf(toNode);
  var toIndex = this[toNode].indexOf(fromNode);
  if ( fromIndex >= 0 ) {
    this[fromNode].splice(toIndex, 1);
  }
  if ( toIndex >= 0 ) {
    this[toNode].splice(fromIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb, nodes) {
  // loop through each node in nodes
  //   pass the cb on each node
  nodes = nodes || Object.keys(this);
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i], i, nodes);
  }
};




// Complexity: What is the time complexity of the above functions?

//"addNode" -  O(1)
//"contains"  -  O(n)
//"removeNode" - O(n2)
//"addEdge" - O(1)
//"hasEdge" - O(n)
//"removeEdge" - O(n)
//"forEachNode" - O(n)



 
 


