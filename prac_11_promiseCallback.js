console.log("async await promises callback");

//asynchronous programming:

//async awaits >> promise chains >> callbacks
//async awaits are better than promise chains and these are better than callbacks
{
  // setTimeout(); //calls a function but we can decide when it will run

  function somefun() {
    console.log("function called after 2 secs");
  }

  setTimeout(somefun, 2000);

  console.log("one");
  console.log("two");

  setTimeout(() => {
    console.log("function called after 3 secs from setTimeout");
  }, 3000);

  console.log("three");
  console.log("four");
}

//callback: function passed as an argument to another function
{
  function sum(a, b) {
    console.log(a + b);
    return a + b;
  }

  function calculate(a, b, callback) {
    callback(a, b);
  }

  calculate(1, 2, sum); //passing sum as the callback method in another method calculate

  //setTimeout takes a callback method and runs it asynchronously (parallely to the other code flow)
  setTimeout(() => {
    console.log("running a callback method after a delay");
  }, 3000);
}

//callback hell
//nested callbacks where there are callbacks within callbacks are both complicated and difficult to understand for developers
//hence we prefer not to use callbacks whenever there is a situation for callback hell
//example of callback hell
{
  //lets say we are getting data from api and we only want the second data after 2 secs of receiving first data
  //similarly we want third data after 2 secs of 2nd data
  //to implement this we need to make sure that the calls are made correctly

  function getData(data) {
    console.log(`data: ${data}`);
  }

  //WRONG WAY
  setTimeout(getData(1), 2000);
  setTimeout(getData(2), 2000);
  setTimeout(getData(3), 2000);
  //above code is INCORRECT as the code flow will be asynchronous, it will not wait for 2 secs before calling the next line
  //all the lines will be called together and hence will run together

  //RIGHT WAY USING CALLBACKS (callback hell)
  setTimeout(() => {
    getData(11);
    setTimeout(() => {
      getData(22);
      setTimeout(() => {
        getData(33);
      }, 2000);
    }, 2000);
  }, 2000);

  //we can see if we keep on adding like this there will be lots of callbacks within callbacks
  //and we will not be able to understand what is going on
}

//another example of callback hell
{
  function getData(data, getNextData) {
    setTimeout(() => {
      console.log(`data2 : ${data}`);
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  }

  //below callback hell is similar to what we were doing up but now we have more concise callback
  getData(111, () => {
    getData(222, () => {
      getData(333);
    });
  });
}

///////////////////////////////////////////////////////////
///////PROMISES

//promises are used to solve the problem created using callback hell due to nested callbacks

// let promise = new Promise((resolve, reject) => {})

/*

  promises are eventual completion of task 

  think of promises as an order made at amazon
  here amazon promises us to send the order on time and we continue doing our other works instead of waiting for the delivery

  promises like amazon order has 3 main status: 
      pending(while it is in process of delivery)
      reject(if the order is cancelled)
      resolve/fulfilled(if the order is successful)
*/

{
  let promise1 = new Promise((resolve, reject) => {
    console.log("running a promise");
  }); //this will be printed to console, we dont need to call a promise like a function, it runs automatically

  //promise has two main parts,
  //1 its status(state) like pending, resolved or rejected
  //2 result value coming in if success

  let promise2 = new Promise((resolve, reject) => {
    console.log("success promise");
    resolve("success");
  });

  let promise3 = new Promise((resolve, reject) => {
    console.log("failed promise");
    reject("failed"); //shown as an ERROR
  });

  console.dir(promise1); //status is pending
  console.dir(promise2); //status is fulfilled
  console.dir(promise3); //status is rejected
}

//generally promises are nothing but API data coming in to the system
//as a JS developer our main task is NOT to create promises, they will be created by the API system sending us the data
//we need to TACKLE the promises and handle them properly
{
  function getAPIData(data) {
    //a function replicating an API call
    return new Promise((resolve, reject) => {
      //the API returns a promise immediately saying that within 5 secs you will get data
      setTimeout(() => {
        //a timeout method to replicate the delay in sending data
        console.log(`data from api promise: ${data}`);
        resolve("resolve success msg");
      }, 7000);
    });
  }

  // let gettingdata = getAPIData(123);
  // console.log(`gettingdata ::: ${gettingdata}`);

  //How to HANDLE PROMISES
  //.then() and .catch()
  let receivedata = getAPIData(567);
  receivedata
    .then((res) => {
      console.log("successfulllll   ", res);
    })
    .catch((err) => {
      console.log("faileddddd   ", err);
    });
}

//Promise chaining
{
  const someFunReturnsPromise = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("returning data" + data);
        resolve("success msg");
      }, 4000);
    });
  };

  console.log("promise chaining...");
  console.log("getting data 1");
  someFunReturnsPromise(999)
    .then((res) => {
      console.log("getting data 2");
      someFunReturnsPromise(888)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

//better example of promise chaining

{
  function getDataEx(data /*, getNextDataEx*/) {
    //we dont need the callback in case of promises
    //callback function
    // setTimeout(() => {
    //   console.log(`${data}`);
    //   if (getNextDataEx) {
    //     getNextDataEx();
    //   }
    // }, 2000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${data}`);
        resolve("success");
        reject("failed");
        /*if (getNextDataEx) {
          getNextDataEx();
        }*/
      }, 10000);
    }); //on calling getDataEx, the promise will be immediately returned to us
    //this will then return the data after 10 secs
  }

  //getting single data from promise
  getDataEx(55555)
    .then((res) => {
      console.log("promise resolved!!!");
      console.log(`promise result :: ${res}`);
    })
    .catch((err) => {
      console.log("promise rejected!!!", err);
    });

  //getting multiple datas from promises
  getDataEx(66666)
    .then((res) => {
      console.log("promise resolved!!!");
      console.log(`promise result :: ${res}`);
      getDataEx(123456)
        .then((res) => {
          console.log("next promise resolved");
          console.log(`next promise result ${res}`);
        })
        .catch((err) => {
          console.log("promise rejected!!!", err);
        });
    })
    .catch((err) => {
      console.log("promise rejected!!!", err);
    });

  //better way of writing above promise chaining
  getDataEx(77777)
    .then((res) => {
      console.log(`promise resolved 1:: ${res}`);
      return getDataEx(987654);
    })
    .then((res) => {
      console.log(`promise resolved 2:: ${res}`);
      return getDataEx(45673645);
    })
    .then(() => {
      console.log(`promise resolved 3:: ${res}`);
    });
}
