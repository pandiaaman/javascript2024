{
  //closures
  /*
    function defined inside of another function
    inner function has the access to variables and scope of the outer function
    used frequently in react, vue and angular

    allows for private variables and state maintenance
  */

  function outer() {
    //the message variable is now completely private and can only be accessed by inner()
    let message = "hello";

    function inner() {
      console.log(message);
    }

    //calling the inner function
    inner();
  }

  outer(); //nothing happens
}

{
  //using closure to implement state maintenance and keeping the variables private

  //first, understanding the problem
  function increment() {
    let counter = 0;
    counter++;
    console.log(counter);
  }

  increment();
  increment();
  increment();
  //above all output 1 as the increment is called again and counter is reinstantiated

  //one way of doing this is to define counter outside

  let counter = 0;

  function increment1() {
    counter++;
    console.log(counter);
  }

  increment1();
  increment1();
  increment1();
  //this time it works BUT counter is not safe it is not a private variable

  //FINALLY using closures

  function increment2() {
    let counter = 0;

    function incrementUsingCounter() {
      counter++;
      console.log(counter);
    }

    return { incrementUsingCounter }; //we are returning an object here with the incrementUsingCounter method
  }

  const counterOb = increment2();
  counterOb.incrementUsingCounter();
  counterOb.incrementUsingCounter();
  counterOb.incrementUsingCounter();
}

//setTimeout
{
  //used for async programming
  //setTimeout is a callback where it takes a function as a parameter

  setTimeout(() => {
    console.log("setTimeout");
  }, 2000);

  let btn1 = document.createElement("button");
  btn1.textContent = "click me to see a popup in 2 secs";
  btn1.style.padding = "1em";

  window.document.body.appendChild(btn1);

  btn1.addEventListener("click", () => {
    setTimeout(() => {
      window.alert("hello there");
    }, 2000);
  });
}

{
  //digital clock
  let timeDiv = document.createElement("div");
  document.body.appendChild(timeDiv);

  let hourSpan = document.createElement("span");
  timeDiv.appendChild(hourSpan);

  let minSpan = document.createElement("span");
  timeDiv.appendChild(minSpan);

  let secSpan = document.createElement("span");
  timeDiv.appendChild(secSpan);

  updateTime();

  function updateTime() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, 0);
    let minutes = date.getMinutes().toString().padStart(2, 0);
    let seconds = date.getSeconds().toString().padStart(2, 0);

    // console.log(hours + " " + minutes + " " + seconds);

    hourSpan.textContent = hours + " : ";
    minSpan.textContent = minutes + " : ";
    secSpan.textContent = seconds;

    setTimeout(updateTime, 1000);
  }
}

document.title = "woohoo";

{
  //calculator program
  console.log(eval(1 + 3.9));
}

{
  setTimeout(() => {
    console.log("task 1");
  }, 2000);

  console.log("task 2");
  console.log("task 3");
  console.log("task 4");

  //now we want to make sure that the task 2 3 4 are done after task 1

  //we use callback
  //we put the tasks in a function
  function otherTasks() {
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
  }

  function tasks(callback) {
    setTimeout(() => {
      console.log("task 1");
      callback();
    }, 3000);
  }

  tasks(otherTasks);
}

{
  //error handling
  try {
    console.asdf("aa"); //asdf is not a function
  } catch (error) {
    console.error(error);
  } finally {
    console.log("error handled");
  }

  try {
    console.log(x); //reference error x is not defined
  } catch (error) {
    console.error(error);
  } finally {
    console.log("error handled");
  }

  try {
    throw new Error("well here is an error thrown"); //throwing an error
  } catch (error) {
    console.error(error);
  } finally {
    console.log("error handled");
  }

  console.log("reaching the end");
}

//DOM
{
  let listitem = document.getElementsByClassName("list-item");

  listitem[0].style.color = "red";

  let secondListItem = document.querySelector(".list li:nth-child(2)");
  secondListItem.style.color = "blue";
}

{
  let listitems = document.getElementsByClassName("list-item");

  Array.from(listitems).forEach((listitem) => {
    console.log(listitem.textContent);
    listitem.style.backgroundColor = "yellow";
  });
}

{
  //mouse events
  let square = document.getElementById("square");
  square.style.width = "6em";
  square.style.height = "6em";
  square.style.backgroundColor = "red";

  square.addEventListener("click", (event) => {
    console.log(event); //this event is a pointer event
    // square.style.backgroundColor = "blue";
    event.target.style.backgroundColor = "blue";
    //the above event.target is a better way as it will work for all other blocks where we want to implement this functionality
  });

  square.addEventListener("dblclick", () => {
    square.style.backgroundColor = "pink";
  });

  square.addEventListener("mouseover", function (event) {
    console.log("mouse over the square");
    event.target.color = "white";
    event.target.textContent = "hello";
  });

  square.addEventListener("mouseout", function (event) {
    event.target.textContent = "";
  });
}
