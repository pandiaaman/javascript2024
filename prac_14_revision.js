console.log("revision...");
/*
{
  //callbacks
  function getData(data) {
    console.log(data);
    return data;
  }

  //callback hell
  setTimeout(() => {
    getData(111);
    setTimeout(() => {
      getData(222);
      setTimeout(() => {
        getData(333);
      }, 2000);
    }, 2000);
  }, 2000);
}

{
  //promises

  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1 resolved");
      console.log(promise1);
    }, 7000);
  });

  console.log(promise1);

  //getData imitates an API call which returns a promise
  //a promise is returned immediately
  //data comes later on
  function getData(data) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success data from APi " + data);
        console.log(promise);
      }, 5000); //data will come after 5 seconds
    });

    return promise;
  }

  //handle promises
  function receiveData() {
    getData(123)
      .then((res) => {
        console.log("success " + res);
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }

  receiveData();

  //promise chaining
  function receiveDataChain() {
    getData(999)
      .then((result1) => {
        console.log("first call " + result1);
        getData(888)
          .then((result2) => {
            console.log("second call " + result2);
            getData(777)
              .then((result3) => {
                console.log("third call " + result3);
              })
              .catch((error) => {
                console.log("error in third call" + error);
              });
          })
          .catch((error) => {
            console.log("error in second call" + error);
          });
      })
      .catch((error) => {
        console.log("error in first call" + error);
      });
  }

  receiveDataChain();
}

{
  //async await
  //async always returns a promise
  //await pauses and waits for the promise to be returned

  async function hellothere() {
    console.log("hello");
  }

  hellothere();

  //await works to get data from functions that returns a promise

  function api(data) {
    //this method returns a promise
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(promise);
        resolve(`*********data from api ${data}`);
      }, 12000); //after 12 seconds
    });
    return promise;
  }

  (async function getApiData() {
    await api(5667);
    await api(6778);
  })(); //IIFE: immediately invoked function expression
}

{
  let arr1 = [1, 2, 32, 3, 4];
  for (let item in arr1) {
    console.log(item);
  }
  for (let item of arr1) {
    console.log(item);
  }
}

//fetch api
{
  fetch("https://cat-fact.herokuapp.com/facts")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
*/
{
  //map filter reduce
  let arr = [1, 2, 3, 4, 4, 5, 6, 6];

  let arr1 = arr.map((x) => x * 2);

  console.log(arr1);

  let arr2 = arr.filter((x) => x % 2 == 0);
  console.log(arr2);
  //same as above
  let arr4 = arr.filter((x) => {
    return x % 2 == 0;
  });
  console.log(arr4);

  //reduce to find the max

  let maxVal = arr.reduce((prev, curr) => {
    if (prev > curr) {
      return prev;
    } else {
      return curr;
    }

    // return prev > curr ? prev : curr;
  });
  console.log(maxVal);
}

{
  //random value
  let randVal = Math.floor(Math.random() * 100);
  console.log(randVal);

  //random value between two numbers
  let max = 40;
  let min = 20;
  let randomVal = min + Math.floor(Math.random() * (max - min));
  console.log(randomVal);
}

{
  //one min countdown timer
  let countdowntimerdiv = document.createElement("div");
  window.document.body.appendChild(countdowntimerdiv);
  countdowntimerdiv.style.width = "100%";
  countdowntimerdiv.style.textAlign = "center";

  let countdowntitle = document.createElement("h2");
  countdowntitle.textContent = "10 sec countdown timer";
  countdowntimerdiv.appendChild(countdowntitle);

  let countdownstartbtn = document.createElement("button");
  countdownstartbtn.textContent = "start";
  countdownstartbtn.style.padding = "2em";
  countdowntimerdiv.appendChild(countdownstartbtn);

  let countdowninput = document.createElement("input");
  countdowninput.id = "countdowninput";
  countdowninput.style.padding = "1.5em";
  countdowntimerdiv.appendChild(countdowninput);

  let countdowntime = document.createElement("h3");
  countdowntime.style.color = "purple";
  countdowntime.textContent = "10";
  countdowntimerdiv.appendChild(countdowntime);

  countdownstartbtn.addEventListener("click", () => {
    console.log("started");
    let countdowntimeval = document.getElementById("countdowninput").value;
    startCountdownTimer(countdowntimeval);
  });

  function startCountdownTimer(countdowntimeval) {
    if (Number(countdowntimeval) == 0) {
      return;
    }

    countdowntimeval = Number(countdowntimeval) - 1;
    countdowntime.textContent = countdowntimeval;

    setTimeout(() => {
      startCountdownTimer(countdowntimeval);
    }, 1000);
    // setTimeout(startCountdownTimer, 1000); //in callback function names we do NOT use ()
  }
}

{
  //regex
  //pattern.test
  //string.search
  let pattern1 = new RegExp(/[a-z]{1}/);
  let str1 = "hello";
  console.log(pattern1.test(str1));

  let pattern2 = /[a-z 0-9]{2}@{1}/;
  let str2 = "a1@";
  console.log(pattern2.test(str2));
}

{
  //spread operator ...
  let arr1 = [1, 2, 3, 4, 5];
  console.log(arr1);
  console.log(...arr1);

  console.log(Math.max(...arr1));
}

{
  //datatype conversion
  let b1 = true;
  console.log(b1 + "hello");
  let bToS = String(b1);
  console.log(bToS + "hello");
  console.log(true + false); //1 : automatically gets converted to 0 and 1
  console.log(Number(true));
  console.log(Number(false));
  console.log(Number("a")); //NaN : not a number
  console.log(String(34));

  console.log(Boolean("")); //false: empty string
  console.log(Boolean("a")); //trye: any value present

  const PI = Math.PI;
  console.log(PI);
}

{
  //random number generator
  let min = 10;
  let max = 50;
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

{
  //truthy and falsy values
}

{
  //checked property
  console.log("check");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = "checked";
  window.document.body.appendChild(checkbox);
  let p = document.createElement("span");
  p.textContent = "check me";
  window.document.body.appendChild(p);

  //radio buttons

  let radioin1 = document.createElement("input");
  radioin1.type = "radio";
  radioin1.id = "radioin1";
  radioin1.name = "radiotest";

  let labelOne = document.createElement("label");
  labelOne.for = "radioin1";
  labelOne.textContent = "Radio1";

  let radioin2 = document.createElement("input");
  radioin2.type = "radio";
  radioin2.id = "radioin2";
  radioin2.name = "radiotest";

  let labelTwo = document.createElement("label");
  labelTwo.for = "radioin2";
  labelTwo.textContent = "Radio2";

  document.body.appendChild(radioin1);
  document.body.appendChild(labelOne);
  document.body.appendChild(radioin2);
  document.body.appendChild(labelTwo);
}
