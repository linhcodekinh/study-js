  //bt(*)
//   1. Show all students
//   2. Create a new student
//   3. Save and exit
var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData(){
    var content = fs.readFileSync('./data.json', 'utf-8');
    students = JSON.parse(content);
}

function showMenu(){
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save & Exit');

    var option = readlineSync.question('> ');
    switch (option){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
           //console.log(students);
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}

function showStudents(){
    for (var student of students) {
        console.log(student.name, student.age);
    }
}

function showCreateStudent(){
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name : name,
        age : age
    };  
    students.push(student);
}

function saveAndExit(){
    var content =  JSON.stringify(students);
    fs.writeFileSync('./data.json', content, 'utf-8')
}

function main(){
    loadData();
    showMenu();
    
};

main();