var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
};


Queue.prototype.enqueue = function(value){
  this.counter++;
  this[this.counter] = value;
};

Queue.prototype.dequeue = function(){
  if(this.counter){
    this.counter--
  }
  var temp = this[1];
  delete this[1];
  for(var i = 1; i <= this.counter; i++){
    this[i] = this[i+1];
  }
  return temp;
};

Queue.prototype.size = function(){
  return this.counter;
}



