//Scoping with let
 function scoping() {
   var x = 1;

   if(true) {
     var x = 2;
     console.log(x);
   }

   console.log(x);
 }

 function scoping() {
   var x;
   x = 1;

   if(true) {
     x = 2;
     console.log(x);
   }

   console.log(x);
 }

//Scoping with let
 function scoping() {
   let x = 1;

   if(true) {
     let x = 2;
     console.log(x);
   }

   console.log(x);
 }

 //Scoping with let - Be mindful
 for (var ii = 0; ii < 10; ii++) {
   if(ii === 2) {

     setTimeout(function() {
       console.log(ii);
       if(ii ==== 10) {
         console.log('Loop finished.');
       }
     }, 100);

   }
 }

//Scoping with let - Be mindful
 for (let ii = 0; ii < 10; ii++) {
   if(ii === 2) {

     setTimeout(function() {
       console.log(ii);
       if(ii ==== 10) {
         console.log('Loop finished.');
       }
     }, 100);

   }
 }

//Scoping with let - Be mindful
 let a = 'Hi';
 let a = 'Bye';

 //Scoping with constant
 const a = 2;
 a = 3;
 const a = 1;

//Scoping with constant
 const a = 1;
 if(true) {
   let a = 2;
   console.log(a);
 }
 console.log(a);


 //constant and objects
 const myObj = {
   greetings: 'Hello!'
 };

 myObj = {};

 myObj.greetings = 'Hello there!';
 myObj.getGreetings = function() {
   console.log(this.greetings);
 };

 //Arrow functions
 var myArray = [1, 2, 3, 4];
 myArray.map(function(digit) {
   return digit * 2;
 });

//Arrow functions
 let myArray = [1, 2, 3, 4];

 myArray.map(digit => digit * 2);

 myArray.map(digit => {
   return digit * 2;
 });

 myArray.map(digit => {
   digit * 2;
 });

 //Arrow functions - lexical 'this'
 var person = {
   age    : 0,
   growOld: growOld
 };

 function growOld() {
   var self = this;

   setTimeout(function() {
     self.age++;
     console.log(self.age);
   }, 100);
 }

 person.growOld();

//Arrow functions - lexical 'this'
 let person = {
   age    : 0,
   growOld
 };

 function growOld() {

   setTimeout(() => {
     this.age++;
     console.log(this.age);
   }, 100);
 }

 person.growOld();

//Arrow functions - lexical 'arguments'
function lexicalArgs() {
  let getFirstArgument = () => {
    return arguments[0];
  }
  return getFirstArgument;
}

lexicalArgs('first', 'second')();

//Template Literals
var channel = 'ABC';
var reminderInterval = 600;

function templateLiteral() {
  var reminderText = 'Reminder Text';

  if(channel && reminderInterval) {
    reminderText = 'On ' + channel + ' in ' + (Math.round(reminderInterval / 60)) + ' minutes';
  }

  return reminderText;
}

templateLiteral();

//Template Literals
let channel = 'ABC';
let reminderInterval = 600;

function templateLiteral() {
  let reminderText = 'Reminder Text';

  if(channel && reminderInterval) {
    reminderText = `On ${channel} in ${Math.round(reminderInterval / 60)} minutes`;
  }

  return reminderText;
}

templateLiteral();

//Destructuring Assignments
let myArray = [1 ,2 , 3];
let [a, , b] = myArray;
a;
b;

let [a, b, ...rest] = [1, 2, 3, 4, 5];
a;
b;
rest;

let myDictionary = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000
};
let {I, V} = myDictionary;
I;
V;

//Destructuring Assignments - Swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
a;
b;

//Destructuring parameters
function ajax({url, method}) {
  let xhttp = new XMLHttpRequest();
  xhttp.open(method, url, true);
  xhttp.send();
}

function printDetail({name, age}) {
  //do something
}
