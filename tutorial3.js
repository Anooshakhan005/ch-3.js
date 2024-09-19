// Ch# 3 :- Loops & strings
//Loops

//----- for Loop----------------- 'For loop is used more often.' 
// print 1 to 5
for (let count = 1; count <= 5; count++) {
    console.log('(for loop )count =', count);
}

//'We can use loops for logical tasks.'

// calculate sum of 1 to 5.
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log('(for loop calculate )sum', sum);
// console.log('loop has ended');
//________________________________________________________________________________________________________________________
//initify loop:- 'It should never be used.' ⚠️
/*for(let count=1;count>=0;count++){
    console.log('count =',count);
}*/
//___________________________________________________________________________________________________________________________
//-----While loop :- 'It works just like a for loop, the only difference is in the way it's written.'
let _i = 1;
while (_i <= 5) {
    console.log('(while loop )i =', _i);
    _i++;
}
//Do while loop:- A while loop doesn’t run if the condition is false, but a do-while loop runs at least once, even if the
// condition is false.
let $i = 20;
do {
    console.log('(do while  loop )i =', $i);
    $i++;
} while ($i <= 10);

let $a = 1;
do {
    console.log('(do while  loop )i =', $a);
    $a++;
} while ($a <= 5);

//for of loop:- This helps in looping over strings and arrays.

let _str = 'javaScript';
for (let i of _str) {
    console.log('i =', i);
}
// If you want to check the length of a variable, you can also use this loop.
let strng = 'AnooshaKhan';
let length = 0;
for (let i of strng) {
    console.log('i =', i);
    length++;
}
console.log('strng length =', length);

// for in loop
let student = {
    name: 'Anoosha khan',
    sir_name: 'khan_Ghouri',
    age: 18,
    is_pass: 'true',
};
for (let key in student) {
    console.log('key =', key)
    //console.log('key =',key,'value =',student[key]); <---- With this code, you can also print the values of the keys.
}
/*
Q1: print all even numbers from 0 to 100

Q2: creat a game where you start ith  any random game number .ask the user to keep guessing game number until the user 
inters correct value.*/

//----------------- Strings--------
// create string:- string is a sequence of characters use to represent text .

let str = "javaScript";

console.log('str =', str);//Will this print in JavaScript
console.log('str.length', str.length);//If you want to determine the length of a string, you can write it like this.
console.log(str[0]);

//tamplate literals
let obj = {
    item: `pen`,
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

// Used a template literal for the expression.
let specialString = `this is tamplate literal ${1 + 2 + 3}`;
console.log(specialString);

// escape characters
console.log("escape characters \n java \n Script");
console.log("escape characters \t java \t Script");

//Strings method 

//toUpperCase
let newStr = `'javaScript'`; //This will change into capital letters.
newStr = newStr.toUpperCase();
console.log(`uppercase =  ${newStr}`);

//toLowerCase
let newstr = `javaScript `;  //This will change into small letters.
newstr = newstr.toLowerCase();
console.log(`lowerCase = ${newstr}`);

//trime :- Removes the whitespace from the start and the end.
let Newstr = `       javaScript      `;
Newstr = Newstr.trim();
console.log(`trim = ${Newstr} `);

//slice
let nEwstr = `01234567`;
console.log('slice  1,5 =', nEwstr.slice(1, 5));

//str.concatenation :- (concat)It means joining/concatenating one string with another string.
let neWstr = 'java';
let newsTr = 'Script';
console.log('cocat =', neWstr.concat(newsTr));

//replace
let newstR = 'hello';
console.log('h replace =', newstR.replace('h', 'y'));

//replace All
let _newstr = 'h e l lo lo lo';
console.log('lo replace =', _newstr.replaceAll('lo', 'p'));
// chapter complete


/* practice these questions.

Q1:- prompt the user to enter their full name. generate the username for them based on input. start username with '@'
followed by their fullname and ending with the fullname length.*/