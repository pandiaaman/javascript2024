/*
{
  let x = 7;

function sayHello1() {
  console.log("hello");
}

setTimeout(() => {
  console.log("setTimeout");
}, 1000);

console.log(x);
console.log(sayHello1);
sayHello1();
}
*/
// console.log(this);

//spaces : there is gloabal space, block space and script space
let letIsScriptIfNotBlocked = 10; //this let variable will be defined in script scope
var varIsGlobalNoMatterWhereUsed = 20;
definedInGlobalSpaceIfNoLetOrVarIsMentioned = 30;
{
  var a = 10;
  let b = 20; //here we will see that let is defined in block scope

  function some() {
    console.log(a); //a is a var and hence it is global scoped, it can be accessed anywhere and everywhere
    console.log(b); //b on the other hand is let and is block scoped, function is present in same block but b is not defined locally
    //both a and b are printed here
  }

  some();
}
{
  console.log(a); //just to show that var is not block scoped
  try {
    console.log(b); //let is block scoped hence not defined here
  } catch (error) {
    console.log(error);
  }
}

console.log(1 + 1 + "3" + 4); //23 done from left to right, if a string is found, it is considered as a string from there on

//Undefined: is only a placeholder showing that the variable does not have any value assigned to it yet
//we should not assign undefined to a variable as it is not a good practice

//SCOPE CHAIN
{
  //scope is directly related to the lexical environment
  //a local variable inside a function can not be accessed outside of it
  //a let variable inside a block or a var variable defined globally, can be accessed inside the function

  //scope definition: where can we access a given variable in the code

  //lexical environment: is the local memory along with the lexical environment of the parent (so local memory of the parent)
  //below checkScopeChain is sitting in the global lexical environment
  //internalFunciton is in the lexical environment of checkScopeChainFurther which is further sitting in global scope

  //var example
  var globalvar = 5;

  function checkScopeChain() {
    console.log(globalvar); //since globalvar is a global variable it can be accessed within the function
  }

  checkScopeChain(); //will print the gloabalvar

  function checkScopeChainFurther() {
    internalFunction();
    function internalFunction() {
      console.log(globalvar);
    }
  }

  checkScopeChainFurther();
  //will print the globalvar even for a function within a function because its scope chain

  //let example
  //let is block scoped
  {
    //this is a block for let
    let bockScopedVar = 7;

    function checkScopeChain() {
      console.log(globalvar); //since globalvar is a global variable it can be accessed within the function
      console.log(bockScopedVar); //since blockscoped, within the block we can access the variable
    }

    checkScopeChain(); //will print the gloabalvar

    function checkScopeChainFurther() {
      internalFunction();
      function internalFunction() {
        console.log(globalvar);
        console.log(bockScopedVar);
      }
    }
    checkScopeChainFurther();
  }

  //what we learnt?
  //functions can access the variables defined outside them depending on the scope the variable is in
}

//final thoughts on lexical scoping and environments
//lexical env is created whenever

function aFun() {
  let b = 10; //function scope
  c();
  function c() {
    console.log(`b : ${b}`);
    console.log(`d : ${d}`);
  }
}

let d = 15; //script scope
aFun();
