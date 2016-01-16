var BinarySearchTree = function(value){
  var obj = Object.create(Bstmethods);
  obj.value = value;
  obj.left=null;
  obj.right=null;
  obj.counter = 0;
  //obj.level = 0;

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
        //current.counter +=1;
        //if(this.level > current.counter){
        //  this.level+=1;
        //}
      } else {
        current.left = node;
        //current.counter +=1;
        //if(this.level > current.counter){
        //  this.level+=1;
        //}
        break;
      }
    } else {
      if(current.right){
        current = current.right;
        //current.counter+=1;
        //if(this.level > current.counter){
        //  this.level+=1;
        //}
      } else {
        current.right = node;
        //current.counter +=1;
        //if(this.level > current.counter){
        //  this.level+=1;
        //}
        break;
      }
    }
  }
};


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



Bstmethods.breadthFirstLog = function(cb){

  var queue = [this];

  var results = [this.value];

  while(queue.length){

    var temp = queue.shift();

    if(temp.left){
      //console.log(1);
      results.push(temp.left.value);
      queue.push(temp.left);
    }
    if(temp.right){
      results.push(temp.right.value);
      queue.push(temp.right)
    }
  }

  console.log(results);


  _.each(results, function(x){
    cb(x);
  })
};




var createNode = function(value, left, right){
  this.value = value;
  this.left = left;
  this.right = right;
  //this.counter = 0;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
