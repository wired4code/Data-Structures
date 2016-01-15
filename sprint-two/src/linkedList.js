var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var obj = new Node(value);
    if(list.head === null && list.tail === null){
      list.head = obj;
      list.tail = obj;
    } else {
        var temp = list.tail;
        list.tail = obj;
        list.tail.last = temp;

        if(list.head.next === null){
          list.head.next = obj;
        }
        temp.next = list.tail;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;

  };

  list.contains = function(target){
    if(list.head !== null && list.tail !== null){
      var current = list.head;
      while(current.next){
        if(current.value === target){
          return true;
        }
        current = current.next;
      }
      if(current.value === target){
          return true;
      }
    }
      return false;
  };

  list.addToHead = function(value){
    var obj = new Node(value);
    var temp = list.head;
    list.head = obj;
    temp.last = list.head;
    list.head.next = temp;
  }

  list.removeTail = function(value){

    var temp = list.tail.value;
    list.tail = list.tail.last;
    console.log(list.tail.last);
    return temp;
  }

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.last = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
