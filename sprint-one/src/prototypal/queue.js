var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  return obj;
};

var queueMethods = {

  counter: 0,

  enqueue: function(val){
    this.counter++;
    this[this.counter] = val;
  },

  dequeue: function(){
    if(this.counter){
      this.counter--
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


