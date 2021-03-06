var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter=0;

  someInstance.enqueue = function(value){
    counter++;
    storage[counter]=value;
  };

  someInstance.dequeue = function(){
    var result=storage[1];
    delete storage[1];
    // i think i should starts at 1
    // and should be just i<counter since we having do count--;
    for(var i=1; i<counter; i++){
      storage[i]=storage[i+1];
    }
    if(counter){
      counter--;
    }
    return result;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
