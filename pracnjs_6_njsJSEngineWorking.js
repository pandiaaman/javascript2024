{
  ///this will mostly be about theoretical understanding of javascipt engine
  /*
    on running a program we have a global execution context created
    this GEC (aka anonymous context) is added to the call stack
    for every new funciton called, a new Execution context is created and pushed on top of the stack
    once the function is done running, then it is popped
    javascipt is a single threaded synchronous programming language
    hence there is only one call stack in the js engine
    browsers provide us mutliple web APIs to be  used like : DOM API (document.getElement..), Fetch, SetTimtout etc.
    whenever these browser APIs are called, the callback function is sent to reside in the webAPI section
    once the time set for settimout or the data is received from the API and the function is complete, then it is sent to callback queue
    callback queue holds the callback functions
    there is a similar queue called microtask queue, which holds all the promise responses
    microtask queue has a higher priority over callback queue
    all this while the program was running and the GEC is present at the bottom post part of the call stack
    once the program finishes and GEC is popped then comes in the event loop
    event loop is a gatekeeper which keeps checking if the call stack is empty or not
    once empty, event loop pushes the tasks from microtask queue/callback queue to the call stack
    call stack keeps running these tasks as and when they are pushed

  */
  /*
    javascript engine

    V8 engine is run in the chrome browser, Spider monkey(first ever JS engine) is run in firefox
    there are three main steps :
      parsing -> compilation -> execution
    
      Parsing
        during parsing, we generate tokens which take the input code and convert it to AST(abstract syntax tree)
      Compilation
        this AST generated is now passed to compilation
      Execution
        compilation and execution works hand in hand
      
    Interpreter : in interpreted languages, the interpreter scans code line by line 

    Compiler : in compiled languages, the code is first compiled to the optimized version of code which runs fast

    JS is both interpreted and compiled language.
    hence comes the term...
    Just in time compilation : best of both worlds: interpreter + compiler

    different JS engines can have diffferent algo to run the JIT compilation

  */
}

{
  //functional programming
  //--> Higher order functions: a function that takes in a function as an argument(first class functions) or returns a
  //    function from it are higher order functions
  //the function taking in the argument is the higher order function and the function passed as argument is callback funciton

  let radius = [3, 1, 2, 4];
  let area = radius.map((x) => Math.PI * x * x);

  console.log(area);

  let sum = radius.reduce((prev, curr) => {
    return prev + curr;
  });

  console.log(sum);
}

{
  //writing our own implementation using functional programming

  function area(radius) {
    return Math.PI * Math.pow(radius, 2);
  }

  function diameter(radius) {
    return radius * 2;
  }

  //implementation of map
  function calculate(inputArray, logic) {
    let output = [];
    for (let i of inputArray) {
      let val = logic(i);
      output.push(val);
    }
    return output;
  }

  let radiusArr = [1, 2, 3, 4];
  let areaCal = calculate(radiusArr, area);
  console.log(areaCal);

  let diameterCal = calculate(radiusArr, diameter);
  console.log(diameterCal);

  //improving the implementatoin as in case of map we use radiusArr.map(callback)

  Array.prototype.calculate2 = function (logic) {
    let output = [];
    for (let i of this) {
      //using this as now this points to the array
      let val = logic(i);
      output.push(val);
    }
    return output;
  };

  let areaCal2 = radiusArr.calculate2(area); //NOW EXACTLY WORKING AS MAP
  console.log(areaCal2);
}

{
  //reduce
  let arr = [3, 5, 1, 6, 22, 78, 44, 2, 9];
  let maxVal = arr.reduce((acc, curr) => {
    //acc means accumulator
    return prev > curr ? prev : curr;
  });
  console.log(maxVal);

  //we can initialize the value in reduce method
  let sumVal = arr.reduce((acc, curr) => {
    acc = acc + curr;
  }, 0); //0 here is the initialization
}
