var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter=0;
};

Stack.prototype.push = function(value){
  this.counter++;
  this[this.counter] = value;
};

Stack.prototype.pop = function(){
  if(this.counter){
    this.counter--;
  }
  var temp = this[this.counter+1];
  delete this[this.counter+1];
  return temp;
};

Stack.prototype.size = function(){
  return this.counter;
}



