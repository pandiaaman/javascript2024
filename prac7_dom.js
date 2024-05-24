console.log("dom is the document object model");

//window object: it's the broweser's object, representing an open window in the browser
//window is a global object with lots of properties and methods

//for eg., alert is actually window.alert
//prompt is actually window.prompt
//console.log  is actually window.console.log
//above these are working without mentioning window because the script knows the window object at all times

/*
DOM (document object model)

window -> document -> html
                         --> head -> meta
                                  -> title
                                  -> link
                         --> body
                                  -> h1
                                  -> p
                                  -> img
                                  -> script 


  window -> document -> body -> children                                  
*/

{
  let person = { name: "Alice", age: 25, city: "New York" };
  console.dir(person);
  console.log(person);
}

{
  console.log(window.document);
  //is same as
  console.log(document);

  console.log(document.head);
  console.log(document.body);

  console.log(document.body.childNodes); //all the nodes within the body

  //to print the nodes within the child nodes
  console.log(document.body.childNodes[1]);

  //to dynamically update the color of the background
  let bgcolor = prompt("enter the color name you want the background in");
  document.body.style.backgroundColor = bgcolor;
}

//DOM Manipulation
// to access an element there are different ways:
//   document.getElementById("elementId")
//   document.getElementsByClassName("className")
//   document.getElementsByTagName("div")
//   document.getQuerySelector(".someClass")
// let firstChild = document.querySelector("ul li:nth-child(1)");
// let lastChild = document.querySelector("ul li:nth-child(3)");
// let allChildren = document.querySelectorAll("ul li:nth-child(even)");

{
  //dom manipulation
  let paraOne = document.getElementById("paraOne");
  paraOne.style.color = "red";

  let listItem = document.getElementsByClassName("listItem");
  //listItem.style.backgroundColor = "blue";
  console.log(listItem); //returns html collection
  listItem[2].style.backgroundColor = "red";

  let pTags = document.getElementsByTagName("p");
  console.log(pTags);

  //querySelector : returns the first occurance
  //querySelectorAll: returns all the elements
  let h1Query = document.querySelector("h1");
  let paraOneIdQuery = document.querySelector("#paraOne");
  paraOneIdQuery.innerHTML = "<h2>Hellooo i got accepted!!</h2>";
  let listItemClassQuery = document.querySelector(".listItem");
}

//DOM manipulations: updating properties (getters and setters)
//tagName, innerHTML, innerText, textContent
{
  //tagname:returns the tag name of the element node
  console.log(`TAGNAME :: ${document.getElementById("paraOne").tagName}`);
  //textContent: returns text content for even the hidden nodes
  console.log(
    `TEXT CONTENT :: ${document.getElementById("paraOne").textContent}`
  );
  window.document.body.children[2].innerText = "wow";
  //children and childNodes
  window.document.body.childNodes[3].style.padding = "20px";
  //children is of type HTMLCollection and childNodes is a list of children, we can use both

  let listItemOne = document.getElementById("item1");
  listItemOne.addEventListener("click", () => {
    alert("you clicked on item one");
  });
}

//WHY should the script be loaded at the end of the body
// ==> this is because script can not see the DOM elements once it is loaded before them

{
  //DOM has parent, child and siblings for each node
  //firstChild property provides us with the first child of the node element
  console.log(document.body.firstChild);
  console.log(document.body.childNodes[3].innerText);
}

//practice questions
{
  //create a h2 heading element with text : hello javascript. append 'from aman"to this using JS
  document.getElementById("pracHeading").append(" from Aman");
}
{
  let boxDivs = document.querySelectorAll(".box");
  console.log(boxDivs);
  let i = 1;
  for (div of boxDivs) {
    div.innerText = `${i} box`;
    i++;
  }
}

//////////////////////////////////////////////////////////
/////DOM part 2
/////////////////////////////////////////////////////////

//attributes and style

//attributes : additional information within the tags, like id, class, style etc
//    <img src=""/> src is the attribute
{
  let itemOne = document.querySelector("#item1");
  console.log(itemOne.getAttribute("class"));

  itemOne.setAttribute("class", "newClass");
}

//insert elements in the DOM
{
  //first we create the element
  let newButton1 = document.createElement("button");
  newButton1.innerText = "click me !";

  //select the element we want the newly created element near to
  let divElement = document.getElementById("pracONe");
  //we can either prepend(start) or append(end)
  divElement.append(newButton1);

  let newButton2 = document.createElement("button");
  newButton2.innerText = "click me 2 !";

  divElement.prepend(newButton2);

  //we can also use before and after to show where to add the button
  let newButton3 = document.createElement("button");
  newButton3.innerText = "click me 3 !";

  divElement.before(newButton3);

  //to remove the element we use remove

  newButton3.addEventListener("click", () => {
    console.log("button 3 is clicked");
  });
}

//practice questions
{
  //create a button give it a text and color and padding and then add it as the first element in the body
  let firstButton = document.createElement("button");
  firstButton.style.backgroundColor = "pink";
  firstButton.innerText = "click me first";
  firstButton.style.padding = "4px";
  firstButton.setAttribute("class", "first-button");
  document.body.prepend(firstButton);
}

//tto append the classes to a given tag, we can also use classList
//we use classList as the setAttribute("class","") will completely replace the old class and sometimes we want the element to have both classes
{
  //lets say in css we have a class called newClass
  //we want to add this class to the listItem elements
  let elems = document.getElementById("item2");
  console.log(elems);
  elems.classList.add("newClass");
}

{
  //creating a stopwatch

  //create a div
  let stopWatchDiv = document.createElement("div");
  stopWatchDiv.id = "stopWatchDiv";
  stopWatchDiv.style.width = "100%";
  stopWatchDiv.style.textAlign = "center";
  document.body.append(stopWatchDiv);

  //create a start/stop button
  let startWatchBtn = document.createElement("button");
  startWatchBtn.innerText = "start/stop";
  startWatchBtn.style.padding = "2em";
  stopWatchDiv.appendChild(startWatchBtn);

  //div for showing hours minutes and seconds
  let timeDiv = document.createElement("div");
  stopWatchDiv.appendChild(timeDiv);

  //h3 tags showing hours mins secs
  let hours = 0;
  let mins = 0;
  let secs = 0;

  let hoursShown = document.createElement("h3");
  hoursShown.innerText = hours;
  let minsShown = document.createElement("h3");
  minsShown.innerText = mins;
  let secsShown = document.createElement("h3");
  secsShown.innerText = secs;

  timeDiv.appendChild(hoursShown);
  timeDiv.appendChild(minsShown);
  timeDiv.appendChild(secsShown);

  //boolean to start or stop the watch
  let startStop = false;

  startWatchBtn.addEventListener("click", () => {
    console.log("starting");
    startStop = !startStop;
    startStopWatch(startStop);
  });

  //function
  const startStopWatch = (startStop) => {
    console.log(startStop);
    if (startStop) {
      if (mins == 60) {
        mins = 0;
        hours += 1;
        hoursShown.innerText = hours;
      }
      if (secs == 60) {
        secs = 0;
        mins += 1;
        minsShown.innerText = mins;
      }
      secs += 1;
      secsShown.innerText = secs;

      // setTimeout(startStopWatch(), 1000); //THis also works same thing as below
      setTimeout(() => {
        startStopWatch(startStop);
      }, 1000);
    }
  };
}
