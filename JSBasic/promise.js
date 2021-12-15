// promise
// var fs = require('promise-fs');

// function onDone(song){
//     console.log(song);
// }

// function onError(error){
//     console.log(error);
// }

// function readFile(path){
//     return fs.readFile(path, {encoding : 'utf8'});
// }

// readFile('song4.txt')
//     .then(onDone)
//     .catch(onError)
//     .then(function(){
//        return readFile('song2.txt')
//     })
//     .then(onDone)
//     .catch(onError);

var fs = require('fs');

function readFilePromise(path){
    //excutor function
    return new Promise(
        function(resolve, reject){
            fs.readFile(path, {encoding : 'utf8'}, function(err, data){
                if(err){
                    reject(err);
                }else{
                    resolve(data); 
                }    
            });
        }
    );
   
}

readFilePromise('song.txt')
    .then((song1) => {
            setTimeout(() => {
                    console.log(song1);
                }, 1000);
        })
    // .then(function(){
    //    return readFilePromise('song2.txt');
    // })
   // .then(() => readFilePromise('song2.txt'))
    .then(() => {
        setTimeout(() => {
                console.log('hahihihah');
            }, 1000);
    })
    .catch(function(error){
        console.log(error);
    }).finally(
        function(){

        }
    );

    // $http.get('/api/server-config').then(
    //     function(configResponse) {
    //         return $http.get('/api/' + configResponse.data.USER_END_POINT);
    //     }
    // ).then(
    //     function(userResponse) {
    //         return $http.get('/api/' + userResponse.data.id + '/items');
    //     }
    // ).then(
    //     function(itemResponse) {
    //         // Display items here
    //     }, 
    //     function(error) {
    //         // Common error handling
    //     }
    // );

//     Promise (node lại đoạn cuối cho bạn nào cần) thask F8!
// *Sinh ra từ phiên bản es6 để xử lý callback hell đã tồn tại trước đó ( viết code dài, nhìn khó hiểu…)
// * Để khai báo đối tượng mới dùng từ khoá new Promise() truyền vào 1 constarctor Executor trong đó nhận được 2 tham số ( res, rej) 
//       + res gọi khi thao tác xử lý thành công
//       +rej gọi khi thao tác xử lý thất bại
// *Khi đối tượng promise được tạo ra sử dụng các phương thức 
//     +.then()  nhận callback function được thực thi khi res thành công (chú ý là ta có thể .then()  nhiều lần )
//     + catch()  nhận callback function được thực thi khi rej ( tất cả .then() ở trên lỗi thì đều

//Thế là callback để xử lí bất đồng bộ nhưng callback lại có callback hell, thế là sinh ra promise, xong promise lại có promise hell