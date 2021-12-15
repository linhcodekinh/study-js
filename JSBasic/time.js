// var i = 0;
// var intervalId = setInterval(function(){
//     i++;
//     console.log(i);
//     if(i === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);

// // Write a function count from 10 to 10
// // return a promise

// function countFrom(a, b){
//     return new Promise(function(resolve, reject){
//         setInterval(function(){
//             a++;
//             console.log(a);
//             if(a === b){
//                 clearInterval(this);
//                 resolve(a);
//             }
//         }, 1000);

//     })
// }

// countFrom(1, 10).then(function(a){
//     console.log('Done', a);
// })


var c = 0;
var timeOut = setTimeout(function(){
    console.log(c);
},1000);