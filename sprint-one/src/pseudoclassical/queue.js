var Queue = function() {
  this.start = 0;
  this.next = 0;
};

Queue.prototype.enqueue = function(value){
  this.next++;
  this[this.next] = value;
};

Queue.prototype.dequeue = function(){
  if(this.size()){
    this.start++;
    var temp = this[this.start];
    delete this[this.start];
    return temp;
  }
};

Queue.prototype.size = function(){
  return this.next - this.start;
};


