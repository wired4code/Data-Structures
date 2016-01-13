var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  extend(obj, stackMethods);
  return obj;

};

var stackMethods = {

  counter: 0,

  push: function(value){
    this.counter += 1;
    this[this.counter] = value;
  },

  pop: function(){


    if(this.counter){
      this.counter--;
      var temp = this[this.counter+1];
      delete this[this.counter+1];
      return temp;
    }

  },

  size: function(){
   return this.counter;
  }

};


var extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  };

}


