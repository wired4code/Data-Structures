var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.end = 0;
  obj.start = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.end++;
  this.storage[this.end] = value;
};

stackMethods.pop = function(){
  if(this.size()){
    var temp = this.storage[this.end];
    delete this.storage[this.end];
    this.end--;
    return temp;
  }
};

stackMethods.size = function(){
  return this.end - this.start;
};


