var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var obj = {};
  extend(obj, queueMethods);
  return obj;
};

var queueMethods = {

  counter: 0,

  enqueue: function(value){
    this.counter++;
    this[this.counter] = value;
  },

  dequeue: function(){
    if(this.counter){
      this.counter--;
    }
    var temp = this[1];
    delete this[1];

    for(var i = 1; i <= this.counter; i++){
      this[i] = this[i+1];
    }

    return temp;
  },

  size: function(){
    return this.counter;
  }

};

var extend = function(to, from){
  for(var key in from){
    to[key] = from[key];
  }
}
