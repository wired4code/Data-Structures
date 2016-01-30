var BinarySearchTree = function(value, left, right){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value){
  var node = BinarySearchTree(value);
  var current = this;

  while(current){
    if(node.value < current.value){
      if(current.left){
        current = current.left;
      } else{
        current.left = node;
        break;
      }
    }
    if(node.value > current.value){
      if(current.right){
        current = current.right;
      } else{
        current.right = node;
        break;
      }
    }

  }


};

BinarySearchTree.prototype.contains = function(value){

  var result = false;

  var searchTree = function(node){
    if(node.value === value){
      result = true;

    } else{

      if(node.value > value){
        if(node.left === null){
          return;
        }
        searchTree(node.left);
      }

      else if(node.value < value){
        if(node.right === null){
          return;
        }
        searchTree(node.right);
      }

    }
  }

  searchTree(this);

  return result;

};

BinarySearchTree.prototype.depthFirstLog = function(cb){

    var searchTree = function(node, cb){
      cb(node.value);
      if(node.left){
        searchTree(node.left, cb);
      }
      if(node.right){
        searchTree(node.right, cb);
      }
    };

  searchTree(this, cb);

};

BinarySearchTree.prototype.breadthFirstLog = function(cb){

  var nodeQueue = [this];
  var values = [this.value];

  while(nodeQueue.length){
    var current = nodeQueue.shift();
    if(current.left){
      nodeQueue.push(current.left)
      values.push(current.left.value);
    }
    if(current.right){
      nodeQueue.push(current.right);
      values.push(current.right.value);
    }
  }

  for(var i = 0; i < values.length; i++){
    cb(values[i]);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 * insert: logarithmic
 * contains: logarithmic
 * depthFirstLog: linear;
 * breadthFirstLog: linear;
 */
