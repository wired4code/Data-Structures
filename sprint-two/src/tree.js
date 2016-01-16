var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	//child is an object
  var newT = Tree(value);
  this.children.push(newT);
  newT.parent = this;

};

treeMethods.removeFromParent = function(value, node){

  node = node || this;

  var targetNode = search(value, node);

  var targetParent = targetNode.parent;

  targetNode.parent = null;
  console.log(targetNode.parent)
  _.each(targetParent.children, function(child){
    if(child === targetNode){
      targetParent.children.splice(child,1);
    }
  })

  function search(value, node){
    node = node || this;

    for(var i = 0; i < node.children.length; i++){

      if(node.children[i].value === value){

        return node.children[i];
      }
      if(node.children[i].children.length){
       search(value, node.children[i]);
      }
    }
  }


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

treeMethods.traverse = function(cb, node){
  node = node || this;

  for(var i = 0; i < node.children.length; i++){
    cb(node.children[i].value);

    if(node.children[i].children){
      this.traverse(cb, node.children[i]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
