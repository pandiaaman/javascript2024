console.log("hello bro code");

//please remember the below flow
// >window > document > body > children
console.log(window.document.body.children[2]);

{
  let heading1 = document.getElementById("heading1");
  heading1.textContent = "this is coming from js";
  heading1.style.fontSize = "1.2em";
}
{
  //add the next list item in ul1
  let ul1 = document.getElementById("ul1");
  let li6 = window.document.createElement("li"); //we can use document instead of window.document also as it is a global object in js
  li6.textContent = "new item from js";
  ul1.appendChild(li6);
}
{
  /*
    javascript execution context:
      execution context is created by javascript everytime it runs a piece of code
      it has two main parts, variables and code
      variables section contains all the variables that are defined or declared in the program
      all the variables before beginning of the program are in the undefined state
      line by line the code execution begins and for each function a new execution context is created

      var variables are defined in the global scope
      and the let and const variables are in the block scope {}

      the let variables are kept separately in a different zone called script
  */
  var x = 5;
  console.log(x);
}

/*
  operator precedence in js
    1. paranthesis()
    2. exponents
    3. mulitplication, division and modulo
    4. addition and subtraction
*/

/*

  type conversion in js
    a prompt from user always comes in as a string
    say we take the age and add one to it, it will append the digit 1 after the user's input
      eg. age is 12 then adding 1 will make it 121
    now, to change it we use Number()
    Number() converts string to a number

    Similarly we have String(), Boolean()
*/

{
  //counter program
  //increment, decrement and a reset button

  const incbtn = document.createElement("button");
  const decbtn = document.createElement("button");
  const resetbtn = document.createElement("button");

  incbtn.innerText = "increment";
  decbtn.innerText = "decrement";
  resetbtn.innerText = "reset";

  const counterdiv = document.getElementById("counterdiv");
  const counterval = document.getElementById("counterval");

  counterdiv.appendChild(incbtn);
  counterdiv.appendChild(resetbtn);
  counterdiv.appendChild(decbtn);

  incbtn.addEventListener("click", () => {
    console.log("incrementing");
    let val = counterval.textContent;
    counterval.textContent = val + 1;
  });

  decbtn.addEventListener("click", () => {
    console.log("decrementing");
    let val = counterval.textContent;
    counterval.textContent = val - 1;
  });

  resetbtn.addEventListener("click", () => {
    console.log("resetting");
    let val = counterval.textContent;
    counterval.textContent = 0;
  });
}

/*
  Math class
    Math.PI
    Math.E

    Math.round()
    Math.ceil()
    Math.floor()
    Math.trunc()
    Math.pow()
    Math.sqrt()
    Math.log()
    Math.sin()
    Math.cos()
    Math.tan()
    Math.abs() //always positive
    Math.max(a,b,c)
    Math.min(a,v,b,d)
    Math.random() //gives a number between 0 and 1


*/

{
  //creating a random number in js

  let rand = Math.floor(Math.random(10) * 100);
  console.log(rand);

  //random number between two values
  let min = 10;
  let max = 40;
  let finalRandom = Math.floor(Math.random() * (max - min)) + min;
  console.log(finalRandom);
}

{
  //creating a one minute countdown timer
  const startbtn = document.createElement("button");
  startbtn.innerText = "start countdown";

  const countdowndiv = document.getElementById("countdowndiv");
  countdowndiv.appendChild(startbtn);

  const secondsdiv = document.getElementById("seconds");
  let seconds = 60;

  startbtn.addEventListener("click", () => {
    runTimer();
  });

  const runTimer = () => {
    if (seconds != 0) {
      seconds--;
      secondsdiv.innerText = seconds;
      setTimeout(runTimer, 1000);
    }
  };
}

{
  //creating a stopwatch
  const swstartbtn = document.getElementById("swstartbtn");
  const swstopbtn = document.getElementById("swstopbtn");
  const swresetbtn = document.getElementById("swresetbtn");
  const swlapbtn = document.getElementById("swlapbtn");

  const laps = document.getElementById("laps");
  const laplist = document.getElementById("laplist");

  const secCountDiv = document.getElementById("secCount");
  const minCountDiv = document.getElementById("minCount");

  let timer = false;
  let secCount = 0;
  let minCount = 0;

  swstartbtn.addEventListener("click", () => {
    timer = true;
    stopwatch();
  });

  swresetbtn.addEventListener("click", () => {
    reset();
  });

  swstopbtn.addEventListener("click", () => {
    timer = false;
  });

  swlapbtn.addEventListener("click", () => {
    let templistitem = document.createElement("li");
    let currenttime = `${minCount} : ${secCount}`;
    templistitem.innerText = currenttime;
    laplist.appendChild(templistitem);
  });

  function stopwatch() {
    if (timer == true) {
      secCount++;
      secCountDiv.innerText = secCount;
      if (secCount == 60) {
        minCount++;
        secCount = 0;
        secCountDiv.innerText = secCount;
        minCountDiv.innerText = minCount;
      }
      setTimeout(stopwatch, 1000); //this is the most important logic of this code
    }
  }

  function reset() {
    secCount = 0;
    minCount = 0;
    secCountDiv.innerText = secCount;
    minCountDiv.innerText = minCount;
    timer = false; //timer stops as we reset
  }
}

{
  //playing with dates
  let currentDate = new Date();
  console.log(currentDate.getDate());
  console.log(currentDate.getMonth() + 1); //months are zero based
  console.log(currentDate.getFullYear());

  const submitagebtn = document.getElementById("submitage");
  const ageresultdiv = document.getElementById("ageresult");

  //calculate the age using user's entered dob

  submitagebtn.addEventListener("click", (event) => {
    event.preventDefault();
    let userdate = document.getElementById("udate").value;
    let usermonth = document.getElementById("umonth").value;
    let useryear = document.getElementById("uyear").value;

    console.log(`${userdate} / ${usermonth} / ${useryear}`);
    if (userdate == "" || usermonth == "" || useryear == "") {
      ageresultdiv.innerText = "Please enter correct date";
      return;
    }
    console.log("hello");
    let yearDiff = Number(currentDate.getFullYear()) - Number(useryear);
    console.log(yearDiff);

    if (Number(usermonth) > Number(currentDate.getMonth()) + 1) {
      if (Number(userdate) >= Number(currentDate.getDate())) {
        yearDiff--;
      }
    }
    ageresultdiv.innerText = `your age is ${yearDiff}`;
  });
}

{
  //understanding the change event
  let dateip = document.getElementById("datedropdown");
  dateip.addEventListener("change", () => {
    console.log("value updated");
  });
}
//date picker
{
  //picking dates
  const yeardropdown = document.getElementById("yeardropdown");
  const monthdropdown = document.getElementById("monthdropdown");
  const datedropdown = document.getElementById("datedropdown");

  monthdropdown.disabled = true; //disabled until user selects year
  datedropdown.disabled = true;

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  //adding first dropdown value
  let yearOption1 = document.createElement("option");
  yearOption1.text = "please select";
  yearOption1.value = "";
  yeardropdown.add(yearOption1);

  let monthOption1 = document.createElement("option");
  monthOption1.text = "please select";
  monthOption1.value = "";
  monthdropdown.add(monthOption1);

  function initializeDateDropdown() {
    datedropdown.innerHTML = "";
    let dateOption1 = document.createElement("option");
    dateOption1.text = "please select";
    dateOption1.value = "";
    datedropdown.add(dateOption1);
  }

  initializeDateDropdown();

  //populating year dropdown
  for (let year = currentYear; year >= 1900; year--) {
    let yearOption = document.createElement("option");
    yearOption.text = year;
    yearOption.value = year;
    yeardropdown.add(yearOption);
  }

  //populating month dropdown
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "nov",
    "Dec",
  ];
  months.forEach((month, index) => {
    let monthOption = document.createElement("option");
    monthOption.text = month;
    monthOption.value = index + 1;
    monthdropdown.add(monthOption);
  });

  yeardropdown.addEventListener("change", () => {
    console.log(yeardropdown.value);
    if (yeardropdown.value == "") {
      monthdropdown.disabled = true;
      return;
    }
    monthdropdown.disabled = false;
  });

  monthdropdown.addEventListener("change", () => {
    if (monthdropdown.value == "") {
      datedropdown.disabled = true;
      return;
    }
    datedropdown.disabled = false;
    initializeDateDropdown();
    let daycount = populateDateDropdown(monthdropdown.value);
    for (let day = 1; day <= daycount; day++) {
      let dayOption = document.createElement("option");
      dayOption.text = day;
      dayOption.value = day;
      datedropdown.add(dayOption);
    }
  });

  function populateDateDropdown(month) {
    console.log(typeof month); //since type of month is string, we need to put Number(month) in the switch
    let days;
    switch (Number(month)) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        if (yeardropdown.value % 4 == 0) {
          days = 29;
        } else {
          days = 28;
        }
        break;

      default:
        break;
    }
    console.log(`daysss :: ${days}`);
    return days;
  }
}

{
  //checkbox
  const checkbox1 = document.getElementById("checkbox1");
  const checkboxbtn = document.getElementById("checkboxbtn");

  checkboxbtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkbox1.checked) {
      console.log("okayyy");
    } else {
      console.log("nope check it first");
    }
  });
}

//string methods in javascript
{
  let username = "pandiaaman";

  //strings in javascript are immutable
  console.log(username.toUpperCase());
  console.log(username); //actual value does not change unless mentioned explicitly

  console.log(username.charAt(2));

  console.log(username.length); //length is a property and not a method that needs any input parameters

  console.log(username.slice(2, 5));

  console.log(username.replace("p", "a"));

  console.log(username.indexOf("d"));
  console.log(username.lastIndexOf("a"));
  console.log(username.substring(2, 5));
  username = "   " + username;
  username += "   .";
  console.log(username);
  console.log(username.trim());
}

{
  //regex
  let email = "pandiaaman16@gmail.com";

  let pattern1 = /aman/;
  console.log(pattern1.test(email));

  let pattern2 = /[a-z1-9]+@[a-z]+[mail.com]/;
  console.log(pattern2.test(email));

  let email1 = "paand ia@gmail.com";
  let pattern3 = /\s/;
  console.log(pattern3.test(email1));
}

/*
  equality operators
    = assignment operator
    == comparison operator
    === strict equality
    != inequality operator
    !== strict inequality operator
*/

{
  //generating a random number between 1 and 10
  let randVal = Math.floor(Math.random() * 10) + 1;
  console.log(randVal);

  //random value between a max and a min
  let max = 10;
  let min = 1;
  let randVal2 = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randVal2);
}

//variable scope in js
/*
  //global vs local
*/

//spread operator in javascript
