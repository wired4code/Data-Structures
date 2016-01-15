

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.tracker = 0;
};

var graph = new Graph();
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var vertice = {};
  vertice.value = node;
  vertice.edges = [];
  this.tracker++;
  this[this.tracker] = vertice;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for(var key in this){
    if(this[key].value === node){
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  for(var key in this){
    if(this[key].value === node){
      delete this[key];
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var key in this){
    if(this[key].value === fromNode){
      var from = this[key];
    }
  }

  for(var key in this){
    if(this[key].value === toNode){
      var to = this[key];
    }
  }
  for(var i = 0; i < to.edges.length; i++){
    if(to.edges[i] === from){
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  for(var key in this){
    if(this[key].value === fromNode){
      var from = this[key];
    }
  }
  for(var key in this){
    if(this[key].value === toNode){
      var to = this[key];
    }
  }
  from.edges.push(to);
  to.edges.push(from);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.hasEdge(fromNode, toNode)){

    for(var key in this){
      if(this[key].value === fromNode){
          var from = this[key];
      }
    }
    for(var key in this){
      if(this[key].value === toNode){
        var to = this[key];
      }
    }

    for(var i = 0; i < from.edges.length; i++){
      if(from.edges[i] === to){
        from.edges.splice(from.edges[i], 1);
      }
    }

    for(var i = 0; i < to.edges.length; i++){
      if(to.edges[i] === from){
        to.edges.splice(to.edges[i], 1);
      }
    }
    return false;
    }

  return true;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this){
    if(typeof this[key] === "object"){
      cb(this[key].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



