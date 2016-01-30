var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set.counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.counter++;
  this._storage[this.counter] = item;
};

setPrototype.contains = function(item){
  for(key in this._storage){
    if(this._storage[key] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for(key in this._storage){
    if(this._storage[key] === item){
      var temp = this._storage[key];
      delete this._storage[key];
      return temp;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add = constant
 * contains = linear;
 * remove = linear;
 */
