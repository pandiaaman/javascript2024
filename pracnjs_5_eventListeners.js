//callback functions
//js is synchronous and single threaded
//blocking the main thread
//callback functions
//event listeners
//closure demo with event listeners
//scope demo with event listeners
//garbage collection and removeEventListeners

{
  //callback functions
  //ability to pass functions to another functions

  function calculate(operator, operand1, operand2) {
    return operator(operand1, operand2);
  }

  function sum(num1, num2) {
    console.log(num1 + num2);
  }

  calculate(sum, 1, 2); //prints 3

  //we can do this also
  function calculate2(operator, operand1, operand2) {
    return operator(operand1, operand2);
  }

  calculate2(
    function add(num1, num2) {
      console.log(num1 + num2);
    },
    3,
    4
  ); //this also adds the two numbers

  //callback functions provide us access to asynchronous world of javascript using timeout and intervals
}

{
  //memoization
  function calcSum(n) {
    if (n <= 0) {
      return -1;
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  // console.log(calcSum(-4));
  // console.log(calcSum(5));
  // console.log(calcSum(6));

  function memoizeSum(fun) {
    const cache = {}; //object to store the key value pair
    return function (...args) {
      let n = args[0];
      if (n in cache) {
        console.log("from cache...");
        return cache[n];
      } else {
        console.log("adding in cache...");
        let sum = fun(n);
        cache[n] = sum;
        return sum;
      }
    };
  }

  let memRes1 = memoizeSum(calcSum);

  let val1 = memRes1(3);
  console.log(val1);
  let val2 = memRes1(4);
  console.log(val2);
  let val3 = memRes1(4);
  console.log(val3);
  let val4 = memRes1(3);
  console.log(val4);
}

{
  //closures with event listeners

  let divCount = document.createElement("h3");
  divCount.style.padding = "2em";
  divCount.style.textAlign = "center";
  divCount.textContent = "0";
  document.body.appendChild(divCount);

  let incbutton = document.createElement("button");
  incbutton.textContent = "increase";

  document.body.appendChild(incbutton);

  incbutton.style.padding = "1.5em";

  let decbutton = document.createElement("button");
  decbutton.textContent = "decrease";

  document.body.appendChild(decbutton);

  decbutton.style.padding = "1.5em";

  function counter(initVal) {
    let count = initVal;

    function incrementCount() {
      count = count + 1;
      divCount.textContent = count;
    }

    function decrementCount() {
      count = count - 1;
      divCount.textContent = count;
    }

    return function (incOrDec) {
      if (Number(incOrDec) === -1) {
        decrementCount();
      } else if (Number(incOrDec) === 1) {
        incrementCount();
      }
    };
  }

  //IMPORTANT: please check how we are calling this below
  //we are not saying counter(0)(1) and counter(0)(-1) because everytime we do this it will create a new object
  //to manage this we first create a countVar which manages the state of the main closure
  let countVar = counter(0);

  incbutton.addEventListener("click", () => {
    countVar(1);
  });

  decbutton.addEventListener("click", () => {
    countVar(-1);
  });
}

{
  function counter(initValue) {
    var currentValue = initValue;

    var logCurrentValue = function () {
      console.log("currentValue = " + currentValue);
    };

    var increment = function () {
      currentValue += 1;
      logCurrentValue();
    };

    var decrement = function () {
      currentValue -= 1;
      logCurrentValue();
    };

    return function (incOrDec) {
      if (incOrDec == -1) {
        decrement();
      } else if (incOrDec == 1) {
        increment();
      }
    };
    // return { increment: increment, decrement: decrement };
  }

  var myCounter = counter(0); // myCounter now refers to the object returned by counter

  myCounter(1); // call the appropriate "property" function using dot notation
  myCounter(-1);
  myCounter(-1);
  myCounter(-1);
  myCounter(-1);
}

{
  //button click count should increase with clicks

  let button = document.createElement("button");
  button.style.padding = "1.5em";
  button.textContent = "click me 0";
  document.body.appendChild(button);

  function buttonState(initCount) {
    let count = initCount;
    return function () {
      count++;
      button.textContent = `click me ${count}`;
    };
  }

  let btnCounter = buttonState(0);

  button.addEventListener("click", () => {
    btnCounter();
    console.log("clicked");
  });
}

{
  //another way
  //button click count should increase with clicks

  let button = document.createElement("button");
  button.style.padding = "1.5em";
  button.textContent = "click me! 0";
  document.body.appendChild(button);

  function buttonState() {
    let count = 0;
    button.addEventListener("click", function incrementCount() {
      count++;
      button.textContent = `click me! ${count}`;
      console.log("clicked");
    });
  }

  buttonState();
}

{
  let count = 0;

  let button = document.createElement("button");
  button.style.padding = "1.5em";
  button.textContent = `click me ${count}`;
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    count++;
    button.textContent = `click me ${count}`;
  });
}

{
  //removeEventListeners and garbage collection
  /*
      we need to remove the event listeners if we are not going to use them , why?
        event listeners are heavy which means that even if the page has completely loaded, the javascript needs to keep track
        of the scope of event listeners, for any button we can go to browser > dev tools > elements > button > event listener >scope
        to  check what value its holding right now

        until the given event listener is holding a value we can not garbage collect it
        in order for garbage collection to work, we need to have removed the event listeners.
  */
}
