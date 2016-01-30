var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  //set.counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //this.counter++;
  this._storage[item] = true;
};

setPrototype.contains = function(item){
/*  for(key in this._storage){
    if(this._storage[key] === item){
      return true;
    }
  }
  return false;*/

  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  var temp = this._storage[item];
  delete this._storage[item];
  return temp;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add = constant
 * contains = linear;
 * remove = linear;
 */
