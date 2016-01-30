var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.start = 0;
  obj.next = 0;
  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.next++;
  this[this.next] = value;

};

queueMethods.dequeue = function(){
  if(this.size()){
    this.start++;
    var temp = this[this.start];
    delete this[this.start];
    return temp;
  }
};

queueMethods.size = function(){
  return this.next - this.start;
};


