var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._num = 0;
};

HashTable.prototype.insert = function(k, v){

  if(this._num/this._limit >= 0.75){
    this._limit*=2;
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i]){
    this._storage[k] = v;
  } else{
    this._storage[i] = v;
  }
  this._num += 1;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[k]){
    return this._storage[k]
  }
  return this._storage[i];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;
  this._num -= 1;
  if(this._num/this._limit < 0.25){
    this._limit *= 0.5;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
