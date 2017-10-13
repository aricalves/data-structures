

// Instantiate a new graph
var Graph = function() {

  this.nodes = [];

};

var Node = function (value) {
  this.value = value;
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes.push(new Node(value));
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  // loop through nodes array
  //   if any node contains value
  //      return true
  //   else return false
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].value === target ) {
      return true;
    }   
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  // loop through nodes array
  //  if any nodes contains value 
  //    splice out the node  from the array
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].value === value ) {
      this.nodes.splice(i, 1);
    }   
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop through each node in nodes
  //   pass the cb on each node
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

// search through the nodes and return the target
Graph.prototype.findNode = function (target) {
  //  for each node
  //     if target === node value
  //     return node

  this.forEachNode(function(node) {
    if ( node.value === target ) {
      return this.node;
    }
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var test = new Graph();
test.addNode(33);
var output = test.nodes;
//console.log(output);
test.addNode(77);
var output = test.nodes;
//console.log(output);

var orange = function (node) {
  node.color = 'orange';
};

test.forEachNode(orange);

console.log(output);

var find = test.findNode(33);

console.log(find);
 
 


