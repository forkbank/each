describe('each', function(){
  it('each function', function(){
    expect(each).toBeTruthy();
  })

  describe('each object', function(){
    var object = {
      o: "video",
      p: "picture",
    };
    

    it('each object',function(){
      each(object,function(){})
    })

    it('each object prop',function(){
      var empty = [];
      each(object, function(prop){
        empty.push(prop);
      });
      expect(empty).toEqual(['o','p'])
    })

    it('each object prop, value',function(){

    })
  })

  describe('each array', function(){
    var array = ['a','b','c'];

    it('each array',function(){
      expect(each(array, function(){})).toBe(undefined);
    })

    it('each array value',function(){
      var empty = [];
      each(array, function(value){
        empty.push(value);
      })
      expect(empty).toEqual(array);
    })

    it('each array value, index',function(){
      var empty = [];
      each(array, function(value, index){
        empty.push([value,index]);
      })
      expect(empty).toEqual([['a',0],['b',1],['c',2]]);
    })
  })

  describe('each like array', function(){
    var likeArray = {0:'video',1:'picture',length:2};

    it('each like array',function(){

    })

    it('each like array value',function(){

    })

    it('each like array value, index',function(){

    })
  })

  // it('each array', function(){

  // })

  // it('each have length', function(){
    
  // })
})