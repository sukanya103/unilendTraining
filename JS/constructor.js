// function constructor
function User(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return "My name is " + this.name + " my age is" + this.age;
  };
}

var user1 = new User('anil' , 20);
console.log(user1);
console.log((user1.getName()));

// Class construstor

class demo {
  name = "";
  constructor(name) {
    this.name = name;
  }
  getName= function(age){
    return 'Name: '+this.name +'age:' +age;
  }
}

var user2 = new demo('anil');
var msg =user2.getName(20)

// console.log(msg);
