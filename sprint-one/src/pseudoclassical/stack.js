var Stack = function() {

  // tracking a start property is not necessary for stack
  this.end = 0;

};

Stack.prototype.push = function(value){
  this.end++;
  this[this.end] = value;
};

Stack.prototype.pop = function(){
  if(this.size()){
    var temp = this[this.end];
    delete this[this.end];
    this.end --;
    return temp;
  }
};

Stack.prototype.size = function(){

  return this.end;

};


