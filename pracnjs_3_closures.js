{
  //closure :  function bundled with its lexical scope is closure

  //we already know about the lexical scope and that is the easiest example of closure
  //notice how when y is called
  function x() {
    let a = 10;
    function y() {
      console.log(a); //put a debugger here and you will see clousure(x)
    }
    y();
  }
  x();
}

//what is a closure?
// function along with its lexical scope(env

{
  //in JS, we can do a lot of things with functions
  //1. like declaring them as variables
  let xfun = function () {
    console.log("i am a function declared as a variable");
  };

  xfun();
  //2. passing fucnctions as an input to a function

  let yfun = function () {
    console.log("i am a parameter to a funciton");
  };

  function yfun2(yfun) {
    console.log("hello");
  }

  yfun2();

  //3. even return functions as an output from a function

  function zfun() {
    function t() {
      console.log(
        "i am being returned as an output of a function and i am a funciton myslef :)"
      );
    }
    return t;
  }
  let res = zfun();
  console.log(res); //prints the function t

  res(); //runs the t function
}

//understanding the closures now
{
  //taking the same example as above
  //only this time we are adding one variable in the parent's lexical scope of t()
  function zfun() {
    let zfunvar = 5;
    function t() {
      console.log(
        "i am being returned as an output of a function and i am a funciton myslef :)" +
          zfunvar //here we are printing the zfunvar that is in the parent's lexical scope
      );
    }
    return t;
  }
  let res = zfun();
  console.log(res); //prints the function t

  //10000 lines of code here

  res(); //runs the t function
  //AND most importantly,
  //t() remembers the value of zfunvar even though the zfun() has been popped off the stack long back
  //even though the zfunvar was a let and is no more present in the global scope, the value of zfunvar remains

  //this is because when we return the functions from a function, the returned function retains its parent's env called closure
}

/*
important uses of closures
1. Module design pattern
2. currying
3. functions like once
4. memoize
5. maintaining state in async 
6. setTimeouts
7. Iterators
*/

{
  //currying in javascript :
  //it is a process to make sure that we only run a function when we have all the parameters ready with us
  //suppose function has 3 parameters and we are getting them from different APIs or user inputs
  //now we want to run the function only if we have all the 3 inputs , for this we use the concept of closures called currying

  let emailTo; //receiver email
  let emailSubject;
  let emailBody;

  function sendEmailBasic(emailTo, emailSubject, emailBody) {
    //this function is a basic implementation and will run no matter how many parameters are ready
    //this means even if a parameter is null, this function will fun
  }

  //implementing currying here
  function sendEmailToCurry(emailTo) {
    return function (emailSubject) {
      //IMPORTANT: we return the function from a function as now it has the lexical scope with it
      return function (emailBody) {
        console.log(
          `email is now being sent to ${emailTo} with subject ${emailSubject} and body as ${emailBody}`
        );
      };
    };
  }

  //calling the above function
  sendEmailToCurry("aman")("Imp: How are you")("Hi, Hope you are doing well");

  //checking if we have only two paramters
  console.log("if we have two parameters...");
  sendEmailToCurry("aman")("this is subject"); //suppose we didnt get body then this will happen and function will not run
  console.log("CURRYING function is not run");
}

{
  //ANOTHER WAY TO IMPLEMENT CURRYING (ARRROW FUNCTIONS)
  //lets say we want to return the addition of three variables given all 3 are given to us

  function sumVariablesCurry(a) {
    return function (b) {
      return function (c) {
        return a + b + c; //this is the basic way of implementing currying
      };
    };
  }

  const somFun = () => {
    //this is how we implement a basic arrow function
  };

  //implementing using arrow
  const sumVariablesCurryArrow = (a) => (b) => (c) => {
    return a + b + c;
  };

  let sum = sumVariablesCurryArrow(3)(1)(6);
  console.log(sum);
}

{
  //Memoization in javascript
  //optimizing technique to solve time connsuming problems
  //we save previous outputs for a given input in cache and return results from it
  //
  //
  //first how to calculate the time in javascript to calculate the performance of code
  console.time();
  //some code here
  console.timeEnd(); //this automatically prints the time taken

  //lets say there is a method that returns sum of first n numbers using the loop
  const sumFun = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

  console.time();
  console.log(sumFun(10000));
  console.timeEnd();

  //now lets solve this using memoization

  const memoize = (fun) => {
    //callback
    //first we need a cache to store the key value pair of inputs and outputs
    let cache = {}; //cache is an object

    //now we return a function that will do the actual processing and will have the access to cache at all times
    return function (...args) {
      let n = args[0];
      if (n in cache) {
        //we use in because we are checking keys
        console.log("from cache");
        return cache[n];
      } else {
        let res = fun(n);
        cache[n] = res;
        console.log("stored in cache");
        return res;
      }
    };
  };

  console.time();
  let memRes = memoize(sumFun);
  console.log(memRes(10000));
  console.timeEnd();

  console.time();
  console.log(memRes(10000));
  console.timeEnd();
}
