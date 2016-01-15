var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	//child is an object
  var newT = Tree(value);
  this.children.push(newT);

};

treeMethods.contains = function(target, node){
  node = node || this;
  var temp = false;


    for(var i = 0; i < node.children.length; i++){

      if(node.children[i].value === target){
        return true;
      }
      if(node.children[i].children.length){
// need to return recursive fxn to temp so it can return a value
       temp = node.contains(target, node.children[i]);
       if(temp === true){
       	return true;
       }
      }
    }

  return temp;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
