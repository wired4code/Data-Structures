var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  //var found = false;

  if(!bucket){
    bucket = [];
    this._storage.set(i, bucket);
    bucket.push([k,v]);
  } else {

    for(var j = 0; j < bucket.length; j++){
      if(bucket[j][0] === k){
        bucket[j][1] = v;
      } else {
        bucket.push([k,v]);
      }
    }
  }

  //console.log(bucket);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      return bucket[j][1];
    }
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      bucket[j][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

