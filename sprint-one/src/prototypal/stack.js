var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(stackMethods);
  obj.end = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.end++;
  this[this.end] = value;
};

stackMethods.pop = function(){
  if(this.size()){
    var temp = this[this.end];
    delete this[this.end];
    this.end --;
    return temp;
  }
};

stackMethods.size = function(){
  return this.end;
};


