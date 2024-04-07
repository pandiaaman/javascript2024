//variables, data types

console.log("hello");
//different ways to define variables

//var, let and const
//var: redeclare and update
var somevar = 3;
console.log(somevar);

//redeclaring
var somevar = 5;
console.log(somevar);

//updating
somevar = 7;
console.log(somevar);

//let: CANT redeclare, only update
let somelet = 4;
console.log(somelet);

//redeclaring
// let somelet = 5;
//automatically throws error (try to uncomment the above line)

//updating
somelet = 5;
console.log(somelet);

//constant
const someconst = 4;

//redeclaring
// const someconst = 5;
//throws error the moment you uncooment above line

//updating
// someconst = 6;
//doesn't throw error on writing the update line
console.log(someconst);
//throws error on running, saying assignment to constant variable

//talking about the block scope of let
{
  let a = 10;
  console.log(a);
}

{
  let a = 12;
  console.log(a);
  //it will allow us to write a again since the block is different
}

////////////////////////////////////////////////////////////
//////////Data types//////////////

{
  let x = 1;
  console.log(typeof x);

  let y = 1.1;
  console.log(typeof y);

  let a = true;
  console.log(typeof a);

  let b;
  console.log(typeof b);

  let c = null;
  console.log(typeof c);

  let d = 11111111111111111111111111111;
  console.log(typeof d);

  let e = BigInt(1243);
  console.log(typeof e);
}

//non primitive data types
//objects
{
  const someStudentObject = {
    fullname: "aman pandia",
    age: 25,
    rollno: 2,
    marks: 100,
  };

  console.log(someStudentObject);

  console.log(typeof someStudentObject);

  console.log(typeof someStudentObject["age"]);

  console.log(someStudentObject.age);

  console.log(someStudentObject["fullname"]);

  //updating the value of keys of an object
  someStudentObject.rollno = 3;

  console.log(someStudentObject);

  //other way to update
  someStudentObject["marks"] = 101;

  console.log(someStudentObject);

  //below assignment will throw error saying assignment to constant variable as we are updating the complete object here
  someStudentObject = {
    name: "aman pandia",
    age: 26,
  };
}
