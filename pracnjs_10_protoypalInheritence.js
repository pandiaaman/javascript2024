{
  //prototypes: every object has an already existing object called prototype
  //inheritence is the concept where one object can access mehtods and properties of another object

  let obj1 = {
    name: "aman",
    age: 26,
  };

  console.log(obj1);

  Array.prototype.display = function () {
    console.log("woah");
  };

  let arr1 = [1, 2, 2, 3];
  arr1.display();
}
{
  class Vehicle {
    static numberOfVehicles = 0;
    constructor(price, year, model, brand) {
      this.numberOfVehicles = this.numberOfVehicles + 1;
      this.price = price;
      this.year = year;
      this.model = model;
      this.brand = brand;
    }
  }

  Vehicle.prototype.showPrice = function () {
    console.log(this.price);
  };

  class Car extends Vehicle {
    constructor(price, year, model, brand, windowsBrand) {
      super(price, year, model, brand);
      this.windowsBrand = windowsBrand;
    }
  }

  Car.prototype.run = function () {
    console.log("running car...");
  };

  let car1 = new Car(40, "2017", "VX", "Swift", "MRF");
  console.log(car1);
  car1.showPrice();
  car1.run();

  car1.__proto__.stop = function () {
    console.log("stoped car1");
  };
  car1.stop();

  let car2 = new Car(60, "2019", "VX", "Swift", "MRF");
  car2.showPrice();
  car2.run();
  car2.stop();

  // car1.prototype.stop1 = function () {
  //   console.log("stoped car...");
  // };

  // car1.stop1();
}

{
  //think of prototype as inheritence
  const ob1 = {
    name: "aman",
    marks: 92,
  };

  const ob2 = {
    name: "sumit",
  };

  ob2.__proto__ = ob1;
  console.log(ob2.marks); //although marks is not defined in ob2 it inherits it from the ob1 due to __prtoto__
}

//prototype is done with the class names
//__proto__is done with objects of those classes

{
  //event bubbling and capturing : event propogation in the DOM tree
  /*
      event bubbling: 
        suppose there are three divs (grandparent, parent and child), all have an onClick eventListener
        in event bubbling, if we click on the child div, it will trigger the onClick of all the parents associated

      event capturing: (also called as trickling)
        simply opposite of the bubbling, here, the trigger will be in opposite order that is first grandparent, then parent
        then the child

        REMEMBER: BUBBLING UP AND TRICKLING DOWN(capturing)
  */

  let grandParentDiv = document.createElement("div");
  let parentDiv = document.createElement("div");
  let childDiv = document.createElement("div");

  grandParentDiv.style.padding = "5em";
  grandParentDiv.style.backgroundColor = "green";
  parentDiv.style.padding = "3em";
  parentDiv.style.backgroundColor = "blue";
  childDiv.style.padding = "1em";
  childDiv.style.backgroundColor = "yellow";

  document.body.appendChild(grandParentDiv);
  grandParentDiv.appendChild(parentDiv);
  parentDiv.appendChild(childDiv);

  //NOTE: eventListeners have actually three parameters : event(click etc), callback function and useCapture(boolean)
  //based on value of useCapture value browser decides if it should be event bubbling or trickling
  //if true, then event trickles
  //if false, then event bubbles
  //by default false
  grandParentDiv.addEventListener(
    "click",
    () => {
      console.log("grand parent clicked");
    },
    true //make it false and see
  );

  parentDiv.addEventListener(
    "click",
    () => {
      console.log("parent clicked"); //on clicking parent div, both parent and grandparent will run due to bubbling
    },
    false //make it false and see
  );

  childDiv.addEventListener(
    "click",
    () => {
      console.log("child clicked"); //on clicking child div, all three consoles will be printed due to bubbling
    },
    true //make it false and see
  );
}

//understanding bubbling and trickling
/* 
  first, trickling (capturing) happens and then bubbling happens
  if the third parameter is true then it is capturing
  else by default or if it is false, then it is bubbling

  https://www.youtube.com/watch?v=aVSf0b1jVKk&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=5
  watch at 19:30
*/
{
  //HOW TO STOP PROPAGATION
  let grandParentDiv = document.createElement("div");
  let parentDiv = document.createElement("div");
  let childDiv = document.createElement("div");

  grandParentDiv.style.padding = "5em";
  grandParentDiv.style.backgroundColor = "green";
  parentDiv.style.padding = "3em";
  parentDiv.style.backgroundColor = "blue";
  childDiv.style.padding = "1em";
  childDiv.style.backgroundColor = "yellow";

  document.body.appendChild(grandParentDiv);
  grandParentDiv.appendChild(parentDiv);
  parentDiv.appendChild(childDiv);

  //NOTE: eventListeners have actually three parameters : event(click etc), callback function and useCapture(boolean)
  //based on value of useCapture value browser decides if it should be event bubbling or trickling
  //if true, then event trickles
  //if false, then event bubbles
  //by default false
  grandParentDiv.addEventListener(
    "click",
    (e) => {
      console.log("grand parent clicked");
    },
    false //make it false and see
  );

  parentDiv.addEventListener(
    "click",
    (e) => {
      console.log("parent clicked"); //on clicking parent div, both parent and grandparent will run due to bubbling
      e.stopPropagation(); //the DOM propagation will stop at this level
    },
    false //make it false and see
  );

  childDiv.addEventListener(
    "click",
    (e) => {
      console.log("child clicked"); //on clicking child div, all three consoles will be printed due to bubbling
    },
    false //make it false and see
  );
}

{
  let ob = {
    name: "aman",
  };
  console.log(ob.address); //even though address is not present , JS does not show any compilation error, TS does
}

{
  function fun1() {
    var a = 5111;
    function fun2() {
      console.log(a);
    }
    fun2();
  }
  fun1();
}

{
  //event delegation
  /*
      creating many eventListeners is not good for the application as garbage collection will not work on event Listeners
      because they need to be actively listening all the time
  */
  //suppose you have an e commerce application and there are multiple products listed on the page
  //if we add eventListeners to all the products it will be a bad style of writing code
  //more than that suppose we have  infinite scroll option then it would be impossible to save memory as GC will never run
  //the right way of doing this is to delegate events by using only one event listener on the parent and then
  //checking which child has been clicked by using event.target and going forward accordingly
  let parentList = document.getElementById("list1");
  parentList.addEventListener("click", (e) => {
    console.log(e.target);
    let clickedItem = e.target.id;
    console.log(clickedItem);
    window.location.href = "/" + clickedItem; //to go the other page
  });
}
{
  //another example of event delegation
  /*
    lets say we want the typed content in the text box to be capital 
    instead of putting eventLIsteners on every input block, we can have one dataset property attached to each list item
  */
  let parentForm = document.getElementById("parent-form");
  parentForm.addEventListener("keyup", (e) => {
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
      //.dataset.uppercase is coming from data-uppercase tag in html file
      e.target.value = e.target.value.toUpperCase();
    }
  });
}
