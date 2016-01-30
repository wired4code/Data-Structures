

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
};

var graph = new Graph();

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.counter++;
  var vertice = {};
  vertice.value = node;
  vertice.edges = [];
  this[vertice.value] = vertice;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){

  if(node in this){
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){

  var temp = this[node];
  delete this[node];
  return temp;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

  if(this[fromNode].edges.indexOf(toNode) > - 1){
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){

  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){

  this[fromNode].edges.splice(this[fromNode].edges.indexOf(toNode), 1);
  this[toNode].edges.splice(this[toNode].edges.indexOf(fromNode), 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this){
    if(typeof this[key] === 'object'){
      cb(this[key].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode = constant;
 * contains = constant;
 * removeNode = constant;
 * hasEdge = constant;
 * removeEdge = constant;
 * forEachNode = linear;
 */



