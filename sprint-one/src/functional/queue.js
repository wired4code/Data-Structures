var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var counter = 0

  // Implement the methods below

  someInstance.enqueue = function(value){
    counter++
    storage[counter] = value;
  };

  someInstance.dequeue = function(){
    if(someInstance.size()){
      start++
      var temp = storage[start];
      delete storage[start];
      return temp;
    }
  };

  someInstance.size = function(){
    return counter - start;
  };

  return someInstance;
};
