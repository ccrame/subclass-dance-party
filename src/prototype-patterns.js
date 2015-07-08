var name = function(params){
  var obj = {};

  return obj;
};

//PREVIOUS
//**************************************
//CURRENT

var Person = function(name){
  this.name = name;
};

Person.prototype.sayName = function(){ //says name
  console.log('my name is ' + this.name);
};

var John = new Person('John');
John.sayName();

//***********************




