// 通过它，你可以遍历对象、数组的属性值并进行处理。
// array
// boolean
// date
// error
// function
// number
// object
// string
// object
// undefined
// null
// symbol
function type(obj){
  var result = Object.prototype.toString.call(obj).replace(/\[object /,'').replace(']','').toLowerCase();
  if(result === 'object' && !obj){
    return obj === null  ? 'null' : 'undefined';
  }else{
    return result;
  }
}

function each(obj, fn){
  switch(type(obj)){
    case 'array':
      return _array(obj, fn);
    case 'object':
      return _object(obj, fn);
  }
  // _array(obj, fn);
  _object(obj, fn)
}

var has = Object.prototype.hasOwnProperty;

function _object(obj, fn){
  for(var prop in obj){
    if(has.call(obj, prop)){
      fn.call(this, prop, obj[prop])
    }
  }
}

function _array(array, fn){
  for(var i=0; i<array.length; i++){
    fn.call(this, array[i], i)
  }
}

function _linkArray(linkArray){

}