var BinarySearchTree = function(value){
  var obj = Object.create(Bstmethods);
  obj.value = value;
  obj.left=null;
  obj.right=null;
  return obj

};

var Bstmethods = {};

Bstmethods.insert = function(value){
  var current = this;
  var node = new createNode(value, null, null);

  while(current){
    if(value < current.value){
      if(current.left){
        current = current.left;
      } else {
        current.left = node;
        break;
      }
    } else {
      if(current.right){
        current = current.right;
      } else {
        current.right = node;
        break;
      }
    }
  }

}


Bstmethods.contains = function(value){
  var current = this;
  while(current){
    if(current.value === value){
      return true;
    } else{
      if(current.value > value){
        current = current.left;
      }else{
        current = current.right;
      }
    }
  }
  return false;
};

Bstmethods.depthFirstLog = function(cb, node){

  node = node || this;
  cb(node.value);
  if(node.left){
    this.depthFirstLog(cb, node.left);
  }
  if(node.right){
    this.depthFirstLog(cb, node.right);
  }

};

var createNode = function(value, left, right){
  this.value = value;
  this.left = left;
  this.right = right;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
