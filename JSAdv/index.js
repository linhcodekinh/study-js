//js adv
console.log('helloo world');
//hoisting
//var let const
var d = 1;
//let e3 = 2;
//const f = 3;

//khai bao lai
var d = 2;
console.log(d);
//de han che khai bao lai dung let
let e3 = 3;
// final
const f = 3;
//hoisting
function run(){
    console.log(d);
    var d = 1;
    //let a = 1;
}
run();

// block scope
if(true){
    let x =2;
    // const
    //var k tuan thu block scope
}
console.log(x)

// function, global context, bind
// function run(cb){
//   console.log('run...');
//   cb();
// }

// var mouse = {
//   name: 'Mickey',
//   sayHi: function(){
//     console.log(this.name);
//   }
// };
// run(mouse.sayHi.bind(mouse));

var mouse = {
  name: 'Mickey',
  sayHi: function(){
    console.log('Hi, my name is', this.name);
  }
};

//mouse.sayHi();
var say = mouse.sayHi.bind(mouse);
// say = function
say();

//fat arrow
var a = {
  name: 'AAA',
  run: function (){
      //var that = this;
      var run2 = () => {
        //console.log(that.name);
        console.log(this.name);
      }
      //}.bind(this);
      //run2.bind(a)();
      run2();
    }
};

a.run();


//array-like obj
const obj = {
  0: 'thanh',
  1: 'trang',
  2: 'thuy',
  length: 3
};
for(let i = 0; i < obj.length; i++){
  console.log(obj[i]);
}

//template string
// function greeting(name){
//   return `Hi,  ${name} ${1+12} `;
// }

// var result = greeting('linh');
// console.log(result);
//argument
// function sum(){
//   console.log(arguments.length);
//   const numbers = Array.from(arguments);
//   return numbers.reduce(function(sum, num){
//       return sum + num;
//   }, 0);
// }
// sum(1,2,3,4,1,2,31,23,1,23,1);


//call????
function greeting(){
  console.log(`Hi! ${this.name}. I am ${this.age}.`);
}

const cat = {
  name: 'Tom',
  age: '100'
};

greeting.call(cat);
 
//apply
//call: func.call(this, param1, param2, ..);
//apply: func.apply(this, [param1, param2,...]);
function sum(){
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, num) => sum + num, 0);
}

function average(){
  //sum
  const x = sum.apply(null, arguments);
  //sum / arguments.length
  return x/arguments.length;
}

average(1,2,3,4,3,54,52,5,65,2,3);


//enhanced obj literals
// const name = 'Tom';    
// const cat = {
//   name, 
//   run() {
//     console.log(`${this.name} is running` );
//   }
// };
// cat.run();

// //contructor function
// function Mouse(name){
//   this.name = name;
// }

//contructor function
// function Mouse(name){
//   this.name = name;
// }

// Mouse.prototype.run = function(){
//   console.log(`${this.name} is running`);
// }
//class
// class Mouse {
//   constructor(name){
//     this.name = name;
//   }

//   run(){
//     console.log(`${this.name} is running`);
//   }
  
// }

// const mouse1 = new Mouse('Mickey');
// mouse1.run();

//inheritance
// function Animal(name){
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//   console.log('Eating ... ');
// }


// function Bird(name){
//   Animal.apply(this, arguments);
// }
// Bird.prototype = new Animal();


// let anyBird = new Bird("hhaha");
// console.log(anyBird.eat() + " chimchim");
// console.log(anyBird.name);

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return `I have a  ${this.carname}`;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
let myCar = new Model("Ford", "Mustang");
myCar.show();

//rest > cuon vao
//spread > rai ra
const arr = [1,2,3];

function sum(...numbers){ //rest
  return numbers.reduce((a, b) => a + b, 0);
}

sum(...arr); //spread

//value type vs reference type

//clone obj
const obj4 = {
  a: 1,
  b: 2,
  c: 3
};

let obj5 = {};
for(let key in obj4){
  obj5[key] = obj4[key];
}
console.log(obj4, obj5);

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 1
  }
}
//shadow clone
let obj2 = {...obj1};
//deep clone
let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.c.d = 2;
console.log({obj1, obj2, obj3});

//closure
function debug(name){
  return function(str){
    console.log(`[${name}] ${str}`);
  }
}

const loglog = debug('Mouse')('error happened');
//loglog('Error happened');

//higher order functions
//Destructuring
const arr1 = [10, 20, 30, 40, 50];
const [a1,,...b1] = arr1;




const obj6 = {
  q: 1,
  w: 2,
  r: 3
};
const {q, ...w} = obj6;
console.log(q, w);

//single page application ( backbone ember > angular > react > vue)









