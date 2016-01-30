var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var result = false;

  if(this.value === target){
    result = true;
    return result;
  }

  var searchTree = function(tree){
    _.each(tree.children, function(child){
      if(child.value === target){
        result = true;
      }
      if(child.children){
        searchTree(child);
      }
    });
  }

  searchTree(this)
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild = constant;
 * contains = quadratic;
 */
