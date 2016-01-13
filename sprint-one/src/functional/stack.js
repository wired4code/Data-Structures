var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var counter=0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function(){
    if(counter){
      counter --;
    }
    var result = storage[counter+1];
    delete storage[counter+1];
    return result;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
