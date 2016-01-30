var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);

    if(list.head === null && list.tail === null){
      list.tail = node;
      list.head = node;
    }
    var currentTail = list.tail;
    list.tail = node;
    currentTail.next = list.tail;

  };

  list.removeHead = function(){

    var currentHead = list.head;
    var newHead = list.head.next;
    delete list.head;
    list.head = newHead;
    return currentHead.value;

  };

  list.contains = function(target){
    var result = false;

    var search = function(node){
      if(node.value === target){
        result = true;
      }
      if(node.next){
        search(node.next);
      }
    }
    search(list.head);
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
