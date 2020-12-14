document.getElementById("head1").innerHTML = "Heading 1";
document.getElementById("head1Par1").innerHTML = "This is the new paragraph for heading 1";

console.log(50/2);

var num1 = 10;

num1++;

console.log(num1);

console.log(num1 % 5);
num1--;
num1--;
num1--;
console.log(num1);

//Functions
function fun(){
    //alert("This is a function");
    console.log("The function works")
}
fun();

/*
Lets create a function whih takes in a 
name and returns "Hello that name"
*/

function greeting(){
    var name = prompt("what is your name?");
    console.log("Hello " + name);
}
    //greeting();

    //functions and arguments
function add(a,b){
    var sum = a + b;
    console.log(sum);
}

add(11,13);

add('Andrew',' Bwogi');
add('10', ' andrew');

//How do arguments work?
function newGreeting(yourName){
    console.log("Hello" + " " + yourName);
}

//var name = prompt("What is your name?");
//newGreeting(name); 

//loops in javascript
//while loop
var num = 0;

while(num < 100){
    num += 1;
    console.log(num);
}

//for loop

for(let num = 0; num <= 100; num++){
    console.log(num);
}

//Data types
let yourAge = 18; // number
let yourName = 'Andrew Bwogi'; // string
let name = {first: 'Andrew', last: 'Bwogi'}; //object
let truth = false; // boolean
let groceries = ['apple','banana','oranges']; //an array
let random; //undefined
let nothing = null; // value null

// Strings in javascript (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(fruit);
console.log(moreFruits);  //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(0,4));
console.log(fruit.replace('ban','123')); // Find ban and replace it with 123
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); //same as next
console.log(fruit[2]); //same as above
console.log(fruit.split(',')); // split by comma
console.log(fruit.split('')); //split by character


//Arrays
let fruits1 = ['banana','apples','oranges','pineapples'];
let fruits2 = new Array('banana','apples','oranges','pineapples');

console.log(fruits1[2]); // access value at index 2nd
console.log(fruits1[0]); //access value at index 0

fruits2[0] = 'pear';
console.log(fruits2);

for(i = 0; i < fruits1.length; i++){
    console.log(i + '.' + ' ' + fruits1[i].toUpperCase());
}

// Array common methods
//turning an array into a string
console.log('fruits2 to string:',fruits2.toString());
console.log(fruits1.join('-'));
console.log(fruits1.join('***'));
console.log(fruits1.join(' | '));
console.log(fruits1.pop(), fruits1); //deletes or removes last item
console.log(fruits2.push('blackberries'), fruits2); //append an item 
console.log(fruits2.length);
fruits2[fruits2.length] = 'new fruit'; //same as push
console.log(fruits2);

fruits1.shift(); // Removes first element from an array
console.log(fruits1);
fruits1.unshift('kiwi');
console.log(fruits1);

let vegetables = ['aspparagus','tomato','brocoli'];

// Combining vegetables and fruits to make a grocery list

let allGroceries = fruits2.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(1, 3)); //cut out from 2nd to 4th element
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

//sort
let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2];
console.log(someNumbers.sort()); //sorting not effected!
console.log(someNumbers.sort(function(a, b){ return a - b })); //ascending order
console.log(someNumbers.sort(function(a, b){ return b - a })); //descending order

// Pushing numbers in an array using the for loop
let emptyArray = new Array();
for(let i = 0; i <= 10; i++){
    emptyArray.push(i);
}
console.log(emptyArray);

// Objects in Javascript
// Dictionaries in python

let student = {
    first: 'Andrew', 
    last: 'Bwogi', 
    age: 25, 
    height:170,
    //OOP function that reads object or student information
    studentInfo: function(){
        return this.first + '|' + this.last + '|' + this.age + '|' + this.height;
    }
};
console.log(student.first);
console.log(student.last); 
// changing object values
student.last = "notBwogi";
console.log(student.last);

student.last = 'Bwogi';
console.log(student.last);

student.age++;
console.log(student.age);

//to run the OOP function in the object
console.log(student.studentInfo());
/*
let age = prompt("What is you age?");

// if and else statement
if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
} */

//switch statements
//differentiate between weekday and weekend
//Day 1 - 5 --> Weekdays

//Day 1 --> Monday - Weekday
//Day 2 --> Tuesday - Weekday
//Day 3 --> Wednesday - Weekday
//Day 4 --> Thursday - Weekday
//Day 5 --> Friday - Weekend
//day 6 --> Saturday - Weekend
//day 0 --> Sunday - Weekend

switch(6){
    case 5:
        console.log('weekend') ;
        break;
    case 6:
        console.log('weekend') ;
        break;
    case 0:
        console.log('weekend') ;
        break;
    default:
        console.log('weekday') ;
}










