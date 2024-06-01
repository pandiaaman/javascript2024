//call apply bind
//function statement
//function expression
//function declaration
//anonymous functions
//named function expression
//difference between parameters and arguments
//first class functions
//arrow functions

{
  //call apply bind
  //call method is a inbuilt method for every function
  //it set the object to which 'this' will point for this function

  //lets create an object
  let ob1 = {
    firstName: "Aman",
    lastName: "Pandia",
  };

  function printName() {
    //see how its not a  part of ob1 and is written in the global space
    console.log(this.firstName + " " + this.lastName);
  }

  //to use printName() for ob1...
  printName.call(ob1);

  //we can also have additional parameters in the function
  function printDetails(age, hometown) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " is " +
        age +
        " years old from " +
        hometown
    );
  }

  printDetails.call(ob1, 26, "morak");

  //we can also use call to BORROW FUNCTIONS from other objects

  let ob2 = {
    numOne: 4,
    numTwo: 6,
    sum: function () {
      let val = this.numOne + this.numTwo;
      console.log(val);
    },
  };

  let ob3 = {
    numOne: 5,
    numTwo: 6,
  };

  //now ob3 does not have a sum funcction but we can use it for ob3 from ob2
  ob2.sum.call(ob3); //here we say use ob2.sum method for the ob3 object

  //--> Apply method
  //apply is same as call, but we pass the additional parameters as an array
  printDetails.apply(ob1, [26, "morak"]);

  //-->Bind method
  //Bind returns a funtion and does not call it directly as done by call and apply

  let bindedFun = printDetails.bind(ob1, 26, "morak");
  console.log(bindedFun); //the function body will be printed here
  bindedFun();

  const person = {
    name: "suman",
    age: 5,
    display: function () {
      console.log(this.name + " " + this.age);
    },
  };

  setTimeout(() => {
    person.display();
  }, 3000);
}

{
  //Function statement are aka function declarations

  function a() {
    console.log("hello there, i am a function statement");
  }

  //Function expression

  let b = function () {
    console.log("i am a function expression");
  };

  //--> difference between function statement and function expression
  // HOISTING: function statement is ignored when the execution context runs and the function expression is regarded as a variable
  // so in case of function expression, it is hoisted depending on the let, var and const usage

  //arrow function
  let c = () => {
    console.log("i am an arrow function");
  };

  //constructor functions : create an object : represents a class
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.display = function () {
      //keep note of how to define the function inside a constructor function
      console.log(this.name + " " + this.age);
    };
  }

  let p1 = new Person("amit", 50);
  p1.display();

  //creating a related class to the above constructor funciton
  class PersonOne {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    display = function () {
      console.log(this.name + " " + this.age);
    };
  }

  let p2 = new PersonOne("anamika", 47);
  p2.display();
}

{
  //anonymous functions
  //a function without a name is anonymous
  // function (){
  // } --> throws a syntax error

  //we use anonymous function when we return function from functions in closures

  function x() {
    let a = 10;
    let y = function () {
      //this is anonymous function
      console.log(a);
    };
    return y;
  }

  x()(); //prints 10

  function x1() {
    let a = 10;
    let y = function (val) {
      //this is anonymous function
      console.log(val, a);
    };
    return y;
  }

  x1()(5); //prints 10

  //ccurrying
  function sum(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }

  let currySum = sum(1)(2)(3);
  console.log(currySum);

  //currying using arrow functions
  let sumCurryArrow = (a) => (b) => (c) => {
    return a + b + c;
  };

  console.log(sumCurryArrow(2)(3)(4));
}

{
  //named function expression
  let funName = function funName2() {
    //funName2 is a local function and is accessible only inside this part
    console.log(
      "i have two names but only one can be used to access me... the outer one"
    );
  };

  //funName2() //throws reference error
  try {
    funName();
    // funName2(); //could not find funName2
  } catch (error) {
    console.log(error);
  }
}

{
  //difference between parameters and arguments
  //the input to the function is called parameters
  function someFun(param1, param2) {
    //these are local variables inside this funcitonal scope
    return param1 + param2;
  }

  //when calling the above function, values we pass are called arguments
  someFun(2, 3); //2 and 3 are arguments
}

{
  //FIRST CLASS FUNCTIONS
  //a function can be passed in as an argument to another function
  //ability to use functions as values is called first class funcitons

  function funOne(someFun) {
    console.log(someFun);
  }

  funOne(function () {
    console.log("i am a funciton being passed as an argument");
  });
}

//functions are first class citizens : ability of functions to be used as arguments means first class citizens

{
  //callback funcitons
  //when a function takes in another function as an input
  //means that a function can be a parameter for some function

  function calculate(operator, operand1, operand2) {
    return operator(operand1, operand2); //operator is a function that is passed as a parameter
  }

  function sum(num1, num2) {
    console.log(num1 + num2);
  }

  calculate(sum, 2, 3);
}
