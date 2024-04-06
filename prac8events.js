console.log("working on events");

//the change in state of an object is called as event
//say click of a button is change in the state of the button, hence it is an event

//mouse event, onClick, onDoubleClick,

//events can be fired by keyboard, form, focus, mouse etc

{
  let somediv = document.getElementById("somediv");
  somediv.onmouseover = () => {
    console.log("hovering");
    let a = 4;
    console.log(a++);
  };
}

//event object:special object that has details about the events
{
  let btn1 = document.getElementById("btn1");

  btn1.onclick = (event) => {
    console.log(event.type);
    console.log(event.target);
    console.log(event);
  };
}

//ways to handle events
/*
  1. inline handling in html
    <button onclick="console.log('hello');">click me</button>
  2. functions in js
    let btn1 = document.getElementById("btn1");
    btn1.onclick = () => {
      console.log("somthing");
    }

    THESE GET OVERRIDEN BY OTHER FUNCTIONS IF CREATED 

  3. eventListeners
    btn1.addEventListener("click", () => {
      console.log("hello");
    });  
*/

{
  let btn1 = document.getElementById("btn1");

  btn1.addEventListener("click", () => {
    console.log("listener 1");
  });
  btn1.addEventListener("click", () => {
    console.log("listener 2");
  });
  const listener3 = () => {
    console.log("listener 3");
  };
  btn1.addEventListener("click", listener3);

  btn1.addEventListener("click", (event) => {
    console.log("listener 4");
    console.log(event.type);
    console.log(event.target);
  });

  //to remove the listener 3
  btn1.removeEventListener("click", listener3);
}

//practice question
//create a toggle button that changes the screen to dark mode and again to light mode
{
  let toggleLightDark = document.createElement("button");
  toggleLightDark.innerText = "Toggle Light Dark";
  toggleLightDark.style.padding = "4px";
  document.body.append(toggleLightDark);

  let flag = "light";
  toggleLightDark.addEventListener("click", () => {
    if (flag === "light") {
      document.body.setAttribute("class", "dark");
      flag = "dark";
    } else {
      document.body.setAttribute("class", "light");
      flag = "light";
    }
  });
}
