// > < == ===
//for
var employee = [
    {name: 'Linh', age: 25},
    {name: 'Minh', age: 29},
    {name: 'Trinh', age: 20}
  ]
  
  // for(var i=0; i < employee.length; i++){
  //   console.log(employee[i].name);
  // }
  
  
  // for ... of
  // for ... in
  
  // for (var emp of employee){
  //   console.log(emp.name, emp.age);
  // }
  
  var content = '';
  
  for (var emp of employee){
    content += '<li>' + emp.name + '</li>';
  }
  
  var myDog = {
    name: 'Beo',
    age: 10,
    weight: 20
  };
  
  // for(var key in myDog){
  //   console.log(key, myDog[key]);
  // }
  // cac method cua 1 array
  var a = [1, 3, 2];
  var b = [10, 20];
  //var c = a.concat(b); //khong thay doi mang
  var c = 5;
  //a.push(c);// thay doi mang, length
  //var c = a.pop(); // tra ve gia tri cuoi cung trong mang, thay doi mang
  //a.shift();// tra ve gia tri dau tien trong mang, thay doi mang a
  a.unshift(5);//them gia tri vao dau mang, giong push tra ve do dai moi cua mang, thay doi mang
  //function
  function calculateTriangleSquare(a, h){
    return a*h/2;
  };
  calculateTriangleSquare(5,10);
  
  // Dung function nhu tham so (callback)
  var coffeeMachine = {
     makeCoffee: function(onFinish){
       console.log('Making coffee ....');
       onFinish();
     }
  };
  
  var beep = function(){
    console.log('tit tit');
  }
  
  coffeeMachine.makeCoffee(beep);
  coffeeMachine.makeCoffee(function (){
      console.log('bip bip');
  });
  // array.map
  var numbers = [1, 2, 3, 4];
  var squaredNumbers = numbers.map(function(x){
    return x*x;
  });
  squaredNumbers;
  
  var retangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16}
  ];
  var retaglesSquare = retangles.map(function(rec){
    return rec.width * rec.height;
  });
  retaglesSquare;
  
  // array.filter
  var numbers = [1, 2, 3, 4];
  var evenNumbers = numbers.filter(function(x){
    return x % 2 === 0;
  });
  evenNumbers;
  
  //array.find //dung lai o ket qua dau tien tim thay 
  var numbers = [1, 8, 3, 4];
  numbers.find(function(x){
    console.log(x);
    return x % 2 === 0;
  });
  
  //array.reduce
  var numbers = [1, 2, 3, 4];
  numbers.reduce(function(a, b){
    console.log(a, b);
    return a + b;
  });
  
  var orders = [
    {name: 'A', quantity: 2, unitPrice: 100},
    {name: 'B', quantity: 6, unitPrice: 300},
    {name: 'C', quantity: 7, unitPrice: 500}
  ];
  
  orders.reduce(function(sum, item){
    console.log(sum, item);
    return sum + item.quantity * item.unitPrice;
  },0);
  
  //bt
  //reduce
  var items = [
    'Tom', 'Bill', 'Kim'
  ];
  
  var str = items.reduce(function(s, item){
    console.log(s, item);
    return s + '<' + item + '>';
  },'');
  str;
  //map & join
  items.map(function(item){
    return '<' + item + '>';
  }).join('');
  
  '<'+items.join('><')+'>';
  
  //array.sort
  var numberSort = [1, 4, 2, 3];
  var arrSort = numberSort.sort(function(a, b){
    return a - b;
  });
  arrSort;
  
  //math
  Math.random()*5+1;
  
  // `new` keyword
  //object literal key - value
  var mouse = {
    weight : 0.2,
    getWeight: function(){
      return this.weight;
    }
  }
  var mouse2 = { type: 'mouse'};
  //constructor function
  function Mouse(color){
    this.type = 'mouse';
    this.color = color;
  }
  var mouse1 = new Mouse('white');
  
  //prototypes = khuon mau
  
  //module
  //readfileSync
  //npm > module contributed
  //readlineSync
  //JSON
  JSON.stringify(); //object > json(String)
  JSON.parse() // JSON(string) > object
  
  //if else
  
  //bt(*)
  
  //Sync vs Async
  
  //callback hell
  
  // -- asyncs
  //promise(*)
  //promise.all
  //generator `function function()*`
  
  //node co
  // async await
  
  // node co la buoc chuyen giao giua promise -> async await
  // -- asyncs
  
  //setTimeOut(fn, ms) chay ham fn sau ms millisec
  
  //setInterval(fn, ms) lap lai sau khoang ms goi ham fn (*)
  
  //Date moment.js
  
  //Database
  

  // promise duoc excute truoc khi bat dau event loop tiep theo
  // setTime duoc excute bat dau event loop tiep theo sau promise
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  