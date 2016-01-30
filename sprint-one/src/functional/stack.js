var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = 0;

  // Implement the methods below
  someInstance.push = function(value){
    end += 1;
    storage[end] = value;
  };

  someInstance.pop = function(){
    if(end > 0){
      var temp = storage[end];
      delete storage[end];
      end -=1;
      return temp;
    }
  };

  someInstance.size = function(){
    return end;
  };

  return someInstance;
};
